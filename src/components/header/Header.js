import React from 'react';
import {  Layout } from 'antd';
import { LogoutOutlined, ShoppingCartOutlined, LoginOutlined } from '@ant-design/icons';
import { LinkWrap, ListWrapper } from './style';

function Header() {

    const { Header } = Layout;
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
                        <LinkWrap to='/cart'><ShoppingCartOutlined /></LinkWrap>
                
                        <LinkWrap to="/logout"><LogoutOutlined />Logout</LinkWrap>
                    </ListWrapper>
                </div>
            </Header>
        </div>
    )
}

export default Header;