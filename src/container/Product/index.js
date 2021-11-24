import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// antd imports
import 'antd/dist/antd.css';
import { Layout } from 'antd';
// antd imports

// import actions
import actions from '../../redux/products/action';
// import actions

// import routes
import PrivateRoute from '../../routes/PrivateRoute';
// routes import

// components import
import ProductCard from '../../components/product/ProductCard';
import Home from '../../components/Home';
import Header from '../../components/header/Header';
import Login from '../../components/authComponents/login';
import Signup from '../../components/authComponents/Signup';
import Logout from '../../components/authComponents/logout';
import Cart from '../../components/cart/cart';
import ViewProduct from '../../components/productDetail/ViewProduct';
import DetailAction from '../../redux/productDetail/action';
// components import 


function AllProducts() {
    const dispatch = useDispatch();
    const {getProducts} = actions;
    const {GetDetail} = DetailAction;
    useEffect(() => {
        console.log('getProducts useEffect');
        dispatch(getProducts());
    }, [])

    useEffect(() => {
        console.log('fetch product detail');
        dispatch(GetDetail());
    }, [])

    return (
        <Layout className="layout">
            <Router>
                <Header />
                {/* PrivateRoutes */}
                    <Route exact path="/products" component={ProductCard} />
                    <Route exact path="/cart" component={Cart} />
                {/* PrivateRoutes */}
                    <Route exact path="/" component={Home}  />
                    <Route exact path="/login" component={Login}  />
                    <Route path="/signup" component={Signup} />
                    <Route exact path="/logout" component={Logout} />

                    <Route exact path="/view" component={ViewProduct} />
                    <Route exact path='/productDetails/:id' component={ViewProduct} />
            </Router>

        </Layout>

        
    )
}
export default AllProducts;