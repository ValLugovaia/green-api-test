import '../App.css';
import { useState } from 'react';
import { Navigate , Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import mainApi from '../api/MainApi.js';
import Main from './Main.js';
import Login from './Login.js';
import ProtectedRoute from './ProtectedRoute.js';

function App() {
  const history = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

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
          <ProtectedRoute path="/" loggedIn={loggedIn} component={Main} />
          <Route path="/signin">
            <Login onLogin={onLogin} />
          </Route>
          <Route>{loggedIn ? <Navigate to="/" /> : <Navigate to="/signin" />}</Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
