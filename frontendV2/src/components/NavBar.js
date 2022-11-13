import React, { useState }  from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css';



let userILIlogin = "user"
if(localStorage.length != 1){userILIlogin = "login"}
console.log(userILIlogin)

export default function NavBar() {
    let [authMode, setAuthMode] = useState("notsingin")

    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "notsingin" : "signin")
    }
if(authMode == 'notsingin'){
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

else{
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

        <li className='profil'>
        <Link to='/profil'>
            profil
        </Link>
        </li>
        
    </ul>    
    </div>
  </>
  )
}
}

