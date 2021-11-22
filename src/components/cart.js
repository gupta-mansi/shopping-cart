import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Button, Input } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';


const Cart = () => {

    const cartItems = useSelector(state => state.CartReducer.cartItems);
    console.log('cart',cartItems);
    const cart =  useSelector(state => state.CartReducer);
    console.log(cart);
    return (
        <div>
        <center><h1> MY CART </h1> </center>
        <div style={{ margin: '0 auto', minWidth: '978px', maxWidth: '1680px', padding: '8px', flexFlow: 'row', display:'flex'}}>
            <div style={{ flexFlow:'column', marginLeft: '200px'}}>
                { cartItems.map(items => 
                    <Card  style={{ width: 600 }}>
                        <img src={items.image} alt="product image" style={{ opacity: '1', position :'absolute',margin:'auto', height: '85px', width:'80px' }} ></img> 
                        <div style={{paddingLeft: '90px',overflow:'hidden'}}>
                            <p style={{marginBottom : '2px'}}>{items.title}</p>
                            <p>{items.category}</p>
                            <p>Rs.{items.price}</p>
                        </div>
                        <div>
                            <Button type="primary" shape="circle" size='small' icon={<MinusOutlined />} style={{backgroundColor: 'white', color: 'grey', borderColor: 'grey'}}  />
                            <Input size='small' value={items.qty ? items.qty : 1} style={{width:'30px', marginRight: '2px', marginLeft: '2px'}} />
                            <Button type="primary" shape="circle" size='small' icon={<PlusOutlined />} style={{backgroundColor: 'white', color: 'grey', borderColor: 'grey'}}  />
                        </div>
                    </Card>
                )}
            </div>
            <div style={{position: 'relative',
                            width: '100%',
                            display: 'inline-block',
                            verticalAlign: 'top', flexFlow: 'column', paddingLeft:'34px'}}>
                <Card title="PRICE DETAILS"  style={{ width: 350 }}>
                    <p>Price ({cart.qty} items)  <span style={{ float: 'right'}}> {cart.totalPrice} </span></p>
                    <p>Delivery Charges <span style={{color:'green', float: 'right'}}>FREE</span></p>
                    <p>----------------------------------------------------------------</p>
                    <p>Total Amount <span style={{ marginLeft: '150px', float: 'right'}}>{cart.totalPrice}</span></p>
                </Card>
            </div>
        </div>
        </div>
    )
}

export default Cart
