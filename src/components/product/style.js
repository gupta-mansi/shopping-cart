import styled from "styled-components";
import { Button, Card } from 'antd';

export const ComponentWrapper = styled.div`
    background: #f8f8ff;
`;

export const SearchWrapper = styled.div`
    display: inline-block;
    position: relative;
    height: fit-content;
    margin-top: 15px
`;

export const SearchInput = styled.input`
    width: 80%;
    height: 36px;
    borderRadius: 2px 0 0 2px;
    border: 0;
    outline: 0 none;
    padding: 0 16px;
`;

export const SearchIcon = styled.div`
    justifyContent: flex-end;
    borderRadius: 2px;
    display: inline;
    background: #fff;
    border: 1px solid #fff; 
    padding: 9px 16px;
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    padding: 5px; 
    margin-left: 40px;
`;

export const CardWrapper = styled(Card)`
    width: 300px; 
    height: 350px; 
    text-align: center; 
    font-weight: bolder;
`;

export const ImageWrapper = styled.img`
    width: 150px;
    height: 150px;
    margin: 2px; 
    padding: 2px; 
    object-fit: unset;  
`;

export const DescriptionWrapper = styled.p`
    max-height: 45px; 
    height: 20%; 
    overflow: hidden; 
    margin-top: 5px; 
    color: slateBlue;
`;

export const ButtonWrap = styled(Button)`
    width: 270px; 
    margin-bottom: 5px;
    background: #1890ff;
`;