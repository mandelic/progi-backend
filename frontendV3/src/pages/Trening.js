import React, { useState, useEffect} from 'react'
import './Podaci.css'
import NavBar from '../components/NavBar';
import Profil_NavBar from '../components/Profil_NavBar'
import Popup from '../components/Popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Trening() {
  let  [trajanje, setTrajanje] = useState("");
  let [datum, setDatum] = useState("");
  let [lokacija, setLokacija] = useState("");
  let [nepr, setNePr] = useState([])
  let [pr, setPr] = useState([])
  let [sviTreninzi, setT] = useState([])

  

  const trenertrajanje = (t) => {
    setTrajanje(trajanje = t)
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

//trener = true
admin = true

  

  async function predajTrening(e){
    e.preventDefault();
    let f = "http://localhost:8080/api/v1/coach/" + id + "/training"
    fetch(f, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: datum,
        location: lokacija,
        duration: trajanje
      }),  
    })
    .then((res) => {
      console.log(res.status)
      if(res.status == '400'){
        console.log("da")
        toast.error( "pogrešan format", {
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
        toast.success( "uspješno dodan trening", {
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
  setTrajanje("")
  document.getElementById("datum").value = ""
  document.getElementById("lokacija").value = ""
  document.getElementById("trajanje").value = ""
  }


  
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }



  function prijavaNaTrenig(idTreninga) {
    let f = "http://localhost:8080/api/v1/training/" + idTreninga + "/member"
    console.log(f)
    fetch(f, {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
      body: id  
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
      toast.success( "uspješno si prijavljen na trening", {
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
    let f = "http://localhost:8080/api/v1/training/" + id + "/not-applied"
    fetch(f, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
    let f = "http://localhost:8080/api/v1/training/" + id + "/applied"
    fetch(f, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
    fetch("http://localhost:8080/api/v1/training", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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


  function obrisiTrening(id){
    let f = "http://localhost:8080/api/v1/training/" + id
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
      toast.success( "uspješno obrisan trening", {
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
              <caption>NADOLAZECI TRENINZI NA KOJE SI PRIJAVLJEN</caption>
              <tr>
                <th>datum</th>
                <th>lokacija</th>
                <th>trajanje</th>
                <th>organizator</th>
              </tr>
              {pr.map((val,key) =>{
                return(
                  <tr key={key}>
                    <td>{val.date}</td>
                    <td>{val.location}</td>
                    <td>{val.duration}</td>
                    <td>{val.coachName}</td>
                  </tr>
                )
              })}
            </table>
          </div>
          <div className='t'>
          <table className='t-table'>
              <caption>NADOLAZECI TRENINZI NA KOJE SE MOŽEŠ PRIJAVITI</caption>
              <tr>
                <th>datum</th>
                <th>lokacija</th>
                <th>trajanje</th>
                <th>organizator</th>
                <th>prijavi se</th>
              </tr>
              {nepr.map((val,key) =>{
                return(
                  <tr key={key}>
                    <td>{val.date}</td>
                    <td>{val.location}</td>
                    <td>{val.duration}</td>
                    <td>{val.coachName}</td>
                    <td><button className='btn'  onClick={() => prijavaNaTrenig(val.id)} >želim se prijaviti!</button></td>
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
              <caption>NADOLAZECI TRENINZI</caption>
              <tr>
                <th>datum</th>
                <th>lokacija</th>
                <th>trajanje</th>
                <th>organizator</th>
                <th>uredi</th>
              </tr>
              {sviTreninzi.map((val,key) =>{
                return(
                  <tr key={key}>
                    <td>{val.date}</td>
                    <td>{val.location}</td>
                    <td>{val.duration}</td>
                    <td>{val.coachName}</td>
                    <td><button className='btn' onClick={() => obrisiTrening(val.id)}>obrisi</button></td>
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
      <p>Kreiraj Trening</p>
      <div className="form-group mt-3">
              <label>Datum</label>
              <input
                id='datum'
                type="datum"
                className="form-control mt-1"
                placeholder='2022-05-10T22:03:46'
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
              <label>Trajanje</label>
              <input
                id='trajanje'
                type="trajanje"
                className="form-control mt-1"
                onChange={(e) => trenertrajanje(e.target.value)}
                required
              />
        </div>
        <button type="submit" className="btn" onClick={predajTrening} >
                Predaj
        </button>
      </>}
      handleClose={togglePopup}
    />}

        <div>
          <div className='t'>
          <table className='t-table'>
              <caption>NADOLAZECI TVOJI TRENINZI</caption>
              <tr>
                <th>datum</th>
                <th>lokacija</th>
                <th>trajanje</th>
                <th>organizator</th>
              </tr>
              {sviTreninzi.map((val,key) =>{
                return(
                  <tr key={key}>
                    <td>{val.date}</td>
                    <td>{val.location}</td>
                    <td>{val.duration}</td>
                    <td>{val.coachName}</td>
                  </tr>
                )
              })}
              </table>
          </div>
          <div className='trener-da'>
          Pozdrav, trenere! Spreman za kreirati novi trening?
          <hr />
          <button className='btn' id='trener-gumb' onClick={togglePopup}> KREIRAJ NOVI TRENING</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
}


export default Trening
