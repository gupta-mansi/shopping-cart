import { Card, Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    function handleLogin(values){
        const uname = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        uname == JSON.stringify(values.username) && password == JSON.stringify(values.password) ? history.push('/products') : history.push('/login')
    }

    return (
        <div>
            <Card>
                <Form
                name="basic"
                labelCol={{ offset: 0, span: 6 }}
                wrapperCol={{ offset: 0, span: 24 }}
                initialValues={{ remember: true }}
                layout="vertical"
                onFinish={handleLogin}
                >
                <Form.Item
                    label="Username"
                    name="username"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 0, span: 24 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                    <Button type="primary" htmlType="submit" >
                    Submit
                    </Button>
                </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login