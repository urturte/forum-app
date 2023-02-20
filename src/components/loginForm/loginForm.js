import React, { useState, useEffect } from "react";
import styles from "./loginForm.module.css";
import Input from "../input/input";
import Button from "../button/button";
import { Routes, Route, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onClickHandler = async () => {
    const userInfo = {
      email: email,
      password: password,
    };

    await fetch("http://localhost:8000/login", {
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
      });
  };
  useEffect(() => {
    onClickHandler();
  }, []);
  return (
    <div className={styles.main}>
      <Input
        type="text"
        onChange={setEmail}
        value={email}
        placeholder="Email..."
      />
      <Input
        type="text"
        onChange={setPassword}
        value={password}
        placeholder="Password..."
      />
      <Button text="Login" onClick={() => onClickHandler()} />
      <h5>
        Don't have an account?
        <a href="/register">Sign up</a>
      </h5>
    </div>
  );
};

export default LoginForm;
