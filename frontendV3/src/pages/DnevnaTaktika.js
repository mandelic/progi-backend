import React from 'react'
import './DnevnaTaktika.css'
import NavBar from '../components/NavBar';
import { useLocation, useNavigate } from "react-router";
import { useState }  from 'react'
import Popup from '../components/Popup'
import { useEffect } from 'react';




function DnevnaTaktika() {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  var board = ["...K....", "k.......", "........", "........", "........", "........", "........", "........"]
  
  today = dd + '.' + mm + '.' + yyyy + '.';


  useEffect(() =>{
    let K = "king"
    for(let i=0; i<board.length; i++) {
      for(let j=0; j<board[i].length; j++){
        let id = 'b' + String(i) + String(j)
        console.log(id)
        switch(board[i][j]){
          case "K":
            document.getElementById(id).innerHTML = "&#9819";
            break;
          case "k":
            document.getElementById(id).innerHTML = "&#9813";
            break
          default:
            document.getElementById(id).innerHTML = ".";
        }
      }
    }
  }, [])


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

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  function ppredajOcjenu(e){
    alert("Ocjena uspješno podnesena")
  }
  function ppredajGresku(e){
    alert("Prijava greške uspješno podnesena")
  }
  function ppredajRjesenje(e){
    alert("Vaše rješenje je predano");
    setIsOpen(!isOpen)
  }

  return (
    <div>      <NavBar></NavBar>

{
        isOpen && <Popup content = {<>
      
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
          <button type="submit" className="btn" onClick={ppredajOcjenu}>
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
            <button type="submit" className="btn" onClick={ppredajGresku}>
              Predaj grešku
            </button>
          </div></></>

          </>}
          handleClose = {togglePopup}
          />}



      <div class='container'>


          <div className='chess'>
            <table className='chessboard'>

            {board.map((val,key) =>{
                return(
                  <tr className='boardTR'>
                  <td className='boardTD'id={'b'+key+'0'}> </td>
                  <td className='boardTD' id={'b'+key+'1'}></td>
                  <td className='boardTD' id={'b'+key+'2'}></td>
                  <td className='boardTD' id={'b'+key+'3'}></td>
                  <td className='boardTD' id={'b'+key+'4'}></td>
                  <td className='boardTD' id={'b'+key+'5'}></td>
                  <td className='boardTD' id={'b'+key+'6'}></td>
                  <td  className='boardTD'id={'b'+key+'7'}></td>
                  </tr>
                )
              })}
            </table>
          </div>
 




      <div>
        <p> Taktika dana {today}</p>
      <textarea
            type="text"
            id='color-bg-primary'
            rows="32"
            cols="50"
            required
          ></textarea>
      </div></div>

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
        <button type="submit" className="btn" onClick={ppredajRjesenje}>
            Predaj rješenje
        </button>
      </div>

    </div>
  )

  
}

export default DnevnaTaktika