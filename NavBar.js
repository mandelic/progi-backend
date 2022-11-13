import React, { useState, useEffect }  from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css';



export default function NavBar() {
    let userILIlogin = "user"
    if(localStorage.length != 1){userILIlogin = "login"}


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
        <li className={userILIlogin}>
        <Link to={`/${userILIlogin}`}>
            {userILIlogin}
        </Link>
        </li>
        
    </ul>    
    </div>
  </>
  )
}



