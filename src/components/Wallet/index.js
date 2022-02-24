import { Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from "../WalletComponents/Container";
import Buttons from "../WalletComponents/Buttons";
import Header from "../WalletComponents/Header"
import WalletBalance from "../WalletComponents/WalletBalance";
import WalletBalanceEmpty from "../WalletComponents/WalletBalanceEmpty";
import Balance from "../WalletComponents/Balance";
import plus from "../../assets/plus.png"
import minus from "../../assets/minus.png"
import logoutIcon from "../../assets/loguot-icon.png"
import { useContext } from "react";
import UserContext from '../../context/UserContext';

export default function Wallet(){

    const { token, user } = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const promise = axios.get('https://git.heroku.com/project-my-wallet.git/entry',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        promise.then(response => setTransactions(response.data));
        promise.catch(error => console.log(error.response));
    }, []);
    return(
        <Container>
            <Header>
                ola, {user}
                <Link to={"/"}><img src={logoutIcon} alt="desconectar" /></Link>
            </Header>
            {transactions.length === 0 ?
                <WalletBalanceEmpty>
                    <p>Não há registros de entrada ou saída</p>
                </WalletBalanceEmpty>
                :
                <WalletBalance>
                    {transactions.map(t => (
                        <Balance key={t._id}>
                        <div>
                            <span className="date">30/11</span>
                            <span className="description" >{t.transaction.description}</span>
                        </div>
                        <span className={(t.transaction.status === "earning") ? "entry-color" : "exit-color" }>{parseFloat(t.transaction.value).toFixed(2)}</span>
                        </Balance>
                    ))}
                </WalletBalance>
            }
            <Buttons>
                <Link className="new-entry" to={'/entry'}><img src={plus} alt="sinal de mais" />Nova <br/> entrada</Link>
                <Link className="new-entry" to={'/exit'}><img src={minus} alt="sinal de menos" />Nova <br/> saída</Link>
            </Buttons>
        </Container>
    );
}
