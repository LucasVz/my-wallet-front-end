import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { useState } from 'react';
import Register from './components/Register';
import Wallet from './components/Wallet'
import Entry from './components/Entry'
import Exit from './components/Exit'
import UserContext from './context/UserContext'

export default function App(){

  const [token,setToken] = useState('');
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser }}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/wallet" element={<Wallet />}></Route>
              <Route path="/entry" element={<Entry />}></Route>
              <Route path="/exit" element={<Exit />}></Route>
          </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
