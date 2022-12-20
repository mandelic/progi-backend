import React from 'react'
import './DnevnaTaktika.css'
import NavBar from '../components/NavBar';
import { useLocation, useNavigate } from "react-router";
import { useState }  from 'react'



function DnevnaTaktika() {


  let  [rjesenje, setRjesenje] = useState("");
  let  [ocjena, setOcjena] = useState("");
  let  [greska, setGreska] = useState("");

  const navigate = useNavigate();

  const userrjesenje = (p) => {
    setRjesenje(rjesenje = p)
  }
  const userocjena = (p) => {
    setOcjena(ocjena = p)
  }
  const usergreska = (p) => {
    setGreska(greska = p)
  }

  async function predajOcjenu(e){
    console.log("predajemo ocijenu")

      alert("Ocjena uspješno podnesena")
      navigate('/')

  }

  async function predajGresku(e){
    console.log("predajemo grešku")
      alert("Prijava greške uspješno podnesena")
      navigate('/')

  }


  async function predajRjesenje(e){
    console.log("predajem!")

    document.getElementById('proba').innerHTML += '<div>hej!!</div>'
  return(
      <><><div className="form-group mt-3">
        <label>Ocjena</label>
        <select name="list"
                className="form-control mt-1"
                id='color-bg-primary' 
                onChange={(e) => userocjena(e.target.value)}
                required>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div><div>
          <button type="submit" className="btn" onClick={predajOcjenu}>
            Predaj ocjenu
          </button>

        </div></><><div className="form-group mt-3">
          <label>Prijava greške</label>
          <input
            type="text"
            className="form-control mt-1"
            id='color-bg-primary'
            onChange={(e) => usergreska(e.target.value)}
            required />
        </div><div>
            <button type="submit" className="btn" onClick={predajGresku}>
              Predaj grešku
            </button>
          </div></></>
)
    
  }


    
  return (
    <div>      <NavBar></NavBar>
      <div id='proba'>
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