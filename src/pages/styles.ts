import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    > div {
        width: 50%;
    }
    h1 {
        color: #1e255e;
        font-size:56px;
        font-weight: 600;
        padding-right: 60px;
    }
    h6 {
        font-size: 16px;
        color: rgba(30, 37, 94, 0.7);
        font-weight: normal;
        padding-right: 170px;

        margin-top: 25px;
    }
    
`;
export const ColumnImage = styled.div`
    position: relative;
    img {
        width: 387px;
        height: 450px;
        border-radius: 40px;
        
        margin-left: 160px;
    }
    text-align: right;
    
`;