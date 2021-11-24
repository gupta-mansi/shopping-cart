import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    min-width: 978px; 
    max-width: 1680px; 
    padding: 8px;
    flex-flow: row; 
    display: flex;
`;

export const CardImage = styled.img`
    opacity: 1; 
    position : absolute; 
    margin: auto;
    height: 85px; 
    width: 80px;
`;

export const ItemDetail = styled.div`
    padding-left: 90px;
    overflow: hidden;
`;

export const PriceDetail = styled.div`
    position: relative;
    width: 100%;
    display: inline-block;
    vertical-align: top; 
    flex-flow: column; 
    padding-left: 34px;
`;