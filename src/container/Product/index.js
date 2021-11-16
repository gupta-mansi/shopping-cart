import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../products/action';
import ProductCard from '../../components/ProductCard';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../components/Home';
import Header from '../../components/Header';
import Login from '../../authComponents/login';
import Signup from '../../authComponents/Signup';
import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from '../../routes/PrivateRoute';
import Logout from '../../authComponents/logout';


function AllProducts() {

    const isAuthenticated = true;
    const dispatch = useDispatch();
    const {getProducts} = actions;
    useEffect(() => {
        console.log('useEffect');
        dispatch(getProducts());
    }, [])


    return (
        <Layout className="layout">
            <Router>
                <Header />
                    <PublicRoute exact path="/" component={Home} isAuthenticated={isAuthenticated} />
                    <PrivateRoute path="/products" component={ProductCard} />
                    <PublicRoute exact path="/login" component={Login} isAuthenticated={isAuthenticated} />
                    <PublicRoute exact path="/signup" component={Signup} />
                    <PublicRoute exact path="/logout" component={Logout} />
            </Router>

        </Layout>

        
    )
}
export default AllProducts;