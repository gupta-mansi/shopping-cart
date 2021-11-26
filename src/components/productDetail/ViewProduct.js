import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StarFilled } from '@ant-design/icons';
import { useHistory, useParams } from 'react-router';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Container, ImageContainer, Image, ProductData, RatingContainer, Ratings, Price, CartButton } from './style';
import CartActions from '../../redux/cart/cartAction';

const ViewProduct = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const {AddtoCart} = CartActions;
    const products = useSelector(state => state.ProductDetailReducer.products)

    function handleClick(data){
        dispatch(AddtoCart(data))
        history.push('/cart');
    }
    return (
        !products ? 'no data found'
        :
        products.filter(data => data.id == params.id)?.map(data => (
        <div style={{backgroundColor: '#fff'}}>
            <Container>
                <ImageContainer>
                    <Image src={data.image}></Image>
                </ImageContainer>
        
                    <ProductData>
                        <h1>{data.title}</h1>
                        <h3> {data.category} </h3>
                        <p style={{color:'#32CD32'}}>  {data.description} </p>
                        <RatingContainer>
                            <Ratings> {data.rating.rate}<StarFilled /> </Ratings>
                            <h4>{data.rating.count} Ratings</h4>
                        </RatingContainer>
                        <Price>Price: {data.price}/- </Price>
                    </ProductData>
            </Container>
            <CartButton onClick={() => handleClick(data)}><ShoppingCartOutlined /> ADD TO CART </CartButton>
        </div>

        ))
    )
}

export default ViewProduct
