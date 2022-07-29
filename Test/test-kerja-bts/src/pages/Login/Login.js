import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://94.74.86.174:8080/api/login";
  const nav = useNavigate();
  function doLogin() {
    axios
      .post(
        baseURL,
        {
          password: password,
          username: username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        nav(`/checklist/${res.data.token}`);
      })
      .catch((err) => {
        console.log("login");
        console.log(err.message);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    doLogin();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
