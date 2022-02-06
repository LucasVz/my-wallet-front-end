import styled from "styled-components";

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 13px;
    button{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;

        font-weight: bold;
        font-size: 17px;
        line-height: 20px;

        color: #FFFFFF;

        background: #A328D6;
        border-radius: 5px;
        border: none;
        text-align: start;

        width: 48%;
        height: 115px;
        img{
            width: 22px;
            height: 22px;
        }
    }
`;

export default Buttons;