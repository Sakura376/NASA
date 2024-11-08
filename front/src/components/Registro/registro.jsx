import React, { useState } from 'react';
import './registro.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("Registration successful!");
    };

    const handleBack = () => {
        navigate("/"); // Navega de vuelta al inicio
    };

    return (
        <form onSubmit={handleRegister} className="register-form">
            <button type="button" className="back-button" onClick={handleBack}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <h2 className='r-title'>Register</h2>

            <div className="input-register">
                <label className='label' htmlFor="username">Username:</label>
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input className='input'
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="input-register">
                <label className='label' htmlFor="email">Email:</label>
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input className='input'
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="input-register">
                <label className='label' htmlFor="password">Password:</label>
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input className='input'
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="input-register">
                <label className='label' htmlFor="confirmPassword">Confirm Password:</label>
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input className='input'
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            <button className='reg-button' type="submit">Register</button>
        </form>
    );
}

export default Register;
