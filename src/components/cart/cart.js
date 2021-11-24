import React from 'react';
import { CardImage, Container, ItemDetail, PriceDetail } from './style';
import { useSelector } from 'react-redux';
import { Card, Button, Input } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';


const Cart = () => {

    const cartItems = useSelector(state => state.CartReducer);
    console.log('cart',cartItems);
    const cart =  useSelector(state => state.CartReducer);
    return (
        <div>
        <center><h1> MY CART </h1> </center>
        <Container>
            <div style={{ flexFlow:'column', marginLeft: '200px'}}>
                { cartItems.map(items => 
                    <Card  style={{ width: 600 }}>
                        <CardImage src={items.image} alt="product image"></CardImage> 
                        <ItemDetail>
                            <p style={{marginBottom : '2px'}}>{items.title}</p>
                            <p>{items.category}</p>
                            <p>Rs.{items.price}</p>
                        </ItemDetail>
                        <div>
                            <Button shape="circle" size='small' icon={<MinusOutlined />} style={{backgroundColor: 'white', color: 'grey', borderColor: 'grey'}}  />
                            <Input size='small' value={items.qty ? items.qty : 1} style={{width:'30px', marginRight: '2px', marginLeft: '2px'}} />
                            <Button shape="circle" size='small' icon={<PlusOutlined />} style={{backgroundColor: 'white', color: 'grey', borderColor: 'grey'}}  />
                        </div>
                    </Card>
                )}
            </div>
            <PriceDetail>
                <Card title="PRICE DETAILS"  style={{ width: 350 }}>
                    <p>Price ({cart.qty} items)  <span style={{ float: 'right'}}> {cart.totalPrice} </span></p>
                    <p>Delivery Charges <span style={{color:'green', float: 'right'}}>FREE</span></p>
                    <p>----------------------------------------------------------------</p>
                    <p>Total Amount <span style={{ marginLeft: '150px', float: 'right'}}>{cart.totalPrice}</span></p>
                </Card>
            </PriceDetail>
        </Container>
        </div>
    )
}

export default Cart
