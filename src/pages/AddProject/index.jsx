import React, { useState } from 'react';
import styles from './index.module.scss';
// import {Button, Input} from "antd";
import { FolderOutlined, UploadOutlined } from "@ant-design/icons";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Button from '@material-ui/core/Button';
//import { Upload, Button } from 'antd';
import { post } from 'axios';
import { Input } from 'antd';





const AddProject = () => {


    const myFunction = () => {
        document.getElementById('button').addEventListener('click', () => {
            document.getElementById('file').click()
        })
    };
    const onChangeHandler = (e) => {

        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

              const urlValue =   document.getElementById('Url').value;
        fetch("http://localhost:3001/api/UipathReport?path=" + urlValue)
            .then(res => res.json())
        document.getElementById('buttonLink').click()


    };


    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.header}> Add Project</h1>
                <Button id="buttonLink" variant="contained" color="primary" component={Link} to="/" hidden={true}></Button>
                <button id="button" className={styles.button} onClick={() => myFunction()} >Add New</button>
                <div>
                <input id="Url" type="text" size="50" placeholder="Add Uipath Workspace Path"></input>
                </div>
                <p>
                    <input type="file" id="file" directory=""  webkitdirectory="" accept=".json" hidden={true} onChange={onChangeHandler} />
                </p>
                <div className={styles.recent}>
                    <h3 className={styles.recent__header}>Recent Projects</h3>
                    <div className={styles.recent__list}>
                        {
                            [1, 2, 3, 4, 5, 6].map(i => (
                                <a className={styles.project}>
                                    <div className={styles.project__box}>
                                        <FolderOutlined fill="#E3E3E3" className={styles.project__icon} />
                                    </div>
                                    <h6 className={styles.project__title}>RPANewProjec..project</h6>
                                </a>
                            ))

                        }
                    </div>
                </div>
            </div>
        </main>)
}

export default AddProject;
