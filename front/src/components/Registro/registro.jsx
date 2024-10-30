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
            <h2>Register</h2>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
