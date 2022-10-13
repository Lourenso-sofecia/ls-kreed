import styled from "styled-components";

export const Container = styled.button`
    width: 130px;
    height: 42px;
    //border: 1px solid #17a4d0;
    border: 1px solid blueviolet;
    color: blueviolet;

    font-size: 14px;
    margin-left: 25px;
    border-radius: 5px;
    box-shadow: 0px 0px 17px -8px transparent;
    transition: all 0.5s ease-in-out;

    &:hover {
        background-color: blueviolet ;
        color: white;
        cursor: pointer;
        box-shadow: 0px 0px 17px -5px blueviolet;
    }
`;