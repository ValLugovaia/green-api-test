import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import GreenApi from '../api/GreenApi.js';
import Login from './Login.js';
import Phone from './Phone.js';
import Chat from './Chat.js';

function App() {
  const history = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [messages, setMessages] = useState([]);

  function onLogin(id, token) {
    localStorage.setItem('idInstance', id);
    localStorage.setItem('apiTokenInstance', token);
    setLoggedIn(true);
    history("/phone");
  }

  function onPhone(phone) {
    localStorage.setItem('phone', phone);
    history("/chat");
  }

  function handleSendMessage(data) {
    GreenApi.sendMessage(data).then((data) => {
        setMessages([data, ...messages]);
      })
      .catch(err => {
        console.log(err)
      });
  }


  return (
    <CurrentUserContext.Provider>
      <div className="root">
        <Routes>
          <Route exact path="/" element={<Login onLogin={onLogin} />} />
          <Route path="/phone" element={<Phone loggedIn={loggedIn} onPhone={onPhone} />} />
          <Route path="/chat" element={<Chat loggedIn={loggedIn} handleSendMessage={handleSendMessage} messages={messages} />} />
          <Route path ="/" element={loggedIn ? <Navigate to="/chat" /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
