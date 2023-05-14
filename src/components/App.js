import '../App.css';
import { useState } from 'react';
import { Navigate , Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import mainApi from '../api/MainApi.js';
import Main from './Main.js';
import Register from './Register.js';
import Login from './Login.js';
import ProtectedRoute from './ProtectedRoute.js';

function App() {
  const history = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  function onRegister(id, token) {
    return mainApi.signup(id, token)
      .then((data) => {
        setIsSignup(true);
        history.push("/signin");
      })
      .catch(err => {
        console.log(err);
        setIsSignup(false);
      });
  }

  function onLogin(id, token) {
    return mainApi.signin(id, token)
    .then((res) => {
      console.log(res);
      if (res) {
        setLoggedIn(true);
        history.replace({ pathname: "/" });
      }
    })
      .catch(err => {
        console.log(err);
      });
  }


  return (
    <CurrentUserContext.Provider>
      <div className="root">
        <Routes>
          <ProtectedRoute exact path="/" loggedIn={loggedIn} component={Main} />
          <Route path="/signup">
            <Register onRegister={onRegister} isSignup={isSignup} />
          </Route>
          <Route path="/signin">
            <Login onLogin={onLogin} isSignup={isSignup} />
          </Route>
          <Route>{loggedIn ? <Navigate to="/" /> : <Navigate to="/signin" />}</Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
