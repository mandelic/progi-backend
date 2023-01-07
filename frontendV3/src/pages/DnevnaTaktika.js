import React from 'react'
import './DnevnaTaktika.css'
import NavBar from '../components/NavBar';
import { useLocation, useNavigate } from "react-router";
import { useState }  from 'react'
import Popup from '../components/Popup'
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function DnevnaTaktika() {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  
  let [board, setBoard] = useState(["........", "........", "........", "........", "........", "........", "........", "........"])

  today = dd + '.' + mm + '.' + yyyy + '.';



  useEffect(() =>{
    fetch("http://localhost:8080/api/v1/daily-challenge", {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    .then((res) => res.json())
    .then((data) => {
      setBoard(board = data.board)
      console.log(board)
    
    console.log("board")
    console.log(board)
    for(let i=0; i<board.length; i++) {
      for(let j=0; j<board[i].length; j++){
        let id = 'b' + String(i) + String(j)
        if((i + j) % 2 == 0){
          document.getElementById(id).style.backgroundColor = "white";
          
        }
        
        console.log(id)
        console.log(board[i][j])
        switch(board[i][j]){
          case "Q":
            document.getElementById(id).innerHTML = "&#9819";
            break;
          case "q":
            document.getElementById(id).innerHTML = "&#9813";
            break
          case "K":
            document.getElementById(id).innerHTML = "&#9818";
            break
          case "k":
            document.getElementById(id).innerHTML = "&#9812";
            break
          case "R":
            document.getElementById(id).innerHTML = "&#9820";
            break
          case "r":
            document.getElementById(id).innerHTML = "&#9814";
            break
          case "B":
            document.getElementById(id).innerHTML = "&#9821";
            break
          case "b":
            document.getElementById(id).innerHTML = "&#9815";
            break
          case "N":
            document.getElementById(id).innerHTML = "&#9822";
            break
          case "n":
            document.getElementById(id).innerHTML = "&#9816";
            break
          case "P":
            document.getElementById(id).innerHTML = "&#9823";
            break
          case "p":
            document.getElementById(id).innerHTML = "&#9817";
            break
          default:
            console.log("tu")
            document.getElementById(id).innerHTML = ".";
            if((i + j) % 2 == 0){
              document.getElementById(id).style.color= "white";
            }
            else{
              document.getElementById(id).style.color= "#c1b098";
            }
        }
      }
    }
  })
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
    <div>  <ToastContainer    toastStyle={{ backgroundColor: '#634133'}}/>
         <NavBar></NavBar>

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
              <tr className='boardTD' id='slova'>
              <td className='boardTD'>  </td>
              <td className='boardTD'> a </td>
              <td className='boardTD'> b </td>
              <td className='boardTD'> c </td>
              <td className='boardTD'> d </td>
              <td className='boardTD'> e </td>
              <td className='boardTD'> f </td>
              <td className='boardTD'> g </td>
              <td className='boardTD'> h </td>
              
              </tr>
            {board.map((val,key) =>{
                return(
                  <>
                  <tr className='boardTR'>
                  <td id = 'brojevi'>{key + 1}</td>
                  <td className='boardTD'id={'b'+key+'0'}> </td>
                  <td className='boardTD' id={'b'+key+'1'}></td>
                  <td className='boardTD' id={'b'+key+'2'}></td>
                  <td className='boardTD' id={'b'+key+'3'}></td>
                  <td className='boardTD' id={'b'+key+'4'}></td>
                  <td className='boardTD' id={'b'+key+'5'}></td>
                  <td className='boardTD' id={'b'+key+'6'}></td>
                  <td  className='boardTD'id={'b'+key+'7'}></td>
                  </tr>
                  </>
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