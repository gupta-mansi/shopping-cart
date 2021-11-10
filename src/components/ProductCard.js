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

    const content = useSelector(state => state.ProductReducer.content);
    const cart = useSelector(state => state.cartReducer.cart);

    console.log('content',content);
    console.log('cart', cart);
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
            
            <div style={{display:'flex', flexWrap:'wrap', padding: '5px'}}> 

            {content.length > 0 ? 
                content.map(data => (
                    <Content style={{padding: '5px'}}>
                        <Card hoverable bordered size="small" title={data.title} style={{ width: 300, height: 350, background: 'lightblue' }}>
                            <center> <img src={data.image} width="150px" height="150px" alt="product image" style={{margin:'2px' , padding:'2px' }} ></img></center>
                            <p style={{ maxHeight: 45, height: '20%', overflow: 'hidden' }}>{data.description}</p>
                        <Button type="primary" size="large" key={data.id} style={{ width: 270, marginBottom: '5px' }} onClick={() => dispatch({type: "ADD_TO_CART", payload:{
                            data, quantity: 1
                        } })}>Add to Cart</Button>
                        </Card>
                    </Content>
                    ))
                    : 
                    
                    '' 
                }  
                </div> 

        </Layout>

        
    )
}
export default Products;