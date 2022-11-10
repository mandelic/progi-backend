import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <>
    <div className='NavBar'>
    <Link className='Home' to='/'>
        Home
    </Link>
    <ul className='container'>
        <li className='dnevnaTaktika'>
        <Link to='/dnevna-taktika'>
            Dnevna Taktika
        </Link>
        </li>
        <li className='kontakt'>
        <Link to='/kontakt'>
            Kontakt
        </Link>
        </li>
        <li className='login'>
        <Link to='/login'>
            login
        </Link>
        </li>
    </ul>    
    </div>
  </>
  )
}

export default NavBar