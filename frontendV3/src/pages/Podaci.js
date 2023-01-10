import React, { useState, useEffect} from 'react'
import './Podaci.css'
import NavBar from '../components/NavBar';
import Profil_NavBar from '../components/Profil_NavBar'
import { useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {FaChessBishop} from 'react-icons/fa'
import {FaChessKing} from 'react-icons/fa'
import {FaChessKnight} from 'react-icons/fa'
import {FaChessPawn} from 'react-icons/fa'
import {FaChessQueen} from 'react-icons/fa'
import {FaChessRook} from 'react-icons/fa'

import Popup from '../components/Popup'



function Podaci() {
  
let [podaci, setPodaci] = useState([])
let [rang, setRang] = useState("-")
let [profili, setProfili] =useState([])

let [idZaZamijenu, setIdZZ] = useState("")
let [roleZaZamijenu, setRoleZZ] = useState("")

let  [email, setMail] = useState("");
let [password, setPassword] = useState("");
let [firstName, setIme] = useState("");
let [lastName, setPrezime] = useState("");
let [phoneNumber, setMobitel] = useState("");
let [cardNumber, setKartica] = useState("");

const [isOpen, setIsOpen] = useState(false);
const togglePopup = () => {
  setIsOpen(!isOpen);
}

const [isOpen2, setIsOpen2] = useState(false);
const togglePopup2 = () => {
  setIsOpen2(!isOpen2);
}

useEffect(() => {
  fetch("http://localhost:8080/api/v1/users", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("profil")
    }
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setProfili(data)
  })
  .catch((err) => {
    console.log(err.message)
  })
}, [])

useEffect(() => {
  let f = "http://localhost:8080/api/v1/users/" + localStorage.getItem("userId")
  fetch(f, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("profil")
    }
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setPodaci(data)
  })
  .catch((err) => {
    console.log(err.message)
  })
}, [])

useEffect(() => {
  let f = "http://localhost:8080/api/v1/ranked-list/" + localStorage.getItem("userId")
  fetch(f, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  })
  .then((res) => {
    console.log(res)
    if(res.status == '404'){
      console.log("jos nije na rang listi")
    }
    else{
      res.json().then((data) => {
        console.log(data)
        setRang(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
    }
  })

}, [])


async function obrisi(id){
  let f = "http://localhost:8080/api/v1/users/" + id 
  fetch(f, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("profil")
    },
  })
  .then((res) => {
    if(res.status != '200'){
      toast.error( "došlo je do greške", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        backgroundColor: '#634133',
        theme: "dark"
        });
    }
    else{
      toast.success( "uspješno izbrisan korisnik", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        backgroundColor: '#634133',
        theme: "dark"
        });
    }

})

}

function ZamijeniUlogu(){
  let f = "http://localhost:8080/api/v1/users/" + idZaZamijenu + "/change-role"
  fetch(f, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("profil")
    },
    body: JSON.stringify({
      role: roleZaZamijenu
    }),  
  })
  .then((res) => {
    if(res.status != '200'){
      toast.error( "došlo je do greške", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        backgroundColor: '#634133',
        theme: "dark"
        });
    }
    else{
      toast.success( "uspješno promjenjena uloga", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        backgroundColor: '#634133',
        theme: "dark"
        });
    }

})
 setIsOpen(false)
 setIdZZ(idZaZamijenu = "")
 setRoleZZ(roleZaZamijenu = "")
}

async function zabraniPristup(id){
  setIsOpen(true)
  console.log(id)
  setIdZZ(idZaZamijenu = id)
  }


  function StvoriKorisnika(){
    fetch("http://localhost:8080/api/v1/users", {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
          phoneNumber: phoneNumber,
          cardNumber: cardNumber
      }),   
  })
  .then((res) => res.json())
  .then(data => {
    console.log(data.errors)
    if(!data.errors){
      toast.success( "Uspješno si dodao korisnika", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        backgroundColor: '#634133',
        theme: "dark"
        });

        setIsOpen2(false)
        setIme(firstName = "")
        setPrezime(lastName = "")
        setMail(email = "")
        setMobitel(phoneNumber = "")
        setKartica(cardNumber = "")
        setPassword(password = "")

    } else{
      for(let i in data.errors){
        toast.error( data.errors[i], {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          backgroundColor: '#634133',
          theme: "dark"
          });
      }
    }
  });

  }



  const navigate = useNavigate();

