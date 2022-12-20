import React from 'react'
import './Podaci.css'
import NavBar from '../components/NavBar';
import Profil_NavBar from '../components/Profil_NavBar'
import { useLocation, useNavigate } from "react-router";

import {AiOutlineSmile} from 'react-icons/ai'

function Podaci() {

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
    <div>
    hej!
    <AiOutlineSmile size={'100px'}></AiOutlineSmile>
    <div className='t'>

            <table className='t-table'>
              <caption>Osobni podaci</caption>
              <tr>
                <td>emai:</td>
                <td>{korisnik.email}</td>
              </tr>
              <tr>
                <td>ime:</td>
                <td>{korisnik.ime}</td>
              </tr>
              <tr>
                <td>prezime</td>
                <td>{korisnik.prezime}</td>
              </tr>
              <tr>
                <td>mob:</td>
                <td>{korisnik.mob}</td>
              </tr>
              <tr>
                <td>uloga:</td>
                <td>{korisnik.uloga}</td>
              </tr>

            </table>
          </div>
    </div>
    </div>
    

    </>
  )
}

export default Podaci