import React from 'react';
import { Button } from 'antd';
import { Card } from 'antd';
import { Layout, Menu } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = () => {


const { Content } = Layout;

const ProductsData = useSelector(state => state.products.ProductData);

console.log('ProductData',ProductsData);

    return (
        <div>
            
            
            <div style={{display:'flex', flexWrap:'wrap', padding: '5px'}}> 

            {ProductsData.length > 0 ? 
                ProductsData.map(data => (
                    <Content style={{padding: '5px'}}>
                        <Card hoverable bordered size="small" title={data.title} style={{ width: 300, height: 350, background: 'lightblue' }}>
                            <center> <img src={data.image} width="150px" height="150px" alt="product image" style={{margin:'2px' , padding:'2px' }} ></img></center>
                            <p style={{ maxHeight: 45, height: '20%', overflow: 'hidden' }}>{data.description}</p>
                        <Button type="primary" size="large" key={data.id} style={{ width: 270, marginBottom: '5px' }} >Add to Cart</Button>
                        </Card>
                    </Content>
                    ))
                    : 
                    
                    '' 
                }  
                </div> 
                {/* onClick={() => dispatch({type: "ADD_TO_CART", payload:{
                            data, quantity: 1
                        } })} */}
        </div>
    )
}

export default ProductCard
