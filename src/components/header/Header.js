import React from 'react';
import {  Layout } from 'antd';
import { LogoutOutlined, ShoppingCartOutlined, LoginOutlined } from '@ant-design/icons';
import { CartQty, LinkWrap, ListWrapper } from './style';
import { useSelector } from 'react-redux';

function Header() {

    const { Header } = Layout;
    const cart = useSelector(state => state.CartReducer.totQty);
    console.log('header',cart);
    return (
        <div>
            <Header>
                <ListWrapper>
                    <LinkWrap to="/">Home</LinkWrap>
                    <LinkWrap  to="/products">Products</LinkWrap>
                    <LinkWrap to="/login"><LoginOutlined /> Login</LinkWrap>
                    <LinkWrap to="/signup">SignUp</LinkWrap>
                </ListWrapper>

                <div style={{float: 'right'}}>
                    <ListWrapper>
                        <LinkWrap to='/cart'><ShoppingCartOutlined /><CartQty>{cart}</CartQty></LinkWrap>
                
                        <LinkWrap to="/logout"><LogoutOutlined />Logout</LinkWrap>
                    </ListWrapper>
                </div>
            </Header>
        </div>
    )
}

export default Header;