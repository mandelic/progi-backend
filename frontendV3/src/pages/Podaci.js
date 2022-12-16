import React from 'react'
import './Podaci.css'
import NavBar from '../components/NavBar';
import Profil_NavBar from '../components/Profil_NavBar'
import { useLocation, useNavigate } from "react-router";

function Podaci() {

  const navigate = useNavigate();

function logout(){

    window.localStorage.clear();
    navigate("/");

}

  return (
    <> <NavBar></NavBar >
    <div className='podaciContainer' id='color-bg-primary'>
    <Profil_NavBar></Profil_NavBar>
    </div>
    

    </>
  )
}

export default Podaci