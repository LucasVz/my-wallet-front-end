import styled from "styled-components";

const Balance = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 12px;
    span{
        font-size: 16px;
        line-height: 19px;
    }

    .date{
        color: #C6C6C6;
        margin-right: 5px;
    }

    .description{
        color: #000000;
    }

    .entry-color{
        text-align: right;
        color: #03AC00;
    }

    .exit-color{
        color: #C70000;
        text-align: right;
    }
`;

export default Balance;