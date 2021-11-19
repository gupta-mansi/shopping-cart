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
import PrivateRoute from '../../routes/PrivateRoute';
import Logout from '../../authComponents/logout';
import cart from '../../components/cart';


function AllProducts() {
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
                    <Route exact path="/products" component={ProductCard} />
                    <Route exact path="/cart" component={cart} />
                    <Route exact path="/" component={Home}  />
                    <Route exact path="/login" component={Login}  />
                    <Route path="/signup" component={Signup} />
                    <Route exact path="/logout" component={Logout} />
            </Router>

        </Layout>

        
    )
}
export default AllProducts;