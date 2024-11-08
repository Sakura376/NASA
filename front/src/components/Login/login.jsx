import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

function Login({ closeModal, statusModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    navigate("/");
    closeModal();
  };

  const handleRegister = () => {
    navigate("/registro");
    closeModal();
  };

  return (
    <div className={`log-modal ${statusModal && "active"}`}>
      <button onClick={closeModal} className="close-modal">
        &times;
      </button>
      <form className="log-form" onSubmit={handleLogin}>
        <div className="input-user">
          <label className="log-lbl" htmlFor="username">Username:</label>
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input
            className="log-input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-user">
          <label className="log-lbl" htmlFor="password">Password:</label>
          <FontAwesomeIcon icon={faLock} className="input-icon" />
          <input
            className="log-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="submit-btn" type="submit">Login</button>
        <button className="register-btn" type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}

export default Login;
