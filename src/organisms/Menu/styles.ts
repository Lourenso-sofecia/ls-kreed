import styled from "styled-components";

export const MenuList = styled.ul`
    margin-left: auto;
`;
export const ItemList = styled.li`
    display: inline-block;
    margin-right: 25px;
    font-weight: 500;

    a{
        color: #1e255e;
    } 

    transition: all 0.9s ease-out;
    &:hover {
        cursor: pointer;
        border-bottom: 1px solid blueviolet;
    }
`;