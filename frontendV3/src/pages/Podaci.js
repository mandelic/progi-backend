import React, { useState, useEffect} from 'react'
import './Podaci.css'
import NavBar from '../components/NavBar';
import Profil_NavBar from '../components/Profil_NavBar'
import { useLocation, useNavigate } from "react-router";

import {FaChessBishop} from 'react-icons/fa'
import {FaChessKing} from 'react-icons/fa'
import {FaChessKnight} from 'react-icons/fa'
import {FaChessPawn} from 'react-icons/fa'
import {FaChessQueen} from 'react-icons/fa'
import {FaChessRook} from 'react-icons/fa'



function Podaci() {
  
let [podaci, setPodaci] = useState([])

useEffect(() => {
  let f = "http://localhost:8080/api/v1/users/" + localStorage.getItem("userId")
  fetch(f, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setPodaci(data)
  })
  .catch((err) => {
    console.log(err.message)
  })
}, [])

  let korisnik = {
    email: 'fran.hunski@gmail.com',
    ime: 'fran',
    prezime: 'hunski',
    mob: '0992332295',
    uloga: 'trener'
  }

  const navigate = useNavigate();

function logout(){

    window.localStorage.clear();
    navigate("/");

}

  return (
    <> <NavBar></NavBar >
    <div className='podaciContainer' id='color-bg-primary'>
      <Profil_NavBar></Profil_NavBar>
      <div className='t'>
        <div className="Podaci-form-container" id='color-bg-primary'>
          <div className="Podaci-form" id='color-bg-secundary'>
            <div className="Podaci-form-content">
              <div>
                <p className='textPodaci'>Ime: Fran</p>
                <p className='textPodaci'>Prezime: Hunski</p>
                <p className='textPodaci'>E-mail: fran.hunski@gmail.com</p>
                <p className='textPodaci'>Mobitel: 0992332294</p>
                <p className='textPodaci'>Uloga: član</p>
              </div>
            </div>
            <div className="Podaci-form-content">
              <p className='textPodaci'>Pozicija na rang listi: 1.</p>
              <p className='textPodaci'>Bodovi: 100</p>
              <p className='textPodaci'>Broj odigranih turnira: 3</p>
              <p className='textPodaci'>Broj odrađenih treninga: 10</p>
            </div>
            <div className='chess-icons-container'>
              <FaChessBishop className='chess-icons-container' size={"4vh"}></FaChessBishop>
              <FaChessKing className='chess-icons-container' size={"4vh"}></FaChessKing>
              <FaChessKnight className='chess-icons-container' size={"4vh"}></FaChessKnight>
            </div>
            <div className='chess-icons-container'>
              <FaChessPawn className='chess-icons-container' size={"4vh"}></FaChessPawn>
              <FaChessQueen className='chess-icons-container' size={"4vh"}></FaChessQueen>
              <FaChessRook className='chess-icons-container' size={"4vh"}></FaChessRook>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Podaci