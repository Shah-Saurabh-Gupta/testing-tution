import React, { useContext } from "react";
import "../components/Navbar.css";
import { useHistory } from "react-router-dom";
import UserContext from "../context/userContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);
  
  const history = useHistory();

  const admin = () => history.push("/admin");
  const student = () => history.push("/student");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      role: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    localStorage.setItem("role","");
    history.push("/");
  };

  return (
    <div className="nav">
      {userData.user ? (
        <>
          {(userData.role === 'admin') ?
            (<>
              <div className="link" onClick={admin}><p className="authLink">ADMIN</p></div>
              <div className="link" onClick={logout}><p className="authLink">LOG OUT</p></div>
            </>) :
            (<>
              <div className="link" onClick={student}><p className="authLink">STUDENT</p></div>
              <div className="link" onClick={logout}><p className="authLink">LOG OUT</p></div>
            </>)}
        </>
      ) : (
          <>
            <div className="link" onClick={login}><p className="authLink">LOG IN</p></div>
          </>
        )}
    </div>
  );
}
