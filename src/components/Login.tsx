import React, { useState } from "react";
import Input from "./Input";
import { useHistory } from "react-router-dom";

function Login(props: any) {
  const [User, setUser] = useState("");
  const [Pass, setPass] = useState("");

  const history = useHistory();

  async function handleClick(event: any) {
    event.preventDefault();
    if (!User) {
      alert("please enter your user name!");
    } else {
      fetch("‘testurl.com/login", {
        method: "post",
        body: JSON.stringify({
          username: User,
          password: Pass,
        }),
      }).then(function (res) {
        console.log(res.text);
      });

      try {
        history.push("/home");
      } catch (e) {
        alert(e.message);
      }
    }
  }

  function updateUser(e: any) {
    const UserName = e.target.value;
    setUser(UserName);
  }
  function updatePass(e: any) {
    const password = e.target.value;
    setPass(password);
  }
  return (
    <form className="form" id="loginForm">
      <h1>Hello, {User}</h1>
      <Input
        id="user"
        name="user"
        type="text"
        placeholder="Username"
        value={User}
        onChange={updateUser}
      />
      <Input
        type="password"
        placeholder="Password"
        id="pass"
        value={Pass}
        onChange={updatePass}
      />
      <button type="submit" onClick={handleClick}>
        Login
      </button>
    </form>
  );
}

export default Login;
