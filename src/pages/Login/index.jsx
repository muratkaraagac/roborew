import React, { useState } from 'react';
import styles from './index.module.scss';
import {Container} from "../../components";
import {Form, Input, Button} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const Login = () => {

    const [formError, setFormError] = useState(false);

    const completeLogin = values => {
        setFormError(true);
    }


    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1 className={styles.logo}>roboRew</h1>
            </header>
            <div className={styles.container}>
                <Form className={styles.form} onFinish={completeLogin} onValuesChange={() => setFormError(false)}>
                    <h2 className={styles.form__heading}>Login</h2>
                    <Form.Item name="username" rules={[{ required: true }]}>
                        <Input size="large" placeholder="username" prefix={<UserOutlined />} bordered={false} className={styles.form__input}/>
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true }]}>
                        <Input type="password" size="large" placeholder="password" prefix={<LockOutlined />} bordered={false} className={styles.form__input}/>
                    </Form.Item>
                    <Form.Item style={{width: '200px'}}>
                        <Button type="primary" htmlType="submit"  className={styles.form__button} block>
                            Login
                        </Button>
                    </Form.Item>

                    {
                        formError && <p className={styles.form__message}>Kullanıcı Adı veya Şifreniz Geçersizdir!</p>

                    }
                </Form>
            </div>
        </main>
    )
}

export default Login;