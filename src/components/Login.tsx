import React, { useState } from "react";
import Input from "./Input";
import { useHistory } from "react-router-dom";

function Login(props: any) {
  const [User, setUser] = useState("");

  const history = useHistory();

  async function handleClick(event: any) {
    event.preventDefault();
    if (true) {
      const uName = document.getElementById("user")?.innerHTML;
      const pass = document.getElementById("pass")?.innerHTML;

      
      fetch("‘testurl.com/login", {
        method: "post",
        body: JSON.stringify({
          username: uName,
          password: pass,
        }),
      }).then(function (res) {
        console.log(res.text);
      });

      try {
        history.push("/home");
      } catch (e) {
        alert(e.message);
      }
    } else {
      alert("please enter user name");
    }
  }

  function updateUser(e: any) {
    const UserName = e.target.value;
    setUser(UserName);
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
      <Input type="password" placeholder="Password" id="pass" />
      <button type="submit" onClick={handleClick}>
        Login
      </button>
    </form>
  );
}

export default Login;
