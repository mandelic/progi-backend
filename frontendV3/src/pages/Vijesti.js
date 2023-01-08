import React, { useEffect, useState } from 'react'
import './Vijesti.css';
import NavBar from '../components/NavBar';
import Popup from '../components/Popup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Vijesti() {

  let [rubrike, setRubrike] = useState([])
  let [trenutnaRubrika, setTrRu] = useState("0")
  let [novost, setNovosti] = useState([])

  let [dodajRubrika, setDodajRubrika] = useState("")
  let [dodajNaslov, setDodajNaslov] =useState("")
  let [dodajTekst, setDodajTekst] = useState("")


  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  function obrisiNovost(id){
    let f = "http://localhost:8080/api/v1/news/" + id
    console.log(f)
    fetch(f, {
      method: "DELETE",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
  })
  .then((res) => {
    console.log(res)
    if(res.status == '400'){
      console.log("ups")
      toast.error( "došlo je do pogreške", {
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
      toast.success( "uspješno obrisana novost", {
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
    res.json()
  })
  .then(data => {
    console.log(data)
  })
  }

  useEffect(() =>{
    let f = "http://localhost:8080/api/v1/column/" + trenutnaRubrika +"/news"
    fetch(f, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    .then((res) => res.json())
    .then((data) => {console.log(data); setNovosti(novost = data);})

  }, [trenutnaRubrika])

useEffect(() =>{
  fetch("http://localhost:8080/api/v1/news",{
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  })
  .then((res) => res.json())
.then((data) => {console.log(data)})
}, [])

useEffect(() =>{
  fetch("http://localhost:8080/api/v1/column",{
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  })
  .then((res) => res.json())
.then((data) => {setRubrike(rubrike = data)})
}, [])

function predajNovost(){
  let i = parseInt(dodajRubrika) + 1
  let f = "http://localhost:8080/api/v1/column/" + i + "/author/" + localStorage.getItem("userId")+"/news"
  fetch(f, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("profil")
    },
    body: JSON.stringify({
      date: new Date().toJSON(),
      title: dodajNaslov,
      content: dodajTekst
    }),
  })
  .then((res) => {
    if(res.status != '201'){
      console.log(res)
      toast.error( "došlo je do pogreške pri predaji novosti", {
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
      setIsOpen(!isOpen)
      toast.success( "uspješno predana novost", {
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
    setDodajNaslov(dodajNaslov = "")
    setDodajRubrika(dodajRubrika = "")
    setDodajTekst(dodajTekst = "")
    
}

if(localStorage.getItem("role") != "ROLE_SENSEI" && localStorage.getItem("role") != "ROLE_ADMIN" ){
  return (
    <><NavBar></NavBar>
    <div className = 'vijesti' id='color-bg-primary'>
    <div className='rubrike' id='color-bg-primary'>
    {rubrike.map((val,key) => {
      return(
          <button className='btn' onClick = {() => {setTrRu(trenutnaRubrika = key + 1);}}>{val.title}</button>
      )
    })}
    </div>
      {novost.map((val, key) => {
            return (
              <div className='novost'>
                <div className='naslov'><text>{val.title}</text></div>
                <div className='textNovosti'><text>{val.content}</text></div>
              </div>
            )
          })}
      </div>
    </>
  )
}
else if(localStorage.getItem("role") == "ROLE_SENSEI"){
  return (
    <><NavBar></NavBar>
<ToastContainer    toastStyle={{ backgroundColor: '#634133'}}/>
{
        isOpen && <Popup content = {
          <>
          <div className='form-group mt-3'>
            <label>Kategorija</label>
            <select name="list" 
                    id="kategorija"
                    className='form-control mt-1'
                    onChange={(e) => setDodajRubrika(dodajRubrika = e.target.value)}
                    required>
                    {rubrike.map((val,key) => {
                      return(
                          <option value={key}>{val.title}</option>  
                      )
                    })}
            </select>
          </div>
          <div className='form-group mt-3'>
            <label>Naslov</label>
            <input             
            type="text"
            className="form-control mt-1"
            id='naslov'
            onChange={(e) => setDodajNaslov(dodajNaslov = e.target.value)}
            required />
          </div>
          <div className='form-group mt-3'>
            <label>Tekst</label>
            <textarea rows={6}
            className="form-control mt-1"
            id='tekst'
            onChange={(e) => setDodajTekst(dodajTekst = e.target.value)}
            required />
          </div>
          <button type="submit" className="btn" onClick={predajNovost}>
              Predaj!
            </button>
          </>}
          handleClose = {togglePopup}
          />}


    <div className = 'vijesti' id='color-bg-primary'>
    <div className='rubrike' id='color-bg-primary'>
    {rubrike.map((val,key) => {
      return(
          <button className='btn' onClick = {() => {setTrRu(trenutnaRubrika = key + 1);}}>{val.title}</button>
      )
    })}
    </div>
    <div className='novost'>
    <button className='btn' onClick={() => {setIsOpen(!isOpen)}}>Dodaj Novost!</button>
    </div>
      {novost.map((val, key) => {
            return (
              <div className='novost'>
                <div className='naslov'><text>{val.title}</text></div>
                <div className='textNovosti'><text>{val.content}</text></div>
              </div>
            )
          })}
      </div>
    </>
  )
}
else{
  return(
    <>
    <NavBar></NavBar>
    
    <div className = 'vijesti' id='color-bg-primary'>
    <div className='rubrike' id='color-bg-primary'>
    {rubrike.map((val,key) => {
      return(
          <button className='btn' onClick = {() => {setTrRu(trenutnaRubrika = key + 1);}}>{val.title}</button>
      )
    })}
    </div>
    <div className='novost'>
    <button className='btn' onClick={() => {setIsOpen(!isOpen)}}>Dodaj Novost!</button>
    </div>
      {novost.map((val, key) => {
            return (
              <div className='novost'>
                <div className='naslov'><text>{val.title}</text> <button className='btn' onClick={() => {obrisiNovost(val.id)}}>obrisi</button></div>
                <div className='textNovosti'><text>{val.content}</text></div>
              </div>
            )
          })}
      </div>
    </>

  )
        }
}

export default Vijesti
