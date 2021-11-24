import { Button } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
background: #fff;
flex-flow: row;
display: flex;
padding: 16px 16px 16px 16px;
`;

export const ImageContainer = styled.div`
border-radius: 70%;
display: block;
position: relative;
border: none;
`;

export const Image = styled.img`
max-width: 100%;
max-height; 100%;
transition: opacity .5s linear;
margin: auto;
height: 300px;
width: 450px;
object-fit: unset
`;

export const ProductData = styled.div`
width: 100%;
color: black;
display: block;
padding: 35px;
`;

export const RatingContainer = styled.div`
display: flex;
`;

export const Ratings = styled.div`
color: #fff;
background-color: #388e3c;
padding: 2px 2px 2px 4px;
border-radius: 10%;
margin-right: 8px
`;

export const Price = styled.div`
font-size: 24px;
padding: 5px;
`;

export const CartButton = styled(Button)`
    margin-left: 6%;
    background-color: #ff9f00;
    color: #fff;
    font-weight: bolder;
    font-size: medium
`;