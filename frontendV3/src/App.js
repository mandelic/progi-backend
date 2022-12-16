
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Kontakt from './pages/Kontakt';
import DnevnaTaktika from './pages/DnevnaTaktika';
import Podaci from './pages/Podaci';
import User from './pages/User';
import Trening from './pages/Trening';
import Turnir from './pages/Turnir'
import Profil from './pages/Profil';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/kontakt' element={<Kontakt/>} />
        <Route path='/dnevna-taktika' element={<DnevnaTaktika/>} />
        <Route path='/profil' element={<Profil/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/trening' element={<Trening/>} />
        <Route path='/turnir' element={<Turnir/>} />
        <Route path='/podaci' element={<Podaci/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
