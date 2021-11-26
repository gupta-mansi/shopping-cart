import React, { useEffect } from 'react';
import { CardImage, Container, ItemDetail, PriceDetail, Buttons } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Input, Empty } from 'antd';
import { MinusOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';
import CartActions from '../../redux/cart/cartAction';
import { remove } from 'local-storage';

const Cart = () => {
    const dispatch = useDispatch();
    const { IncreaseQuantity, DecreaseQuantity, RemoveCart } = CartActions;
    const cart = useSelector(state => state.CartReducer);
    const cartItems = cart.cartItems;  
    console.log(cartItems);

    function increase(data){
        dispatch(IncreaseQuantity(data))
    }

    function decrease(data){
        dispatch(DecreaseQuantity(data))
    }

    function remove(id, qty){
        dispatch(RemoveCart(id, qty))
    }
    return (
        <div>
        <center><h1> MY CART </h1> </center>
        <Container>
            <div style={{ flexFlow:'column', marginLeft: '200px'}}>
                {
                    cartItems.length > 0?
                    cartItems.map((items, index) => 
                    <Card key={index} style={{ width: 600 }}>
                        <CardImage src={items.image} alt="product image"></CardImage> 
                        <ItemDetail>
                            <p style={{marginBottom : '2px'}}>{items.title}</p>
                            <p>{items.category}</p>
                            <p>Rs.{items.price}</p>
                        </ItemDetail>
                        <div>
                            <Buttons onClick={() => decrease(items.id)} shape="circle" size='small' icon={<MinusOutlined />}   />
                            <Input size='small' value={items.qty} style={{width:'30px', marginRight: '2px', marginLeft: '2px'}} />
                            <Buttons onClick={() => increase(items.id)} shape="circle" size='small' icon={<PlusOutlined />}  />
                            <Buttons onClick={() => remove(items.id, items.qty)} type='primary' danger style={{float: 'right'}}><CloseOutlined />Remove</Buttons>
                        </div>
                    </Card> 
                )  : <Empty /> } 
                
            </div>
            {cartItems.length > 0 ? 
            <PriceDetail>
                <Card title="PRICE DETAILS"  style={{ width: 350 }}>
                    <p>Price ({cart.totQty} items)  <span style={{ float: 'right'}}>  </span></p>
                    <p>Delivery Charges <span style={{color:'green', float: 'right'}}>FREE</span></p>
                    <p>----------------------------------------------------------------</p>
                    <p>Total Amount <span style={{ marginLeft: '150px', float: 'right'}}>   </span></p>
                </Card>
            </PriceDetail> : ''}
            
        </Container>
        </div>
    )
}

export default Cart
