import React, { useState } from 'react';
import './registro.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica de registro

        // Asegúrate de validar si la contraseña coincide con la confirmación
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        console.log("Registration successful!");
    };

    return (
        <form onSubmit={handleRegister} className="register-form">
            <h2 className='r-title'>Register</h2>
            <label className='label' htmlFor="username">Username:</label>
            <input className='input'
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label className='label' htmlFor="email">Email:</label>
            <input className='input'
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label className='label' htmlFor="password">Password:</label>
            <input className='input'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label className='label' htmlFor="confirmPassword">Confirm Password:</label>
            <input className='input'
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className='reg-button' type="submit">Register</button>
        </form>
    );
}

export default Register;
