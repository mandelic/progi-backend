import React from 'react'
import './Centar.css';
import RangLista from './RangLista';
import {Link} from 'react-router-dom';

function Centar() {
  return (
    <div className='centar'>
        <div className='centar' id='color-bg-primary'>
          <img className='slika' src={require('./welcomePhoto.jpg')}  alt="welcomePicture"/>

          <div className='text'>
            Šahovski klub FER<hr className='linesize'></hr>
            <p>Dobrodošli, </p>
            <div className='text2'> na web stranice Šahovskog kluba FER u Zagrebu, kluba s tradicijom preko 50 godina. Mjesto za igrati i trenirati šah. Započni svoje šahovsko putovanje.</div>
          </div>
        </div>
        <div className='rangListaOkvir'> 
          <h2 className='naslovRangLista'>RANG LISTA</h2>
          <>
            <RangLista />
          </>
          <h4 className='pogledajOstatak' >
            <Link className='pogledaj' to='/rang'>
                Pogledaj ostatak rang liste
            </Link></h4>
        </div>

    </div>
  )
}

export default Centar