import React, { useState, useEffect} from 'react'
import './Podaci.css'
import NavBar from '../components/NavBar';
import Profil_NavBar from '../components/Profil_NavBar'
import Popup from '../components/Popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Turnir() {
  let  [naslov, setNaslov] = useState("");
  let [datum, setDatum] = useState("");
  let [lokacija, setLokacija] = useState("");
  let [nepr, setNePr] = useState([])
  let [pr, setPr] = useState([])
  let [sviTurniri, setT] = useState([])


  let [treneroviTurniri, setTT] = useState([])
  const trenerNaslov = (t) => {
    setNaslov(naslov= t)
  }

  const trenerdatum = (d) => {
    setDatum(datum = d)
  }

  const trenerlokacija = (l) => {
    setLokacija(lokacija = l)
  }

  let id = localStorage.getItem('userId')

  let uloga = localStorage.getItem("role")

  if(uloga == "ROLE_ADMIN"){
    var admin = true;
  }
if(uloga == "ROLE_SENSEI"){
  var trener = true;
}

useEffect(() => {
  let f = "https://sahisti-lii1.onrender.com/api/v1/coach/" + localStorage.getItem("userId") +"/tournament"
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
    setTT(treneroviTurniri = data)
  })
  .catch((err) => {
    console.log(err.message)
  })
}, [])
  

  async function predajturnir(e){
    e.preventDefault();
    let f = "https://sahisti-lii1.onrender.com/api/v1/coach/" + id + "/tournament"
    fetch(f, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("profil")
      },
      body: JSON.stringify({
        date: datum,
        location: lokacija,
        title: naslov
      }),  
    })
    .then((res) => {
      console.log(res.status)
      if(res.status == '400'){
        console.log("da")
        toast.error( "Pogrešan format", {
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
        toast.success( "Turnir uspješno dodan", {
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
        setIsOpen(!isOpen);
      }

  })
  setDatum("");
  setLokacija("");
  setNaslov("");
  document.getElementById("datum").value = ""
  document.getElementById("lokacija").value = ""
  document.getElementById("naslov").value = ""

  }


  
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }



  function prijavaNaTurnir(idturnira) {
    let f = "https://sahisti-lii1.onrender.com/api/v1/tournament/" + idturnira + "/member"
    console.log(f)
    fetch(f, {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("profil")
      },
      body: id  
  })
  .then((res) => {
    console.log(res)
    if(res.status == '400'){
      console.log("ups")
      toast.error( "Došlo je do pogreške", {
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
      toast.success( "Uspješno si prijavljen na turnir", {
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

  // to do: prT i slT dohvatiti iz backenda i 

  useEffect(() => {
    let f = "https://sahisti-lii1.onrender.com/api/v1/tournament/" + id + "/not-applied"
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
      setNePr(data)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }, [])


  useEffect(() => {
    let f = "https://sahisti-lii1.onrender.com/api/v1/tournament/" + id + "/applied"
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
      console.log("prijavljeni:")
      console.log(data)
      
      setPr(data)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }, [])

  useEffect(() => {
    fetch("https://sahisti-lii1.onrender.com/api/v1/tournament", {
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
      setT(data)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }, [])


   function obrisiTurnir(id){
    let f = "https://sahisti-lii1.onrender.com/api/v1/tournament/" + id
    console.log(f)
    fetch(f, {
      method: "DELETE",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("profil")
      },
  })
  .then((res) => {
    console.log(res)
    if(res.status == '400'){
      console.log("ups")
      toast.error( "Došlo je do pogreške", {
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
      toast.success( "Turnir uspješno obrisan", {
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

if(!admin && !trener){
  return (
    <div>      
      <ToastContainer    toastStyle={{ backgroundColor: '#634133'}}/>
      <NavBar></NavBar>
      <div className='podaciContainer' id='color-bg-primary'>
        <Profil_NavBar></Profil_NavBar>


        <div>
          <div className='t'>

            <table className='t-table'>
              <caption>NADOLAZEĆI TURNIRI NA KOJE SI PRIJAVLJEN</caption>
              <tr>
              <th>Naslov</th>
                <th>Datum i vrijeme</th>
                <th>Lokacija</th>
                <th>Organizator</th>
              </tr>
              {pr.map((val,key) =>{
                return(
                  <tr key={key}>
                    <td>{val.title}</td>
                    <td>{val.date}</td>
                    <td>{val.location}</td>
                    
                    <td>{val.coachName}</td>
                  </tr>
                )
              })}
            </table>
          </div>
          <div className='t'>
          <table className='t-table'>
              <caption>NADOLAZEĆI TURNIRI NA KOJE SE MOŽEŠ PRIJAVITI</caption>
              <tr>
              <th>Naslov</th>
                <th>Datum i vrijeme</th>
                <th>Lokacija</th>
                
                <th>Organizator</th>
                <th>Prijavi se</th>
              </tr>
              {nepr.map((val,key) =>{
                return(
                  <tr key={key}>
                    <td>{val.title}</td>
                    <td>{val.date}</td>
                    <td>{val.location}</td>
                    
                    <td>{val.coachName}</td>
                    <td><button className='btn'  onClick={() => prijavaNaTurnir(val.id)} >želim se prijaviti!</button></td>
                  </tr>
                )
              })}
              </table>
          </div>

        </div>
      </div>
    </div>
  )
}
else if(admin){
  return(
    <>
        <div>      
      <ToastContainer    toastStyle={{ backgroundColor: '#634133'}}/>
      <NavBar></NavBar>
      <div className='podaciContainer' id='color-bg-primary'>
        <Profil_NavBar></Profil_NavBar>
        <div>
          <div className='t'>
          <table className='t-table'>
              <caption>NADOLAZEĆI TURNIRI</caption>
              <tr>
              <th>Naslov</th>
                <th>Datum i vrijeme</th>
                <th>Lokacija</th>
                
                <th>Organizator</th>
                <th>Uredi</th>
              </tr>
              {sviTurniri.map((val,key) =>{
                return(
                  <tr key={key}>
                    <td>{val.title}</td>
                    <td>{val.date}</td>
                    <td>{val.location}</td>
                    
                    <td>{val.coachName}</td>
                    <td><button className='btn' onClick={() => obrisiTurnir(val.id)}>Obriši</button></td>
                  </tr>
                )
              })}
              </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
else if(trener){
  return(
    <>
        <div>      
      <ToastContainer    toastStyle={{ backgroundColor: '#634133'}}/>
      <NavBar></NavBar>
      <div className='podaciContainer' id='color-bg-primary'>
        <Profil_NavBar></Profil_NavBar>

        {isOpen && <Popup
      content={<>
      <p>Kreiraj turnir</p>
      <div className="form-group mt-3">
              <label>Datum i vrijeme</label>
              <input
                id='datum'
                type="datum"
                className="form-control mt-1"
                placeholder='2022-05-25T22:03:46'
                onChange={(e) => trenerdatum(e.target.value)}
                required
              />
        </div>
        <div className="form-group mt-3">
              <label>Lokacija</label>
              <input
              id='lokacija'
                type="lokacija"
                className="form-control mt-1"
                onChange={(e) => trenerlokacija(e.target.value)}
                required
              />
        </div>
        <div className="form-group mt-3">
              <label>Naslov</label>
              <input
              id='naslov'
                type="naslov"
                className="form-control mt-1"
                onChange={(e) => trenerNaslov(e.target.value)}
                required
              />
        </div>
        <button type="submit" className="btn" onClick={predajturnir} >
                Predaj
        </button>
      </>}
      handleClose={togglePopup}
    />}

        <div>
          <div className='t'>
          <table className='t-table'>
              <caption>TVOJI TURNIRI</caption>
              <tr>
              <th>Naslov</th>
                <th>Datum i vrijeme</th>
                <th>Lokacija</th>
                
                <th>Organizator</th>
              </tr>
              {treneroviTurniri.map((val,key) =>{
                return(
                  <tr key={key}>
                    <td>{val.title}</td>
                    <td>{val.date}</td>
                    <td>{val.location}</td>
                    
                    <td>{val.coachName}</td>
                  </tr>
                )
              })}
              </table>
          </div>
          <div className='trener-da'>
          Pozdrav, trenere! Spreman za kreirati novi turnir?
          <hr />
          <button className='btn' id='trener-gumb' onClick={togglePopup}> KREIRAJ NOVI TURNIR</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
}


export default Turnir
