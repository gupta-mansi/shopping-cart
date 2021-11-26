import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CartActions from '../../redux/cart/cartAction'; 
import { ComponentWrapper, SearchWrapper, SearchInput, SearchIcon, ProductContainer, CardWrapper, ImageWrapper, DescriptionWrapper, ButtonWrap } from './style';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    

//  Hooks
    const [SearchKey, setSearchKey] = useState('');
    const { Content } = Layout;
    const dispatch = useDispatch();
    const {AddtoCart} = CartActions;
    const ProductsData = useSelector(state => state.products.ProductData);
// Hooks

// Functions
    const FilteredProducts = (SearchKey.length > 0 ? ProductsData.filter(data => {
        return data.title.toLowerCase().includes(SearchKey.toLowerCase())}) : '' )

    function handleClick(data,e){
        dispatch(AddtoCart(data))
        e.target.disabled = true;
    }

//  Functions

    return (
        <ComponentWrapper>
        <center>
        <SearchWrapper>
            <SearchInput type="text" placeholder="Search here...." value={SearchKey} onChange={(e) => setSearchKey(e.target.value)} allo/>
            <SearchIcon><SearchOutlined /> </SearchIcon>
        </SearchWrapper>
        </center>

            <ProductContainer> 
            {
                FilteredProducts?.length > 0 ? 
                FilteredProducts.map(data => (
                    <Content style={{padding: '5px'}}>
                        <CardWrapper hoverable bordered size="small" title={data.title}>
                            <center> <Link to={`/productDetails/${data.id}`}> <ImageWrapper src={data.image}  alt="product image" /> </Link>  
                            <DescriptionWrapper>{data.description}</DescriptionWrapper>
                                <h3>Price: <span style={{ color: 'red' }}> {data.price}/- </span> </h3> </center>
                        <ButtonWrap size="large" onClick={(e) => handleClick(data,e)}>Add to Cart</ButtonWrap>
                        </CardWrapper>
                    </Content>
                    ))

                    : 

            ProductsData.length > 0 ? 
                ProductsData.map(data => (
                    <Content style={{padding: '5px'}}>
                        <CardWrapper hoverable bordered size="small" title={data.title}>
                            <center> <Link to={`/productDetails/${data.id}`}> <ImageWrapper src={data.image}  alt="product image" /> </Link> 
                            <DescriptionWrapper>{data.description}</DescriptionWrapper>
                                <h3>Price: <span style={{ color: 'red' }}> {data.price}/- </span> </h3> </center>
                        <ButtonWrap size="large" onClick={(e) => handleClick(data,e)} >Add to Cart</ButtonWrap>
                        </CardWrapper>
                    </Content>
                    ))  
                    : 
                    
                    '' 
                }  
                </ProductContainer> 
        </ComponentWrapper>
    )
}

export default ProductCard;
