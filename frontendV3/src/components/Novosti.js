import React, { useEffect, useState } from 'react'
import './Novosti.css'
import {Link} from 'react-router-dom';

function Novosti() {

  let [novosti, setData] = useState([{title:"",content:""}])

  useEffect(() =>{
    fetch("http://localhost:8080/api/v1/news",{
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    .then((res) => res.json())
  .then((data) => {setData(novosti = data.slice(0,5)); console.log("HEj"); console.log(novosti)})
  }, [])


  return (
    <div className='Novosti' id='color-text'>
      <div><h2>NOVOSTI</h2></div>
      {novosti.map((val, key) => {
        return(
          <>
      <div className='novost1'>
        <div className='novNaslov1'><text>{val.title}</text></div>
        <div className='novText1'><text> {val.content}</text></div>
      </div>
          </>
        )
      })}
            <div>
        <h4 className='pN' >
          <Link className='pogledajNovosti' to='/vijesti' id='link'>Pogledaj više novosti</Link>
        </h4>
      </div>

</div>
  )
}

export default Novosti
