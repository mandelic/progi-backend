
import NavBar from './components/NavBar';
import './App.css';
import Centar from './components/Centar';
import Novosti from './components/Novosti';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <NavBar />
    </Router>
    <Centar></Centar>
    <Novosti />
    

    </>
  );
}

export default App;
