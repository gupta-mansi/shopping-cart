import { Card, Form, Input, Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {

let history = useHistory();

function handleSignup(values) {
    localStorage.setItem("username", JSON.stringify(values.username));
    localStorage.setItem("password", JSON.stringify(values.password));
    console.log('username',values);
    history.push('/login');
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
                onFinish={handleSignup}
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
                    label="Confirm Password"
                    name="confirmPassword"
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                    <Button type="primary" htmlType="submit"  >
                    Submit
                    </Button>
                </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Signup