import React, { useContext } from "react";
import UserContext from "../context/userContext";
import Adminpanel from "./Adminpanel";
import Studentpanel from "./Studentpanel";

export default function Panel() {
  const { userData } = useContext(UserContext);

  //console.log(userData.user.role);
  return (
    <div className="dashboard">
      {(userData.user.role === "admin") ? (
        <div className="admin"><Adminpanel /></div>
      ) : (
          <div className="student"><Studentpanel /></div>
        )}
    </div>
  );
}
