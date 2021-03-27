import { fechConToken, fechSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const startLogin = (username, password) => {
    return async (dispatch) => {
        const data = {username: username, password: password}
        const response = await fechSinToken('auth/login',data, 'POST');
        const body = await response.json();
        if(body.message === 'OK'){
            
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login(
                {
                    uid: body.id, 
                    email: body.username,
                    names: body.names,
                    lastName: body.lastNames,
                    message: body.message,
                    birthDate: body.birthDate,
                    token: body.token, 
                    roles: body.rolUser
                }))
        }else{
            console.log(body.message)
        }
        
    }
}

export const startRegister = (username, password, name, lastName, birthDate) => {
    return async (dispatch) => {
        const data = {
            username: username, password: password, 
            names: name, lastNames: lastName, birthDate: birthDate
        }
        console.log(data)
        const response = await fechSinToken('v1/user',data, 'POST');
        const body = await response.json();

        if(body.message === 'OK'){
            console.log('usuario Registrado Correctamente')
        }
    }
}
//'auth/renew'
export const startChecking = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token') || '';
        
            const response = await fechConToken('auth/renew',token, 'POST');
            const body = await response.json();

            if (body.message === 'OK') {
                localStorage.removeItem('token');
                localStorage.removeItem('token-init-date');
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());
                dispatch(login({
                    uid: body.id, 
                    email: body.username,
                    names: body.names,
                    lastName: body.lastNames,
                    message: body.message,
                    birthDate: body.birthDate,
                    token: body.token, 
                    roles: body.roles
                }))
            }else{
                dispatch(checkingFinish());
            }
        
    }
    

}

const checkingFinish = () => ({type: types.authCheckingFinish});


export const login = (user) => ({
    type: types.login,
    payload: user
})

export const startLogout = () => {
    return (dispatch) => {
        localStorage.removeItem('token')
        localStorage.removeItem('token-init-date')
        dispatch(logout());
    }
}

const logout = () => ({
    type: types.logout
})
