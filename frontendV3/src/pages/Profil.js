import React, { useEffect } from 'react'
import './Profil.css'
import NavBar from '../components/NavBar';
import Profil_NavBar from '../components/Profil_NavBar'
import { useLocation, useNavigate } from "react-router";

import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';

function Profil() {

  const navigate = useNavigate();

function logout(){

    window.localStorage.clear();
    navigate("/");

}

useEffect(() =>{
  fetch("http://localhost:8080/api/v1/transaction/unpaid",{
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("profil")
    }
  })
  .then((res) => res.json())
  .then((data) => {
    if(localStorage.getItem("userId") in data){
      toast( "Podsjećamo te da platiš članarinu za ovaj mjesec! Hvala", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        backgroundColor: '#634133',
        theme: "dark"
        });
    }
  })
}, [])



  return (
    <> <NavBar></NavBar >
    <div className='profilContainer' id='color-bg-primary'>
    <div className='profil-text' id='color-bg-primary'> DOBRODOŠAO!
    </div>
    <div className='izbornik'>
      <div className='kartica'>
      <div className='slika-container2'> <img className='slika2' src={require('../images/image3.jpg')}  alt="image3"/>
        </div>
        <div>Pregledaj i uredi podatke svog korisničkog računa za šahovksi klub FER
        </div>
        <Link to = '/podaci' className='poveznica' id='color-text-highlight'>
               PODACI
         </Link>
      </div>
      <div className='kartica'>
        <div className='slika-container2'> <img className='slika2' src={require('../images/image1.jpg')}  alt="image1"/>
        </div>
        <div>Pregledaj svoje prijave na turnier ili se prijavi na neki novi napeti turnir
        </div>
        <Link to = '/turnir' className='poveznica' id='color-text-highlight'>
               TURNIR
         </Link>
      </div>
      <div className='kartica'>
      <div className='slika-container2'> <img className='slika2' src={require('../images/image2.jpg')}  alt="image2"/>
        </div>
        <div>Pregledaj svoje prijave na treninge ili dogovori trening s nekim od naših šahovskih majstora
        </div>
        <Link to = '/trening' className='poveznica' id='color-text-highlight'>
               TRENING
         </Link>
      </div>
    </div>
    <button type="submit" className="btn" onClick={logout}>
                Odjavi se!
    </button>
    </div>
    </>
  )
}

export default Profil