import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/userContext";
import Axios from "axios";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "https://testing-tution.herokuapp.com/user/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        role:loginRes.data.role,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      localStorage.setItem("role",loginRes.data.user.role);
      const role = localStorage.getItem("role");
      if(role === 'admin'){
      history.push("/admin");}
      else{
      history.push("/student");}
    } catch (err) {
      
    }
  };

  //console.log(userData);
  return (
    <div className="page">
      <h2>Log in</h2>
      <form className="form" onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}
