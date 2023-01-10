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

  var taktike = [
    {name:"Sicilian Defence, Rossolimo Variation (ECO B31)", link:"https://en.wikipedia.org/wiki/World_Chess_Championship_2018#Game_1:_Caruana%E2%80%93Carlsen,_%C2%BD%E2%80%93%C2%BD"},
    {name: "Queen's Gambit Declined, Harrwitz Attack (ECO D37)", link: "https://en.wikipedia.org/wiki/World_Chess_Championship_2018#Game_2:_Carlsen%E2%80%93Caruana,_%C2%BD%E2%80%93%C2%BD"},
    {name:"Sicilian Defence, Rossolimo Variation (ECO B31)", link:"https://en.wikipedia.org/wiki/World_Chess_Championship_2018#Game_3:_Caruana%E2%80%93Carlsen,_%C2%BD%E2%80%93%C2%BD"},
    {name:"English Opening, Four Knights, Kingside Fianchetto (ECO A29)", link:""},
    {name:"", link:""},
    {name:"", link:""},
    {name:"", link:""},
    {name:"", link:""},
    {name:"", link:""},
    {name:"", link:""},
    {name:"", link:""},
    {name:"", link:""},
    {name:"", link:""},
    {name:"", link:""},
    {name:"", link:""},
  ]

  
  let [board, setBoard] = useState(["........", "........", "........", "........", "........", "........", "........", "........"])
  let [igrac, setIgrac] = useState("")

  let [taktikaId, setTaktikaId] = useState("")


  let [taktika, setTaktika] = useState("")


  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);


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
      console.log(data.message)

      setTaktikaId(taktikaId = data.dailyChallengeId)
    

    if(!data.message){
      setBoard(board = data.board)
      console.log(board)
      setIgrac(igrac = data.side)
      
    }
    else{
      document.getElementById("poruka").innerHTML = data.message
    }
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
          case "q":
            document.getElementById(id).innerHTML = "&#9819";
            break;
          case "Q":
            document.getElementById(id).innerHTML = "&#9813";
            break
          case "k":
            document.getElementById(id).innerHTML = "&#9818";
            break
          case "K":
            document.getElementById(id).innerHTML = "&#9812";
            break
          case "r":
            document.getElementById(id).innerHTML = "&#9820";
            break
          case "R":
            document.getElementById(id).innerHTML = "&#9814";
            break
          case "b":
            document.getElementById(id).innerHTML = "&#9821";
            break
          case "B":
            document.getElementById(id).innerHTML = "&#9815";
            break
          case "n":
            document.getElementById(id).innerHTML = "&#9822";
            break
          case "N":
            document.getElementById(id).innerHTML = "&#9816";
            break
          case "p":
            document.getElementById(id).innerHTML = "&#9823";
            break
          case "P":
            document.getElementById(id).innerHTML = "&#9817";
            break
          default:
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

let [neRevidirani, setNeRevidirani] = useState([])

useEffect(() => {
  fetch("http://localhost:8080/api/v1/daily-challenge-error/unchecked", {
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("profil")
    }
  })
  .then((res) => res.json())
  .then((data) => {console.log(data);setNeRevidirani(neRevidirani = data)})
}, [])


