import React, { useState, useEffect } from 'react'
import Profil_NavBar from '../components/Profil_NavBar'
import NavBar from '../components/NavBar';
import './Placanje.css';
import { ToastContainer, toast } from 'react-toastify';
import { resolvePath } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router";


function Placanje() {

  const navigate = useNavigate();

  let [firstName, setFirstName ] = useState("")
  let [lastName, setLasttName ] = useState("")
  let [phoneNumber, setphoneNumber ] = useState("")
  let [cardNumber, setcardNumber ] = useState("")
  let [email, setEmail ] = useState("")
  let [cvv, setCvv ] = useState("")
  let [year, setYear ] = useState("")
  let [month, setMonth ] = useState("")


  function predajUplatu(e){
    console.log(firstName)
    console.log(lastName)
    console.log(phoneNumber)
    console.log(cardNumber)
    console.log(year)
    console.log(month)
    e.preventDefault();
    let f = "https://sahisti-lii1.onrender.com/api/v1/transaction/member/" + localStorage.getItem("userId")
    fetch(f, {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("profil")
      },
      body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          cardNumber: cardNumber,
          email: email,
          cvv: cvv,
          year: year,
          month: month
    }),
  })
  .then((res) => 
  res.json()
  )
  .then(data => {
    console.log(data)
    if(!data.errors && !data.message){
      if(localStorage.getItem("role") == "ROLE_UNPAID"){
      
        navigate("/login");
        localStorage.clear()
        localStorage.setItem("obnovljen","da")
      }

      toast.success( "Uspješno si platio članarinu", {
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
    else if(data.errors){
      console.log("HEJ")
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
    else{
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

    }
  })
}

let [sveTransakcije, setSveTransakcije] = useState([])

useEffect(() => {

  fetch("https://sahisti-lii1.onrender.com/api/v1/transaction", {
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
    setSveTransakcije(sveTransakcije = data)
  })
  .catch((err) => {
    console.log(err.message)
  })
}, [])

if(localStorage.getItem("role") == "ROLE_ADMIN"){
  return(
    <>
    <NavBar></NavBar>
        <div className='podaciContainer2' id='color-bg-primary'>
            <Profil_NavBar></Profil_NavBar>
          <div className='t'>

            <table className='t-table'>
              <caption>TRANSAKCIJE</caption>
              <tr>
                <th>Mjesec</th>
                <th>Godina</th>
                <th>Član</th>
              </tr>
              {sveTransakcije.map((val,key) =>{
                return(
                  <tr key={key}>
                    <td>{val.month}</td>
                    <td>{val.year}</td>
                    <td>{val.member}</td>
                  </tr>
                )
              })}
            </table>
          </div>
          </div>
    </>
  )
}

else if(localStorage.getItem("role") == "ROLE_MEMBER" || localStorage.getItem("role") == "ROLE_UNPAID")
{  return (
    <div>
      <ToastContainer    toastStyle={{ backgroundColor: '#634133'}}/>
        <NavBar></NavBar>
        <div className='podaciContainer2' id='color-bg-primary'>
            <Profil_NavBar></Profil_NavBar>
            <div className='Placanje-form-container' id='color-bg-primary'>
                <form className="Placanje-form" id='color-bg-secundary'>
                  <p className='placanjeTekst'>Plaćanje članarine</p>
                  <p className='placanjeTekst'>50 eura</p>
                  <div className="Placanje-form-content">
                    <div className="form-group mt-3">
                      <label>Ime</label>
                      <input
                        type="ime"
                        className="form-control mt-1 sign-up" 
                        id='color-bg-primary'
                        placeholder="npr. Fran"
                        onChange={(e) => setFirstName(firstName = e.target.value)}
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
                        onChange={(e) => setLasttName(lastName = e.target.value)}
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
                        onChange={(e) => setEmail(email = e.target.value)}
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
                        onChange={(e) => setphoneNumber(phoneNumber= e.target.value)}
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
                        onChange={(e) => setcardNumber(cardNumber = e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Kontrolni broj kartice</label>
                      <input
                        type="kontrolniBroj"
                        className="form-control mt-1 sign-up"
                        id='color-bg-primary'
                        placeholder="kontrolni broj kartice"
                        onChange={(e) => setCvv(cvv = e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Datum isteka</label>
                      <div className='datumIsteka-container'>
                        <select className='datumIsteka-container2'>
                        <option value="" disabled selected hidden>odaberi ...</option>
                          <option>Siječanj</option>
                          <option>Veljača</option>
                          <option>Ožujak</option>
                          <option>Travanj</option>
                          <option>Svibanj</option>
                          <option>Lipanj</option>
                          <option>Srpanj</option>
                          <option>Kolovoz</option>
                          <option>Rujan</option>
                          <option>Listopad</option>
                          <option>Studeni</option>
                          <option>Prosinac</option>
                        </select>
                        <select className='datumIsteka-container2'>
                        <option value="" disabled selected hidden>odaberi ...</option>
                          <option>2023</option>
                          <option>2024</option>
                          <option>2025</option>
                          <option>2026</option>
                          <option>2027</option>
                          <option>2028</option>
                          <option>2029</option>
                          <option>2030</option>
                          <option>2031</option>
                          <option>2032</option>
                          <option>2033</option>
                          <option>2034</option>
                          <option>2035</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <label>Datum placanja:</label>
                      <div className='datumIsteka-container'>
                        <select className='datumIsteka-container2'
                        onChange={(e) => setMonth(month = e.target.value)}
                        >
                          <option value="" disabled selected hidden>odaberi ...</option>
                          <option>Siječanj</option>
                          <option>Veljača</option>
                          <option>Ožujak</option>
                          <option>Travanj</option>
                          <option>Svibanj</option>
                          <option>Lipanj</option>
                          <option>Srpanj</option>
                          <option>Kolovoz</option>
                          <option>Rujan</option>
                          <option>Listopad</option>
                          <option>Studeni</option>
                          <option>Prosinac</option>
                        </select>
                        <select className='datumIsteka-container2'
                        onChange={(e) => setYear(year = e.target.value)}>
                          <option value="" disabled selected hidden>odaberi ...</option>
                          <option>2022</option>
                          <option>2023</option>
                          <option>2024</option>
                          <option>2025</option>
                          <option>2026</option>
                          <option>2027</option>
                          <option>2028</option>
                          <option>2029</option>
                          <option>2030</option>
                          <option>2031</option>
                          <option>2032</option>
                          <option>2033</option>
                          <option>2034</option>
                          <option>2035</option>
                        </select>
                      </div>
                    </div>
                  </div>
                    <div className="d-grid gap-2 mt-3">
                      <button type="submit" className="btn btn-danger" onClick={predajUplatu}>
                        Plati
                      </button>
                     
                    </div>
                    
                </form>
                
                
            </div>
            
            
        </div>
    </div>

  )
}
else {
  return(    <div>
    <ToastContainer    toastStyle={{ backgroundColor: '#634133'}}/>
      <NavBar></NavBar>
      <div className='podaciContainer2' id='color-bg-primary'>
          <Profil_NavBar></Profil_NavBar>        </div>
    </div>)
}

}

export default Placanje