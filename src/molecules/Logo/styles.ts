import styled from "styled-components";


export const Container = styled.span`
    gap: 12px;
    
    transition: all 0.5s ease-in-out;

    &:hover {
        background-color: blueviolet ;
        color: white;
        cursor: pointer;
        box-shadow: 0px 0px 17px -5px blueviolet;
        padding: 5px;
    }
`;

export const Ls = styled.span`

    background-color: blueviolet;
    border-radius: 3px;
    padding: 5px;
    margin-right: 6px;
    color: white;
    
    &:hover {
        background-color: blueviolet ;
        color: black;  
    }   
`;

export const Lm = styled.span`
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    font-size: 24px;
    &:hover {
        background-color: blueviolet ;
        color: black;  
    }
`;