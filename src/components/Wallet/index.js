import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import Container from "../WalletComponents/Container";
import Buttons from "../WalletComponents/Buttons";
import Title from "../WalletComponents/Title"
import WalletBalance from "../WalletComponents/WalletBalance";
import plus from "../../assets/plus.png"
import minus from "../../assets/minus.png"
import { useContext } from "react";
import UserContext from '../../context/UserContext';

export default function Wallet(){

    const { token, user } = useContext(UserContext);

    return(
        <Container>
            <Title>ola, {user}</Title>
            <WalletBalance>teste</WalletBalance>
            <Buttons>
                <button><img src={plus} alt="sinal de mais" />Nova entrada</button>
                <button><img src={minus} alt="sinal de menos" />Nova saída</button>
            </Buttons>
        </Container>
    );
}
