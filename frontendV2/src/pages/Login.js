import React, { useState }  from 'react'
import './Login.css'
import '../App.css'
import { useLocation, useNavigate } from "react-router";


export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  let  [email, setMail] = useState("");
  let [password, setPassword] = useState("");
  let [firsName, setIme] = useState("");
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
    setIme(firsName = p)
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
    fetch("http://localhost:8080/api/v1/login", {
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
      window.location.reload();

      navigate("/");

    } else{
      alert(data.message)
      console.log(data.message)
      navigate("/login")
    }
  });
  navigate("/");
  }

  async function predajSignUp(e){
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          email: email,
          firsName: firsName,
          lastName: lastName,
          password: password,
          phoneNumber: phoneNumber,
          cardNumber: cardNumber
      }),   
  })
  .then((res) => res.json())
  .then(data => {
    if(data.message === 'User authenticated.'){
      localStorage.setItem("profil", data.token);
      window.location.reload();

      navigate("/");

    } else{
      alert(data.message)
      console.log(data.message)
      navigate("/login")
    }
  });
  navigate("/");
  }

  if (authMode === "signin") {
    return (
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
            <p className="text-center mt-2">
              Zaboravio si <a className='link' id='color-text-highlight' href="#">lozinku?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
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
  )
}