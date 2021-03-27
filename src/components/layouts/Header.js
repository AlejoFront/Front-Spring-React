import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth';

const Header = () => {
    const {uid} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <nav>
            <ul>
                {
                    uid
                    ?
                    <>
                        <li>
                            <NavLink
                                to='/'
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/books'
                            >Books</NavLink>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Salir</button>
                        </li>
                    </>
                    :
                    <>
                        <li>
                            <NavLink
                                to='/auth/login'
                            >Login</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/auth/register'
                            >Registro</NavLink>
                        </li>
                    </>

                }


            </ul>
        </nav>
    )
}

export default Header
