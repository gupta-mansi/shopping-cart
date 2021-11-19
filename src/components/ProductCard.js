import React, { useState } from 'react';
import { Button, Card, Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import CartActions from '../cart/cartAction';  
import { SearchOutlined } from '@ant-design/icons';

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
        <center>
        <div style={{ display: 'inline-block', position: 'relative',marginTop: '15px', height: 'fit-content' }} >
            <input type="text" placeholder="Search here...." value={SearchKey} onChange={(e) => setSearchKey(e.target.value)} style={{ width: '80%', height: '36px', borderRadius: '2px 0 0 2px', border: 0, outline: '0 none', padding: '0 16px' }}/>
            <div style={{ justifyContent: 'flex-end', borderRadius: '2px', display: 'inline', backgroundColor: '#fff', border: '1px solid #fff', padding:'9px 16px'  }}><SearchOutlined /> </div>
        </div>
        </center>

            <div style={{display:'flex', flexWrap:'wrap', padding: '5px'}}> 
            {
                FilteredProducts?.length > 0 ? 
                FilteredProducts.map(data => (
                    <Content style={{padding: '5px'}}>
                        <Card hoverable bordered size="small" title={data.title} style={{ width: 300, height: 350, background: 'lightblue', fontWeight: 'bolder' }}>
                            <center> <img src={data.image} width="150px" height="150px"  alt="product image" style={{margin:'2px' , padding:'2px', objectFit: 'unset' }} ></img> 
                            <p style={{ maxHeight: 45, height: '20%', overflow: 'hidden', marginTop: '5px', color: 'slateBlue' }}>{data.description}</p>
                                <h3>Price: <span style={{ color: 'red' }}> {data.price}/- </span> </h3> </center>
                        <Button type="primary" size="large" value={data.id} onClick={() => handleClick(data)} style={{ width: 270, marginBottom: '5px' }} >Add to Cart</Button>
                        </Card>
                    </Content>
                    ))

                    : 

            ProductsData.length > 0 ? 
                ProductsData.map(data => (
                    <Content style={{padding: '5px'}}>
                        <Card hoverable bordered size="small" title={data.title} style={{ width: 300, height: 350, background: 'lightblue', fontWeight: 'bolder' }}>
                            <center> <img src={data.image} width="150px" height="150px"  alt="product image" style={{margin:'2px' , padding:'2px', objectFit: 'unset' }} ></img> 
                            <p style={{ maxHeight: 45, height: '20%', overflow: 'hidden', marginTop: '5px', color: 'slateBlue' }}>{data.description}</p>
                                <h3>Price: <span style={{ color: 'red' }}> {data.price}/- </span> </h3> </center>
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
