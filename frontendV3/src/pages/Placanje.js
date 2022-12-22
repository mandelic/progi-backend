import React from 'react'
import Profil_NavBar from '../components/Profil_NavBar'
import NavBar from '../components/NavBar';
import './Placanje.css';


function Placanje() {
  return (
    <div>
        <NavBar></NavBar>
        <div className='podaciContainer' id='color-bg-primary'>
            <Profil_NavBar></Profil_NavBar>
            <div className='Placanje-form-container' id='color-bg-primary'>
                <form className="Placanje-form" id='color-bg-secundary'>
                  <div className="Placanje-form-content">
                    <p>Dajte nam novce!!!</p>
                  </div>
                </form>
            </div>
        </div>
    </div>

  )
}

export default Placanje