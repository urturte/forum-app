import React, { useState } from "react";
import styles from "./loginForm.module.css";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import { Routes, Route, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    const userInfo = {
      email: email,
      password: password,
    };

    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        window.localStorage.setItem("token", data.jwt_token);
        return data.status;
      })
      .then((result) => {
        alert(result);
      });
    navigate("/");
  };
  return (
    <div className={styles.main}>
      <Input
        type="text"
        onChange={setEmail}
        value={email}
        placeholder="Email..."
      />
      <Input
        type="password"
        onChange={setPassword}
        value={password}
        placeholder="Password..."
      />
      <Button text="Login" onClick={() => handleLogin()} />
      <h5>
        Don't have an account?
        <a href="/register">Sign up</a>
      </h5>
    </div>
  );
};

export default LoginForm;
