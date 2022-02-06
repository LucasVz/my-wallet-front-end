import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
// import axios from 'axios';
import logo from '../../assets/logo.png'
import Container from "../FormComponents/Container";
import Button from "../FormComponents/Button";
import Input from "../FormComponents/Input"

export default function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signIn(e){

    }

    return(
        <Container onSubmit={signIn}>
            <img src= {logo} alt="logo" />
            <Input placeholder='Nome' type="name" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <Input placeholder='E-mail' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <Input placeholder='Senha' type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <Input placeholder='Confirme a senha' type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <Button >Cadastrar</Button>
            <Link to={'/cadastro'}> Primeira vez? Cadastre-se!</Link>
        </Container>
    );
}
