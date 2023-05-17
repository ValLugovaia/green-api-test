import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Main from './Main.js';
import Login from './Login.js';

function App() {
  const history = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  function onLogin(id, token) {
    localStorage.setItem('idInstance', id);
    localStorage.setItem('apiTokenInstance', token);
    setLoggedIn(true);
    history("/chat");
  }

  return (
    <CurrentUserContext.Provider>
      <div className="root">
        <Routes>
          <Route exact path="/" element={<Login onLogin={onLogin} />} />
          <Route path="/chat" element={<Main loggedIn={loggedIn} />} />
          <Route path ="/" element={loggedIn ? <Navigate to="/chat" /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
