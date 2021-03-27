import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startLogin } from '../../actions/auth'
import Header from '../layouts/Header';

const Login = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('Felipe')
    const [password, setPassword] = useState('Felipe')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLogin(name,password))
    }
    return (
        <>
            <Header />
            <h2>Login</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <input placeholder="name" 
                value={name} onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <input type="password" placeholder="author" 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br /><br />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </>
    )
}

export default Login
