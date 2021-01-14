import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import UserContext from "./context/userContext";
import Navbar from './components/Navbar';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Notice from './pages/Notice';
import Login from './auth/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Error from './pages/Error';
import Adminpanel from './pages/Adminpanel';
import Studentpanel from './pages/Studentpanel';
import ViewStudent from './components/admin/ViewStudent';
import EditStudent from './components/admin/EditStudent';
import AddStudent from './components/admin/AddStudent';
import AddNotice from './components/admin/AddNotice';
import StudentRoute from './components/StudentRoute';
import AdminRoute from './components/AdminRoute';
import Notes from './components/Notes';

function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      let role = localStorage.getItem("role");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      if (role === null) {
        localStorage.setItem("role", "");
        role = "";
      }
      const tokenRes = await axios.post(
        "https://testing-tution.herokuapp.com/user/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );


      if (tokenRes.data) {
        const userRes = await axios.get("https://testing-tution.herokuapp.com/user/", {
          headers: { "x-auth-token": token },
        });
        //console.log(userRes.data.user.role);
        setUserData({
          token,
          role: userRes.data.user.role,
          user: userRes.data,
        });

      }
    };

    checkLoggedIn();
  }, []);


  return (
    <div className="App">
      {/* BEM Naming Convention */}
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          {/* Navbar Section */}
          <div className="navbar">
            <Navbar />
          </div>
          {/* Main Section */}
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/courses" component={Courses} />
              <Route path="/notice/:noticeId" component={Notice} />
              <Route path="/notes" component={Notes} />
              <Route exact path="/login" component={Login} />
              <AdminRoute exact path="/admin" component={Adminpanel} JWTAuthenticated={userData.token} isAuthenticated={userData.role} />
              <AdminRoute exact path="/admin/viewStudent/:id" component={ViewStudent} JWTAuthenticated={userData.token} isAuthenticated={userData.role} />
              <AdminRoute exact path="/admin/editStudent/:id" component={EditStudent} JWTAuthenticated={userData.token} isAuthenticated={userData.role} />
              <AdminRoute exact path="/admin/addStudent" component={AddStudent} JWTAuthenticated={userData.token} isAuthenticated={userData.role} />
              <AdminRoute exact path="/admin/addNotice" component={AddNotice} JWTAuthenticated={userData.token} isAuthenticated={userData.role} />
              <StudentRoute exact path="/student" component={Studentpanel} JWTAuthenticated={userData.token} isAuthenticated={userData.role} />
              <Route path="/error" component={Error} />
              <Redirect to="/error" component={Error}/>
            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
