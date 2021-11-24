import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ListWrapper = styled.li`
    listStyleType: none; 
    display: inline; 
    margin: 10px;
`;

export const LinkWrap = styled(Link)`
    font-size: 1.3rem; 
    text-decoration: none; 
    color: white; 
    margin: 10px;
`;