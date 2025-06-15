// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import Home from './pages/Home.js';
import './index.css'
import ProfileInfo from './components/cards/ProfileInfo.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/home" element= {<Home/>}/>
        <Route path="/home/profile" element={<ProfileInfo/>}/>
        <Route path="/home/logout" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
