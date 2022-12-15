import React from 'react'
import './Profil.css'
import NavBar from '../components/NavBar';
import { useLocation, useNavigate } from "react-router";

function Profil() {

  const navigate = useNavigate();

function logout(){

    window.localStorage.clear();
    navigate("/");

}

  return (
    <> <NavBar></NavBar >
    <div className='profilContainer' id='color-bg-primary'>
    <div className='profil' id='color-bg-primary'> DOBRODOŠAO!
    </div>
    <button type="submit" className="btn" onClick={logout}>
                Odjavi se!
    </button>
    </div>
    </>
  )
}

export default Profil