import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import Container from "../WalletComponents/Container";
import Button from "../FormComponents/Button";
import Input from "../FormComponents/Input"
import Header from "../WalletComponents/Header"
import { useContext } from "react";
import UserContext from '../../context/UserContext';


export default function Exit(){
    const [value, setValue] = useState('');
    const [description , setDescription] = useState('');
    const navigate = useNavigate();
    const { token } = useContext(UserContext);

    function sendExit(){
        const promise = axios.post('https://git.heroku.com/project-my-wallet.git/entry', {
            value: value,
            description: description,
            status: 'spent'
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
            <Button onClick={sendExit} type="submit">Salvar saída</Button>
        </Container>
    );
}
