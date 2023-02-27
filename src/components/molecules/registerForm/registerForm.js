import React, { useState } from "react";
import styles from "./registerForm.module.css";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import { Routes, Route, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleRegister = async () => {
    const userInfo = {
      name: name,
      email: email,
      password: password,
    };

    await fetch("http://localhost:8000/register", {
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
      .then((result) => {
        console.log(result);
      });
    navigate("/login");
  };
  return (
    <div className={styles.main}>
      <Input
        type="text"
        onChange={setName}
        value={name}
        placeholder="Name..."
      />
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
      <Button text="Register" onClick={() => handleRegister()} />
      <h5>
        Already have an account?
        <a href="/login">Sign in</a>
      </h5>
    </div>
  );
};

export default RegisterForm;
