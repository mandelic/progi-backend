import React from 'react'
import Profil_NavBar from '../components/Profil_NavBar'
import NavBar from '../components/NavBar';


function Placanje() {
  return (
    <div>
        <NavBar></NavBar>
        <div className='podaciContainer' id='color-bg-primary'>
            <Profil_NavBar></Profil_NavBar>
        </div>
    </div>

  )
}

export default Placanje