import { Route, Routes } from 'react-router-dom';
import './App.css';
import DHero from './pages/DHero';
import DHeroSearch from './pages/DHeroSearch';
import Home from './pages/Home';
import Login from './pages/Login';
import Services from './pages/Services';
import Signup from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/services/dhero' element={<DHero />} />
      <Route path='/services/dhero/:vehicle' element={<DHeroSearch />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
}

export default App;
