import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png'
import Container from "../FormComponents/Container";
import Button from "../FormComponents/Button";
import Input from "../FormComponents/Input"

export default function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    function signIn(e){
        e.preventDefault();

        if(password === confirmPassword){
            const promise = axios.post("https://git.heroku.com/project-my-wallet.git/sign-up", {
                name,
                email,
                password
            });
            promise.then (response => {
                navigate('/')
            });
            promise.catch (error => {
                setEmail('');
                setPassword('');
                setName('');
                alert('Email já existe ou informações foram preenchidas incorretamente');
            });
        }
        else{
            alert("credenciais incorretas");
        }
    }

    return(
        <Container onSubmit={signIn}>
            <img src= {logo} alt="logo" />
            <Input placeholder='Nome' type="name" onChange={(e) => setName(e.target.value)} value={name}/>
            <Input placeholder='E-mail' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <Input placeholder='Senha' type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <Input placeholder='Confirme a senha' type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
            <Button >Cadastrar</Button>
            <Link to={'/'}> Primeira vez? Cadastre-se!</Link>
        </Container>
    );
}
