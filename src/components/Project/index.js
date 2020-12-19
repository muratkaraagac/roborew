import React, {useState} from 'react';
import {Radio, Collapse, Button} from "antd";
import {PieChartOutlined, UnorderedListOutlined} from "@ant-design/icons";
import styles from './index.module.scss'
import {Card} from "../index";

import logs from '../../__mocks__/logs'

import { ResponsivePie } from '@nivo/pie'


const ProjectOverview = ({started, handleStart,projectDetail}) => {
    return (
        projectDetail.map((contact) => (
      <Card>     
            <h2 className={styles.project__name}>{contact.filepath}</h2>
            <table className={styles.project__table}>
                <tbody>
                <tr>
                    <th>File Path:</th>
                    <td>{contact.filepath}</td>
                </tr>
                <tr>
                    <th>Project Version:</th>
                    <td>{contact.projectversion}</td>
                </tr>
                <tr>
                    <th>Studio Version</th>
                    <td>{contact.studioversion}</td>
                </tr>
                </tbody>
            </table>      
            <Button type="primary" className={styles.project__action} onClick={() => handleStart(!started)}>Start Analysis</Button>
        </Card>
        ))
    )
}

const ProjectVisualization = ({started,contacts}) => {

    if (!started) {
        return (
            <Card additionalStyles={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <PieChartOutlined className={styles.project__icon}/>
                <h2 className={styles.loading_text}>Analizi görmek için projeyi start edin</h2>
            </Card>

            )
    }
    const warning = contacts.filter(contact => contact.messageType === "warning");
    const error = contacts.filter(contact => contact.messageType === "error");
    const info = contacts.filter(contact => contact.messageType === "info");

    const data = [
        {id: 'warning', value: warning.length, color: '#FEE4BA', label: `%${(warning.length/contacts.length  * 100).toFixed(2)}`, subLabel: 'AAAAA', labelAnchorX: '25%'},
        {id: 'error', value: error.length, color: '#F5C6CB', label: `%${(error.length/contacts.length * 100).toFixed(2)}`},
        {id: 'info', value: info.length, color: '#BEE5EB',  label: `%${(info.length/contacts.length * 100).toFixed(2)}`},
    ];

    return (
        <Card additionalStyles={{display: 'flex', alignItems: 'center'}}>
            <div className={styles.boxes}>
                <div className={styles.boxes__item}>
                    <h6>{contacts.length}</h6>
                    <span>All</span>
                </div>
                <div className={`${styles.boxes__item} ${styles.error}`}>
                    <h6>{error.length}</h6>
                    <span>Error</span>
                </div>
                <div className={`${styles.boxes__item} ${styles.warning}`}>
                    <h6>{warning.length}</h6>
                    <span>Warning</span>
                </div>
                <div className={`${styles.boxes__item} ${styles.info}`}>
                    <h6>{info.length}</h6>
                    <span>Info</span>
                </div>
            </div>
            <div className={styles.charts} id="chart-container">
                <ResponsivePie
                    data={data}
                    colors={['#FEE4BA', '#F5C6CB', '#BEE5EB']}
                    // colors={{ scheme: 'accent' }}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', '0' ] ] }}
                    enableRadialLabels={false}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkColor={{ from: 'color' }}
                    sliceLabel={function(e){return e.label}}
                    sliceLabelsSkipAngle={10}
                    sliceLabelsTextColor="#000000"
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </Card>
    )
}


const ProjectLogs = ({started,contacts}) => {
    const [selectedTab, setSelectedTab] = useState('all')
    console.log(logs);
    if (!started) {
        return (
            <Card additionalStyles={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <UnorderedListOutlined className={styles.project__icon}/>
                <h2 className={styles.loading_text}>Analizi görmek için projeyi start edin</h2>
            </Card>

        )
    }
    const {Panel} = Collapse;

    const handleFilterChange = e => {
        console.log(e.target.value)
        setSelectedTab(e.target.value);
    }


    const filteredLogs = selectedTab !== 'all' ? contacts.filter(contact => contact.messageType === selectedTab) : contacts;

    return (
        <Card additionalStyles={{overflowY: 'scroll'}}>
            <Radio.Group onChange={handleFilterChange} value={selectedTab} className={styles.radio__wrapper}
                         buttonStyle="solid">
                <Radio.Button value="all" className={styles.radio__item} style={{flex: 1}}>All</Radio.Button>
                <Radio.Button value="error" className={styles.radio__item}>Error</Radio.Button>
                <Radio.Button value="warning" className={styles.radio__item}>Warning</Radio.Button>
                <Radio.Button value="info" className={styles.radio__item}>Info</Radio.Button>
            </Radio.Group>


            {
                filteredLogs.map((contact, index) => (
                 <Collapse key={index}>
                  <Panel className={`${styles.log__item} ${styles[contact.messageType]}`} header={contact.messageType} key={index}>
                   <p>{contact.messageDetail}</p>
                  </Panel>
                 </Collapse>
    ))
            }
        </Card>
    )

}
export {
    ProjectOverview,
    ProjectVisualization,
    ProjectLogs
}