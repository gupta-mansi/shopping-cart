import React, { useState } from 'react';
import { Button, Card, Layout, Input, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import CartActions from '../cart/cartAction';

const { Search } = Input;

const ProductCard = () => {
    
const [SearchKey, setSearchKey] = useState('');

const { Content } = Layout;
const dispatch = useDispatch();
const ProductsData = useSelector(state => state.products.ProductData);

const {AddtoCart} = CartActions;

const FilteredProducts = (SearchKey.length > 0 ? ProductsData.filter(data => {
    return data.title.toLowerCase().includes(SearchKey.toLowerCase())}) : '' )

console.log('ProductData',ProductsData);

function handleClick(data){
    dispatch(AddtoCart(data))
}

    return (
        <div>  
        {/* <input type="text" placeholder="Search here...." value={SearchKey} onChange={(e) => setSearchKey(e.target.value)} style={{ marginTop: '15px', width: '450px', height: '40px' }}/> */}
        <center>
        <Space direction="vertical">
            <Search
                placeholder="input search text"
                value={SearchKey}
                onChange={(e) => setSearchKey(e.target.value)}
            />
        </Space>
        </center>
            <div style={{display:'flex', flexWrap:'wrap', padding: '5px'}}> 
            {
                FilteredProducts?.length > 0 ? 
                FilteredProducts.map(data => (
                        <Content style={{padding: '5px'}}>
                            <Card hoverable bordered size="small" title={data.title} style={{ width: 300, height: 350, background: 'lightblue' }}>
                                <center> <img src={data.image} width="150px" height="150px" alt="product image" style={{margin:'2px' , padding:'2px' }} ></img></center>
                                <p style={{ maxHeight: 45, height: '20%', overflow: 'hidden' }}>{data.description}</p>
                                <h3>Price: {data.price}/- </h3>
                            <Button type="primary" size="large" key={data.id} style={{ width: 270, marginBottom: '5px' }} >Add to Cart</Button>
                            </Card>
                        </Content>
                        ))

                    : 

            ProductsData.length > 0 ? 
                ProductsData.map(data => (
                    <Content style={{padding: '5px'}}>
                        <Card hoverable bordered size="small" va title={data.title} style={{ width: 300, height: 350, background: 'lightblue' }}>
                            <center> <img src={data.image} width="150px" height="150px" alt="product image" style={{margin:'2px' , padding:'2px' }} ></img></center>
                            <p style={{ maxHeight: 45, height: '20%', overflow: 'hidden' }}>{data.description}</p>
                                <h3>Price: {data.price}/- </h3>
                        <Button type="primary" size="large" value={data.id} onClick={() => handleClick(data)} style={{ width: 270, marginBottom: '5px' }} >Add to Cart</Button>
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
