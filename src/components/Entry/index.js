import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import Container from "../WalletComponents/Container";
import Button from "../FormComponents/Button";
import Input from "../FormComponents/Input"
import Header from "../WalletComponents/Header"
import { useContext } from "react";
import UserContext from '../../context/UserContext';


export default function Entry(){
    const [value, setValue] = useState('');
    const [description , setDescription] = useState('');
    const navigate = useNavigate();
    const { token } = useContext(UserContext);

    function sendEntry(){
        const promise = axios.post('https://project-my-wallet.herokuapp.com/entry', {
            value: value,
            description: description,
            status: 'earning'
        },{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        promise.then (response => {
            navigate('/wallet');
        });
        promise.catch (error => {
            console.log(error)
        });
    }


    return(
        <Container>
            <Header>Nova entrada</Header>
            <Input placeholder='Valor' type="number" onChange={(e) => setValue(e.target.value)} value={value} />
            <Input placeholder='Descrição' type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
            <Button onClick={sendEntry} type="submit">Salvar entrada</Button>
        </Container>
    );
}
