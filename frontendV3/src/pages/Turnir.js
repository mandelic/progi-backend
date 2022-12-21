import React, { useState } from 'react'
import './Podaci.css'
import NavBar from '../components/NavBar';
import Profil_NavBar from '../components/Profil_NavBar'
import Popup from '../components/Popup';
import { useLocation, useNavigate } from "react-router";

function Turnir() {
  let  [naslov, setNaslov] = useState("");
  let [datum, setDatum] = useState("");
  let [lokacija, setLokacija] = useState("");

  const navigate = useNavigate();

  const trenernaslov = (n) => {
    setNaslov(naslov = n)
  }

  const trenerdatum = (d) => {
    setDatum(datum = d)
  }

  const trenerlokacija = (l) => {
    setLokacija(lokacija = l)
  }

  async function predajTurnir(e){
        /*
    e.preventDefault();
    fetch(".....", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: datum,
        title: naslov,
        location: lokacija
      }),  
    })
    .then((res) => res.json())
    .then(data => {
      if(data.message == "ok"){
      toast.succes(data.message)
    }else{
      toast.error(data.message)
    }
  })
    */
    alert("to-do......")
    setIsOpen(!isOpen);
  }

  let trener = true

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  // to-do dohvat trninga
  let prT= [{
    naslov: 'dobrotvorni turnir',
    datum: '23.4.2011',
    opis: 'jdsdjis',
    organizator: 'marko'
  }]

  let slT =[
    {
    naslov: 'dobrotvorni turnir',
    datum: '23.4.2011',
    opis: 'jdsdjis',
    organizator: 'marko'
    },
    {
      naslov: 'dobrotvorni turnir',
      datum: '23.4.2011',
      opis: 'jdsdjis',
      organizator: 'pero'
    }

]

  return (
    <div>      
      <NavBar></NavBar>
      <div className='podaciContainer' id='color-bg-primary'>
        <Profil_NavBar></Profil_NavBar>

       

    {isOpen && <Popup
      content={<>
      <p>Kreiraj Turnir</p>
      <div className="form-group mt-3">
              <label>Naslov</label>
              <input
                type="naslov"
                className="form-control mt-1"
                onChange={(e) => trenernaslov(e.target.value)}
                required
              />
        </div>
        <div className="form-group mt-3">
              <label>Datum</label>
              <input
                type="datum"
                className="form-control mt-1"
                onChange={(e) => trenerdatum(e.target.value)}
                required
              />
        </div>
        <div className="form-group mt-3">
              <label>Lokacija</label>
              <input
                type="lokacija"
                className="form-control mt-1"
                onChange={(e) => trenerlokacija(e.target.value)}
                required
              />
        </div>
        <button type="submit" className="btn" onClick={predajTurnir} >
                Predaj
        </button>
      </>}
      handleClose={togglePopup}
    />}



        <div className='t-container'>
          <div className='t'>

            <table className='t-table'>
              <caption>NADOLAZECI TURNINI NA KOJE SI PRIJAVLJEN</caption>
              <tr>
                <th>naslov turnira</th>
                <th>datum</th>
                <th>opis</th>
                <th>organizator</th>
              </tr>
              {prT.map((val,key) =>{
                return(
                  <tr key={key}>
                    <td>{val.naslov}</td>
                    <td>{val.datum}</td>
                    <td>{val.opis}</td>
                    <td>{val.organizator}</td>
                  </tr>
                )
              })}
            </table>
          </div>
          <div className='t'>
          <table className='t-table'>
              <caption>NADOLAZECI TURNINI NA KOJE SE MOŽEŠ PRIJAVITI</caption>
              <tr>
                <th>naslov turnira</th>
                <th>datum</th>
                <th>opis</th>
                <th>organizator</th>
                <th>prijavi se</th>
              </tr>
              {slT.map((val,key) =>{
                return(
                  <tr key={key}>
                    <td>{val.naslov}</td>
                    <td>{val.datum}</td>
                    <td>{val.opis}</td>
                    <td>{val.organizator}</td>
                    <td><button className='btn'>želim se prijaviti!</button></td>
                  </tr>
                )
              })}
              </table>
          </div>
          <div className={trener ? 'trener-da' : 'trener-ne'}>
          Pozdrav, trenere! Spreman za kreirati novi turnir?
          <hr />
          <button className='btn' id='trener-gumb' onClick={togglePopup}> KREIRAJ NOVI TURNIR</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Turnir
