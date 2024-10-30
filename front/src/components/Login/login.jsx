import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory

    const handleLogin = async (e) => {
        e.preventDefault();

        // Aquí puedes agregar la lógica de autenticación

        // Si es exitoso, redirige al usuario a otra página
        navigate('/home'); // Cambia history.push a navigate
    };

    return (
        <form className='log-form' onSubmit={handleLogin}>
            <label className='log-lbl' htmlFor="username">Username:</label>
            <input className='log-input'
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label className='log-lbl' htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className='submit-btn' type="submit">Login</button>
            <button className='register-btn' type="register">Register</button>
        </form>
    );
}

export default Login;

