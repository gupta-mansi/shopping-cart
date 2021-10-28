import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Card } from 'antd';
import { Layout, Menu } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import useAxios from 'axios-hooks';

const { Header, Content } = Layout;

function Products() {

    const dispatch = useDispatch();
    const content = useSelector(state => state);

    useEffect(() => {
       axios.get('https://fakestoreapi.com/products/')
        .then(response => {console.log(response) })
        // .then(products => dispatch({type: "FETCH_PRODUCT", data: products}))
    }, []);
    // const data = useAxios('https://fakestoreapi.com/products/');
    // console.log(data[0]?.data);



    return (
        <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                {new Array(2).fill(null).map((_, index) => {
                const key = index + 1;
                return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                })}
            </Menu>
            </Header>
            {content.map(data => (
            <Content style={{display:'flex',flexDirection:'row'}}>
                <Card size="small" title="Default size card" style={{ width: 300 }}>
                    <p>{data.title}</p>
                <Button type="primary" size="large" style={{ width: 270 }} >Add to Cart</Button>
                </Card>
            </Content>
            ))} 
        </Layout>
    )

}

export default Products;