import React, { useState }  from 'react'
import './Login.css'
import '../App.css'
import { useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../components/NavBar';
import { buildQueries } from '@testing-library/react';

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  let  [email, setMail] = useState("");
  let [password, setPassword] = useState("");
  let [firstName, setIme] = useState("");
  let [lastName, setPrezime] = useState("");
  let [phoneNumber, setMobitel] = useState("");
  let [cardNumber, setKartica] = useState("");

  const navigate = useNavigate();


  const usermail = (mail) => {
    setMail(email = mail)
  }

  const userpassword = (pass) => {
    setPassword(password = pass)
  }

  const username = (p) => {
    setIme(firstName = p)
  }

  const userprezime = (p) => {
    setPrezime(lastName = p)
  }

  const usernumber = (p) => {
    setMobitel(phoneNumber = p)
  }

  const userkartica = (p) => {
    setKartica(cardNumber = p)
  }

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  async function predajSignIn(e){
    e.preventDefault();
    fetch("http://sahistiprogi-env.eba-qihmse7y.eu-central-1.elasticbeanstalk.com/api/v1/login", {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          email: email,
          password: password,
      }),   
  })
  .then((res) => res.json())
  .then(data => {
    if(data.message === 'User authenticated.'){
      localStorage.setItem("profil", data.token);
      navigate("/");

    } else{
      toast.error( data.message, {
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
      navigate("/login")
    }
  });

  }

  async function predajSignUp(e){
    e.preventDefault();
    fetch("https://sahistiprogi-env.eba-qihmse7y.eu-central-1.elasticbeanstalk.com/api/v1/users", {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
      referrerPolicy: "unsafe_url",
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
      localStorage.setItem("profil", data.token);
      navigate("/");

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

  if (authMode === "signin") {
    return (
      <>
        <ToastContainer    toastStyle={{ backgroundColor: '#634133'}}/>
      <NavBar></NavBar>
      <div className="Auth-form-container" id='color-bg-primary'>
        <form className="Auth-form" id='color-bg-secundary'>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title" id='color-text'>Prijavi se</h3>
            <div className="text-center">
              Još nemaš korisnički račun? {" "}
              <span className="link" id='color-text-highlight' onClick={changeAuthMode}>
                Napravi ga! ;)
              </span>
            </div>
            <div className="form-group mt-3">
              <label>E-pošta</label>
              <input
                type="email"
                className="form-control mt-1"
                id='color-bg-primary'
                placeholder="npr. fran.hunski@gmail.com"
                onChange={(e) => usermail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Lozinka</label>
              <input
                type="password"
                className="form-control mt-1"
                id='color-bg-primary'
                placeholder="lozinka"
                onChange={(e) => userpassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn" onClick={predajSignIn}>
                Predaj
              </button>
            </div>
            <p className="text-center">
              Zaboravio si <a className='link' id='color-text-highlight' href="#">lozinku?</a>
            </p>
          </div>
        </form>
      </div>
      </>
    )
  }

  return (
    <>
    <ToastContainer toastStyle={{ backgroundColor: '#634133'}}/>
    <NavBar></NavBar>
    <div className="Auth-form-container" id='color-bg-primary'>
    <form className="Auth-form-sign-up" id='color-bg-secundary'>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title" id='color-text'>Napravi korisnički račun</h3>
        <div className="text-center">
          Već imaš korisnički račun? {" "}
          <span className="link" id='color-text-highlight' onClick={changeAuthMode}>
            Prijavi se!
          </span>
          </div>
          <div className='sign-up-form'>
          <div className="form-group mt-3">
              <label>Ime</label>
              <input
                type="ime"
                className="form-control mt-1 sign-up" 
                id='color-bg-primary'
                placeholder="npr. Fran"
                onChange={(e) => username(e.target.value)}
                required
              />
          </div>
          <div className="form-group mt-3">
              <label>Prezime</label>
              <input
                type="prezime"
                className="form-control mt-1 sign-up" 
                id='color-bg-primary'
                placeholder="npr. Hunski"
                onChange={(e) => userprezime(e.target.value)}
                required
              />
          </div>
          <div className="form-group mt-3">
              <label>E-pošta</label>
              <input
                type="name"
                className="form-control mt-1 sign-up"
                id='color-bg-primary'
                placeholder="npr. fran.hunski@gmail.com"
                onChange={(e) => usermail(e.target.value)}
                required
              />
          </div>
          <div className="form-group mt-3">
              <label>Lozinka</label>
              <input
                type="password"
                className="form-control mt-1 sign-up"
                id='color-bg-primary'
                placeholder="lozinka"
                onChange={(e) => userpassword(e.target.value)}
                required
              />
          </div>
          <div className="form-group mt-3">
              <label>Broj Mobitela</label>
              <input
                type="broj"
                className="form-control mt-1 sign-up"
                id='color-bg-primary'
                placeholder="npr. 0992332294"
                onChange={(e) => usernumber(e.target.value)}
                required
              />
          </div>
          <div className="form-group mt-3">
              <label>Broj Kartice</label>
              <input
                type="kartica"
                className="form-control mt-1 sign-up"
                id='color-bg-primary'
                placeholder="broj kartice"
                onChange={(e) => userkartica(e.target.value)}
                required
              />
          </div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-danger" onClick={predajSignUp}>
              Predaj
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}