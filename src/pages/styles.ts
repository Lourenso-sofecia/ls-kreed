import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    > div {
        width: 50%;
    }
    
`;
export const ColumnImage = styled.div`
    position: relative;
    text-align: right;
    img {
        width: 387px;
        height: 450px;
        border-radius: 40px;
        
        margin-left: 160px;
    }
    
`;