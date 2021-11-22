import React from "react";
import {Row, Col, Form, Input, Button, Checkbox} from 'antd';
import { Link } from "react-router-dom";



const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
};


const LoginPage = () => {
    const onFinish = (values) => {
        const user = values.username;
        const password = values.password;
        var count = 0 ;
        

        if(user === 'admin' && password === '1' ) {
            console.log('object');
        }
        else
        {
            
            count ++;
            console.log(count);
        }
        
    };

    return (
        <>
            <Row>
                <Col span={20} offset={2} style={{margin: '30vh auto'}}>
                    <Form
                        name="basic"
                        labelCol={{ span: 7 }}
                        wrapperCol={{ span: 10 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 7, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 11, span: 4 }}>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>

                        </Form.Item>
                    </Form>
                </Col>
            </Row>    
        </>
    )
}

export default React.memo(LoginPage)