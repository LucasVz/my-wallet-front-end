import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
// import axios from 'axios';
import Container from "../WalletComponents/Container";
import Button from "../FormComponents/Button";
import Input from "../FormComponents/Input"
import Title from "../WalletComponents/Title"

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <Container>
            <Title>Nova saída</Title>
            <Input placeholder='Valor' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <Input placeholder='Descrição' type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <Button >Salvar saída</Button>
        </Container>
    );
}
