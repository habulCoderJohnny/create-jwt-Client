import './App.css';
import Header from './Pages/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import About from './Pages/About';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="orders" element={<Orders/>} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