if(localStorage.getItem("role") == "ROLE_ADMIN"){
  return (
    <div>
      <ToastContainer    toastStyle={{ backgroundColor: '#634133'}}/>
     <NavBar></NavBar >

     {
        isOpen && <Popup content = {
      
      <> <div className="form-group mt-3">
        <label>Nova uloga</label>
        <select name="list"
                className="form-control mt-1"
                id='color-bg-primary' 
                onChange={(e) => {setRoleZZ(roleZaZamijenu = e.target.value ); console.log(e.target.value)}}
                required>
          <option value="" disabled selected hidden>odaberi ulogu...</option>
          <option>ROLE_MEMBER</option>
          <option>ROLE_ADMIN</option>
          <option>ROLE_SENSEI</option>
          <option>ROLE_UNPAID</option>
        </select>
      </div><div>
          <button type="submit" className="btn" onClick={() => {ZamijeniUlogu()}}>
            Predaj ocjenu
          </button>

        </div>

          </>}
          handleClose = {togglePopup}
          />}

{
        isOpen2 && <Popup content = {
      
      <>
<div className="form-group mt-3">
          <label>email:</label>
          <input
            type="text"
            className="form-control mt-1"
            id='color-bg-primary'
            onChange={(e) => {setMail(email = e.target.value)}}
            required />
          <label>ime: </label>
          <input
            type="text"
            className="form-control mt-1"
            id='color-bg-primary'
            onChange={(e) => {setIme(firstName= e.target.value)}}
            required />
          <label>prezime: </label>
          <input
            type="text"
            className="form-control mt-1"
            id='color-bg-primary'
            onChange={(e) => {setPrezime(lastName= e.target.value)}}
            required />

          <label>lozinka: </label>
          <input
            type="text"
            className="form-control mt-1"
            id='color-bg-primary'
            onChange={(e) => {setPassword(password= e.target.value)}}
            required />
                      <label>broj mobitela: </label>
          <input
            type="text"
            className="form-control mt-1"
            id='color-bg-primary'
            onChange={(e) => {setMobitel(phoneNumber= e.target.value)}}
            required />
                      <label>broj kartice: </label>
          <input
            type="text"
            className="form-control mt-1"
            id='color-bg-primary'
            onChange={(e) => {setKartica(cardNumber= e.target.value)}}
            required />
          <button className='btn' onClick={() => {StvoriKorisnika()}}> Predaj </button>
        </div>
          </>}
          handleClose = {togglePopup2}
          />}


    <div className='podaciContainer' id='color-bg-primary'>
      <Profil_NavBar></Profil_NavBar>
        <div className='pozadina'>
        <div className="tablicaAdmin">
                <table className='tableAdmin'>
                    <tr>
                        <th className='thAdmin'>ID</th>
                        <th className='thAdmin'>email</th>
                        <th className='thAdmin'>Ime</th>
                        <th className='thAdmin'>Prezime</th>
                        <th className='thAdmin'>Broj mobitela</th>
                        <th className='thAdmin'>Role</th>
                        <th className='thAdmin'></th>
                    </tr>
                    {profili.map((val, key)=>{
                        return(
                            <tr key={key}>
                                <td className='tdAdmin'>{val.id}</td>
                                <td className='tdAdmin'>{val.email}</td>
                                <td className='tdAdmin'>{val.firstName}</td>
                                <td className='tdAdmin'>{val.lastName}</td>
                                <td className='tdAdmin'>{val.phoneNumber}</td>
                                <td className='tdAdmin'>{val.role}</td>
                                <td className='gumbi-container'>
                                    <div className='gumbi-container2'>
                                        <button type="submit" className="buttonsAdmin" onClick={() => obrisi(val.id)}>
                                            Obriši
                                        </button>
                                    </div>
                                    <div className='gumbi-container2'>
                                        <button type="submit" className="buttonsAdmin" onClick={() => zabraniPristup(val.id)}>
                                            Zabrani Pristup/Promijeni ulogu
                                        </button>
                                    </div>
                                    
                                </td>
                            </tr>
                        )
                    })}      
                </table>

            </div>
            <div className='tablicaAdmin'>
                <button className='btn'
                onClick={() => {setIsOpen2(true)}}> DODAJ NOVOG KORISNIKA</button>
                </div>
        </div>

    </div>

    </div>
    
)
}
else{

  return (
    <> <NavBar></NavBar >
    <div className='podaciContainer' id='color-bg-primary'>
      <Profil_NavBar></Profil_NavBar>
      <div className='t'>
        <div className="Podaci-form-container" id='color-bg-primary'>
          <div className="Podaci-form" id='color-bg-secundary'>
            <div className="Podaci-form-content">
              <div>
                <p className='textPodaci'>Ime: {podaci.firstName}</p>
                <p className='textPodaci'>Prezime: {podaci.lastName}</p>
                <p className='textPodaci'>E-mail: {podaci.email}</p>
                <p className='textPodaci'>Mobitel: {podaci.phoneNumber}</p>
                <p className='textPodaci'>Uloga: {podaci.role}</p>
              </div>
            </div>
            <div className="Podaci-form-content">
              <p className='textPodaci'>Pozicija na rang listi: {rang}</p>
              <p className='textPodaci'>Bodovi: to-do</p> 
              <p className='textPodaci'>Broj odigranih turnira: to-do</p>
              <p className='textPodaci'>Broj odrađenih treninga: to-do</p>
            </div>
            <div className='chess-icons-container'>
              <FaChessBishop className='chess-icons-container' size={"4vh"}></FaChessBishop>
              <FaChessKing className='chess-icons-container' size={"4vh"}></FaChessKing>
              <FaChessKnight className='chess-icons-container' size={"4vh"}></FaChessKnight>
            </div>
            <div className='chess-icons-container'>
              <FaChessPawn className='chess-icons-container' size={"4vh"}></FaChessPawn>
              <FaChessQueen className='chess-icons-container' size={"4vh"}></FaChessQueen>
              <FaChessRook className='chess-icons-container' size={"4vh"}></FaChessRook>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
}

export default Podaci