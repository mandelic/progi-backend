import React from 'react'
import {Link} from 'react-router-dom';


function Profil_nb() {
    let trenutno = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  return (
    
    <>
            <ul className='nav-menu-profil' id='color-bg-secundary'>
            <li className='nav-item'>
            <Link to = '/podaci' className='nav-links' id={trenutno == 'podaci' ? 'color-text-highlight' : 'color-text'}>
                PODACI
            </Link>
        </li>
        <li className='nav-item'>
            <Link to = '/turnir' className='nav-links' id={trenutno == 'turnir' ? 'color-text-highlight' : 'color-text'}>
               TURNIR
            </Link>
        </li>
        <li className='nav-item'>
            <Link to = '/trening' className='nav-links' id={trenutno == 'trening' ? 'color-text-highlight' : 'color-text'}>
                TRENING
            </Link>
        </li>
        <li className='nav-item'>
            <Link to = '/placanje' className='nav-links' id={trenutno == 'placanje' ? 'color-text-highlight' : 'color-text'}>
                PLAĆANJE
            </Link>
        </li>
        
    </ul>    
    </>
  )
}

export default Profil_nb