function validiraj(v, id){
  let f =" http://localhost:8080/api/v1/daily-challenge-error/" + id + "/validate"
  fetch(f, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("profil")
    },
    body: JSON.stringify({
      validation: v
    }),  
  })
  .then((res) => {
    if(res.status == "200"){
      toast.success("uspješno validirano", {
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
      toast.error( "došlo je do pogreške prilikom validacije", {
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

  let  [rjesenje, setRjesenje] = useState("");
  let  [ocjena, setOcjena] = useState("");
  let  [greska, setGreska] = useState("");
  let [greskaOpis, setGreskaOpis] = useState("")

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

  function kreni(){
    document.getElementById("kreni").remove()
    document.getElementById("chs").style.visibility = "visible"
    setRunning(true)
  }

  function ppredajOcjenu(){
    console.log(ocjena)
    fetch("http://localhost:8080/api/v1/daily-challenge/grade", {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("profil")
      },
      body: JSON.stringify({
        grade: ocjena
      }),
    })
    .then((res) => {
      if(res.status != '200'){
        console.log(ocjena)
        toast.error( "došlo je do pogreške pri predaji ocijen", {
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
        toast.success( "uspješno predana ocijena", {
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
  function ppredajGresku(){
    let f = "http://localhost:8080/api/v1/daily-challenge-error/member/" + localStorage.getItem("userId") + "/dc/" + taktikaId
    fetch(f, {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("profil")
      },
      body: JSON.stringify({
        solution: greska,
        description: greskaOpis
      }),
    })
    .then((res) => {
      if(res.status != '200'){
        console.log(ocjena)
        toast.error( "došlo je do pogreške pri predaji greške", {
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
        toast.success( "uspješno predana greška", {
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
  function ppredajRjesenje(e){
    setRunning(false);
    let bonus = false
    if((time / 60000) <= 5){bonus = true}

    let id = localStorage.getItem("userId")
    if(localStorage.getItem("userId") == null){id = 0}
    let f = "http://localhost:8080/api/v1/daily-challenge/make-a-move/" + id
    fetch(f, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        move: rjesenje, 
        bonus: bonus
      }),  
    })
    .then((res) => res.json()).then(data => {
      console.log(data)
      if(data.errors){
        setRunning(true);
        toast.error( data.errors[0], {
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
      else if(data.message){

        toast.error( data.message, {
          position: "top-right",
          autoClose: false,
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
        console.log(time)
        setIsOpen(!isOpen)
        if(data == false){
          toast.error( "Nažalost nisi ponudio optimalno riješenje za današnju taktiku. Slobosno ostavi ocijenu ili dojavi grešku", {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            backgroundColor: '#634133',
            theme: "dark"
            });
        }
        if(data == true){
          toast.success( "Bravo! Uspješno si riješio danasšnju taktiku. Slobosno ostavi ocijenu ili dojavi grešku", {
            position: "top-right",
            autoClose: false,
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
    })
    
  }
if(localStorage.getItem("role") != 'ROLE_SENSEI' && localStorage.getItem("role") != 'ROLE_ADMIN'){


  return (
    <div>  <ToastContainer    toastStyle={{ backgroundColor: '#634133'}}/>
         <NavBar></NavBar>


{
        isOpen && <Popup content = {<>
      
      <><> <div className="form-group mt-3">
        <label>Ocjena</label>
        <select name="list"
                defaultValue=""
                className="form-control mt-1"
                id='color-bg-primary' 
                onChange={(e) => {userocjena(e.target.value); }}
                required>
          <option value="" disabled selected hidden>odaberi ocijenu...</option>
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
          <label>Prijava greške: </label>
          <label>Prijedlog točnog riješenja:</label>
          <input
            type="text"
            className="form-control mt-1"
            id='color-bg-primary'
            onChange={(e) => usergreska(e.target.value)}
            required />
          <label>Obrazloženje: </label>
          <input
            type="text"
            className="form-control mt-1"
            id='color-bg-primary'
            onChange={(e) => setGreskaOpis(greskaOpis = e.target.value)}
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


          <div>
          
            <div id='kreni'> <p id='poruka' className='poruka'></p> <p> Stisni kad si spreman za rješavanje danasnjeg zadatka i krenuti će odbrojavanje!</p>
            <button className='btn' onClick={kreni}>KRENI!</button>
            </div>
            <div id='chs' style={{visibility: "hidden"}}>
            <div className="stopwatch">
            <p>vrijeme: {("0" + Math.floor((time / 60000) % 60)).slice(-2)}: {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:{("0" + ((time / 10) % 100)).slice(-2)}</p>
        </div>
            <table className='chessboard' >
              
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
          </div>
 




          <div>
            <p> Taktika dana {today}</p>
            <p className='tekstTaktike' id='igrac'> Igrač na potezu: {igrac}</p>
            <p className='tekstTaktike'> Upute: </p>
            <div className='tekstUputa'>
              Unesite početni i krajnji položaj. Položaj je u polju a-h, 1-8.<br></br>
              Primjer unosa: <b>"b2c2"</b><br></br>
              Oznake za figure: <br></br>
              <b>K</b> - King/Kralj<br></br>
              <b>Q</b> - Queen/Dama<br></br>
              <b>R</b> - Rook/Top<br></br>
              <b>N</b> - Knight/Skakač<br></br>
              <b>B</b> - Bishop/Lovac<br></br>
              <b>P</b> - Pawn/Pješak
            </div>
            <p className='tekstTaktike'> Unesi najbolji potez: </p>
            <input 
              className="upisRjesenja"  
              onChange={(e) => setRjesenje(rjesenje = e.target.value)}
              required/>
            <button type="submit" className="btn" onClick={ppredajRjesenje}>
              Predaj rješenje
            </button>
          </div>
        </div>
    </div>

  )

  
}

else {

  

  function zadaj(){
    let f = "http://localhost:8080/api/v1/daily-challenge/coach/" + localStorage.getItem("userId")
    fetch(f, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("profil")
      },
      body: JSON.stringify({
        assignmentNumber: taktika - 1
      }),  
    })
    .then((res) => res.json())
    .then((data) =>{
      console.log(data)
      if(data.message){
      toast(data.message, {
        position: "top-right",
        autoClose: false,
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
        toast.success("uspješno dodana dnevna taktika", {
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



  return(
  <div>
    <ToastContainer    toastStyle={{ backgroundColor: '#634133'}}/>
        <NavBar></NavBar>
        <div className='taktika-trener-pozadina' id='color-bg-primary'>
            <p className='pozdrav'>Pozdrav trener, odaberi taktiku za danas</p>
            <div>
                <div className='taktika-form-container' id='color-bg-primary'>
                    <div className="taktika-form" id='color-bg-secundary'>
                        <div className="takika-form-content">
                            <p>Prijavljena greška u taktici:</p>
                            {neRevidirani.map((val, key) => {
                              return(                            
                              <div className='trener-prijavaGreske-container '>
                              <p className='tekstPrijavljeneGreske'>Predlozeno rjesenj: {val.solution} Obrazloženje: {val.description}</p>
                              <div>
                                  <button type="submit" className="buttonOdaberiTaktiku" onClick={() => {validiraj(true, val.id)}}>
                                      Prihvati rješenje
                                  </button>
                                  <button type="submit" className="buttonOdaberiTaktiku" onClick={() => {validiraj(false, val.id)}}>
                                      Odbaci rješenje
                                  </button>
                              </div>
                          </div>
                          )
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='taktika-form-container' id='color-bg-primary'>
                <div className="taktika-form" id='color-bg-secundary'>
                    <div className="takika-form-content">
                        <div className='taktikaTrener-container'>
                          {taktike.map((val, key) =>{
                            return(
                              <>
                              <p className='tekstTaktike2'><a id='color-text' href={val.link}>{val.name}</a></p>
                              <div className='poredakGumba'>
                                  <button type="submit" className="buttonOdaberiTaktiku" onClick = {() => {setTaktika(taktika = {key}); zadaj()}}>
                                      Odaberi taktiku
                                  </button>
                              </div>
                              </>
                            )
                          })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

}


export default DnevnaTaktika