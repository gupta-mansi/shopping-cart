import { Card, Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import authActions from '../auth/actions/auth';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector(state=> state.authReducer);

    const { LoginSuccess } = authActions;

    function handleLogin(values){
        const uname = JSON.parse(localStorage.getItem('username'));
        const password = JSON.parse(localStorage.getItem('password'));
        uname == values.username && password == values.password ? loginSuccess() : history.push('/');
    }

    function loginSuccess(){
        dispatch(LoginSuccess())
        history.push('/products');
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