import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { startRegister } from '../../actions/auth';
import Header from '../layouts/Header';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [name, setNames] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        
        e.preventDefault();
        if(password !== password2){
            return console.log('las contraseñas no coinciden')
        }
        dispatch(startRegister(username, password, name, lastName, birthDate+'T00:00:00'))
    }
    return (
        <>
            <Header />
            <h2>Register</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" 
                value={username} onChange={(e) => setUsername(e.target.value)} />
                <br /><br />
                <input type="password" placeholder="password" 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br /><br />
                <input type="password" placeholder="password" 
                value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                <br /><br />
                <input placeholder="name" 
                value={name} onChange={(e) => setNames(e.target.value)} />
                <br /><br />
                <input placeholder="lastName" 
                value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <br /><br />
                <input placeholder="date" 
                   type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                <br /><br />
                <button type="submit">Registarse</button>
            </form>
        </>
    )
}

export default Register
