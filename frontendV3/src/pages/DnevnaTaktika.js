import React from 'react'
import './DnevnaTaktika.css'
import NavBar from '../components/NavBar';
import { useLocation, useNavigate } from "react-router";
import { useState }  from 'react'



function DnevnaTaktika() {

  const el = document.getElementById('date');
  const dateString = new Date().toDateString();
  el.textContent = "Taktika dana: " + dateString;

  let  [rjesenje, setRjesenje] = useState("");
  const navigate = useNavigate();

  const userrjesenje = (p) => {
    setRjesenje(rjesenje = p)
  }

  async function predajRjesenje(e){
    e.preventDefault();
      fetch({
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            rjesenje: rjesenje
        }),   
    })
    .then((res) => res.json())
    .then(data => {
      if(data.message === 'Solution correct'){
        alert("Rješenje je ispravno")
        navigate("/");
      } else{
        alert("Rješenje neispravno")
        navigate("/");
      }
    });
  }
  
  return (
    <div>      <NavBar></NavBar>
      <div>
        <img className='slika' src={require('../images/chess.jpg')}  alt="chessboard"/>
      </div>

      <div>
      <div>
        <p id = "date"></p>
      </div>
      <textarea
            type="text"
            id='color-bg-primary'
            rows="50"
            cols="200"
            required
          ></textarea>
      </div>

      <div className="form-group mt-3">
          <label>Sljedeći potez</label>
          <input
            type="text"
            className="form-control mt-1"
            id='color-bg-primary'
            onChange={(e) => userrjesenje(e.target.value)}
            required
          />
      </div>
      <div>
        <button type="submit" className="btn" onClick={predajRjesenje}>
            Predaj rješenje
        </button>
      </div>

    </div>
  )

  
}

export default DnevnaTaktika