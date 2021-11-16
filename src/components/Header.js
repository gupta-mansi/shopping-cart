import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout } from 'antd';

function Header() {

    const { Header } = Layout;
    return (
        <div>
            <Header>
                <li style={{ listStyleType: "none", display: 'inline', margin: '10px' }}>
                    <Link style={{ fontSize: "1.3rem", textDecoration: "none", color: "white", listStyleType: "none" }} to="/">Home</Link>
                </li>
                <li style={{ listStyleType: "none", display: 'inline', margin: '10px' }}>
                <Link  style={{ fontSize: "1.3rem", textDecoration: "none", color: "white", listStyleType: "none" }} to="/products">Products</Link>
                </li>
                <li style={{ listStyleType: "none", display: 'inline', margin: '10px' }}>
                <Link  style={{ fontSize: "1.3rem", textDecoration: "none", color: "white", listStyleType: "none", float: 'right' }} to="/login">Login</Link>
                </li>
                <li style={{ listStyleType: "none", display: 'inline', margin: '10px' }}>
                <Link  style={{ fontSize: "1.3rem", textDecoration: "none", color: "white", listStyleType: "none", float: 'right' }} to="/signup">SignUp</Link>
                </li>
            </Header>
        </div>
    )
}

export default Header;