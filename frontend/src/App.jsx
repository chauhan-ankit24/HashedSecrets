import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from "./components/Login.jsx";
import { Main } from "./components/Main.jsx";
import { Register } from './components/Register';
import { Landing } from './components/Landing';
import "./App.css";

function App() {
  const [user, SetUser] = useState('');
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="register" element={<Register SetUser={SetUser} />} />
          <Route path="login" element={<Login SetUser={SetUser} />} />
          <Route path="main" element={<Main user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
