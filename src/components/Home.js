import React from 'react'
import { useSelector } from 'react-redux'
import Header from './layouts/Header'

const Home = () => {
    const {email} = useSelector(state => state.auth)
    return (
        <>
            <Header />
            <h2>Vista Protegida Bienvenido: {email}</h2>
        </>
    )
}

export default Home
