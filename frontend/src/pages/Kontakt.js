import React from 'react'
import './Kontakt.css';

import NavBar from '../components/NavBar';
import { Navigate } from 'react-router-dom';
import {FiPhone} from 'react-icons/fi'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'



function Kontakt() {
  return (
    <div>
      <NavBar></NavBar>
      <div className='textKontakt'>
        <p>Kontakt i Informacije</p>
        <hr className='linesizeKontakt'></hr>
      </div>
      <div className='kontakt-container'>
        <div>
          <div className="Kontakt-form-container" id='color-bg-primary'>
            <form className="Kontakt-form" id='color-bg-secundary'>
              <div className="Kontakt-form-content">
                <div className='text-container-kontakt'>
                  <p className="textKontakt2">Adresa:</p>
                  <p className='textKontakt3'>Unska ulica 8</p>
                </div>
                <div className="form-group mt-3">
                  <p className='textKontakt2'>E-pošta:</p>
                  <p className='textKontakt3'>sah.klub@fer.hr</p>
                </div>
                <div className="form-group mt-3">
                  <p className='textKontakt2'>Radno vrijeme:</p>
                  <p className='textKontakt3'> PONEDJELJAK-PETAK: 08:00-21:00<br></br>SUBOTA: 08:00-19:00<br></br>NEDJELJA: NE RADIMO</p>
                </div>
                <div className="form-group mt-3">
                  <p className='textKontakt2'>Broj telefona:</p>
                  <p className='textKontakt3'><FiPhone className='phone-icon'></FiPhone> Mob: +385 (0)91 9957 932<br></br><FiPhone className='phone-icon'></FiPhone> Tel: +385 (0)1 4257 053</p>
                </div>
                <div className='form-group mt-3'>
                  <p className='textKontakt2'>IBAN:</p>
                  <p className='textKontakt3'>HR5835900237020958590</p>
                </div>
                <div className='form-group mt-3'>
                  <p className='textKontakt2'>OIB:</p>
                  <p className='textKontakt3'>45237677893</p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className='textKontakt4'>Gdje se nalazimo</div>
          <div>
          <div className="map-container" id='color-bg-primary'>
            <a href='https://www.google.com/maps/place/Faculty+of+Electrical+Engineering+and+Computing,+10000,+Zagreb/@45.8007017,15.9690278,17z/data=!3m1!4b1!4m5!3m4!1s0x4765d6f1557800c5:0x9b34216e8dcf33c0!8m2!3d45.8007017!4d15.9712165'><img className='slika-map' src={require('../images/sahisti-map.png')}  alt="map-picture"/></a>
          </div>
          </div>
          <div>
            <p className='textKontakt5'>Možete nas kontaktirati i preko društvenih mreža</p>
            <div className='icons-container'>
              <a href='https://www.facebook.com/'><BsFacebook size={"10vh"} color={"#392a16"}></BsFacebook></a>
              <a href='https://www.instagram.com/accounts/login/'><BsInstagram size={"10vh"} color={"#392a16"}></BsInstagram></a>
              <a href='https://www.tiktok.com/login'><FaTiktok size={"10vh"} color={"#392a16"}></FaTiktok></a>
              <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'><BsTwitter size={"10vh"} color={"#392a16"}></BsTwitter></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kontakt