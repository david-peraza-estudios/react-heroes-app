import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || "/";

        dispatch({
            type: types.login,
            payload: {
                name: 'Fernando'
            }
        });
        
        // history.replace("/");
        history.replace(lastPath);
    }
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button type="button" className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
