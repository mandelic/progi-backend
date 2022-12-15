import React from 'react'
import './Pozdrav.css';

function Pozdrav() {
  return (
    <div className='pozdrav-container'>  
        <div className='slika-container'> <img className='slika' src={require('./welcomePhoto.jpg')}  alt="welcomePicture"/>
        </div>
        <div className='text-container'> 
            <p> Šahovski klub FER  </p > <hr className='linesize'></hr>
            <p>Dobrodošli, </p>
            <div className='text2'> na web stranice Šahovskog kluba FER u Zagrebu, kluba s tradicijom preko 50 godina. Mjesto za igrati i trenirati šah. Započni svoje šahovsko putovanje.</div>
        </div>        
  </div>
  )
}

export default Pozdrav