
import NavBar from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Kontakt from './pages/Kontakt';
import DnevnaTaktika from './pages/DnevnaTaktika';
import Profil from './pages/Profil';
import User from './pages/User';




function App() {
  return (
    <>
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/kontakt' element={<Kontakt/>} />
        <Route path='/dnevna-taktika' element={<DnevnaTaktika/>} />
        <Route path='/profil' element={<Profil/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
