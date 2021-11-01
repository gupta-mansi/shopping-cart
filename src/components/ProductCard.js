import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Card } from 'antd';
import { Layout, Menu } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchProductInstance from '../axios';

const { Header, Content } = Layout;

function Products() {

    const dispatch = useDispatch();


// FetchProductInstance.get('/products')
// .then(response => dispatch({ type: 'FETCH_PRODUCT', payload: response.data }))
// .catch(error => console.log(error));
    
     useEffect(() => {
        FetchProductInstance.get('/products/')
        .then(response => dispatch({type: "FETCH_PRODUCT", payload: response.data}))
        .catch(error => {console.log(error);})
    }, []);

    const content = useSelector(state => state.content);

    console.log('content',content);
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" >
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        {new Array(2).fill(null).map((_, index) => {
                        const key = index + 1;
                        return <Menu.Item key={key}>{`Menu ${key}`}</Menu.Item>;
                        })}
                    </Menu>
                </div>
            </Header>
            
            {content.length > 0 ? 
                content.map(data => (
                    <Content style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                        <Card size="small" title="Default size card" style={{ width: 300 }}>
                            <p>{data.title}</p>
                        <Button type="primary" size="large"  style={{ width: 270 }} >Add to Cart</Button>
                        </Card>
                    </Content>
                    ))
            : 
                
               '' 
            }  

        </Layout>

        
    )
}
export default Products;