import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


import { FaChessKnight } from 'react-icons/fa';

import {BiMenu} from 'react-icons/bi'

import {MdClose} from 'react-icons/md'



function NavBar() {

  let userILIlogin = "PROFIL"
  let lin = "profil"
  if(localStorage.length != 3){userILIlogin = "PRIJAVA";lin="login"}

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else{
      setButton(true);
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'id='color-bg-secundary'>
        <div className="navbar-container">
        <Link to="/" className="navbar-logo" id='color-text'>
                HOME  <FaChessKnight />
        </Link>
            <div className="menu-icon" onClick={handleClick}>
            {click ? <MdClose />: <BiMenu />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} id='color-bg-secundary'>
            <li className='nav-item'>
            <Link to = '/dnevna-taktika' className='nav-links' id='color-text'>
                DNEVNA TAKTIKA
            </Link>
        </li>
        <li className='nav-item'>
            <Link to = '/kontakt' className='nav-links' id='color-text'>
               KONTAKT
            </Link>
        </li>
        <li className='nav-item'>
            <Link to = {`/${lin}`} className='nav-links' id='color-text-highlight'>
            {userILIlogin}
            </Link>
        </li>
        
    </ul>    
    </div>
    </nav>
  </>
  )
}

export default NavBar


