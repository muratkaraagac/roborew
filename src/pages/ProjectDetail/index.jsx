import React, {useState} from 'react';
import styles from './index.module.scss';
import {Header, Container, Column} from "../../components";
import {ProjectLogs, ProjectOverview, ProjectVisualization} from "../../components/Project";

const ProjectDetail = () => {
    
    const[contacts,setContacts] = useState([]);
    React.useEffect(()=>{
        fetch("http://localhost:3001/api/UipathReport?path=C:/Users/IS97654/Documents/UiPath/IadeDekontlariSureci")
    .then(res => res.json())
    .then((data) => {
     setContacts(data)
    })},[]);

    const[projectDetail,setProjectDetail] = useState([]);
    React.useEffect(()=>{
        fetch("http://localhost:3001/api/UipathProjectDetail?path=C:/Users/IS97654/Documents/UiPath/IadeDekontlariSureci")
    .then(res => res.json())
    .then((data) => {
        setProjectDetail(data)
    })},[]);

    const [started, setStarted] = useState(false);

    const handleStart = (val) => setStarted(val)
    return (
        <main className={styles.main}>
            <Header/>
            <Container>
                <Column>
                    <ProjectOverview projectDetail={projectDetail} contacts= {contacts} started={started} handleStart={handleStart}/>
                    <ProjectVisualization started={started} contacts= {contacts}/>
                </Column>
                <Column>
                    <ProjectLogs started={started} contacts= {contacts}/>
                </Column>
            </Container>
        </main>
    )
}

export default ProjectDetail;