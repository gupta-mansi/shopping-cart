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
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products" component={ProductCard} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
            </Router>

        </Layout>

        
    )
}
export default AllProducts;