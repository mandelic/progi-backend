import React from 'react'

import NavBar from '../components/NavBar';
import Profil_NavBar from '../components/Profil_NavBar'
function Turnir() {
  return (
    <div>      <NavBar></NavBar>
            <div className='profilContainer' id='color-bg-primary'>
    <Profil_NavBar></Profil_NavBar>
    </div>
    </div>
  )
}

export default Turnir
