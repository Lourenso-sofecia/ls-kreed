import styled from "styled-components";

export const Container = styled.button`
    cursor: pointer;
    background-color: blueviolet;
    border: 1px solid blueviolet;
    color: #fff;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    width: 200px;
    height: 60px;
    border-radius: 100px;
    margin-top: 50px;
    transition: all 0.25s ease-out;

    &:hover {
        background-color: #f8fdff;
        color: blueviolet ;
    }

`;