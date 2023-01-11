import React, { useEffect, useState } from 'react'
import './RangLista.css'
import {Link} from 'react-router-dom';





function RangLista() {

  let [data, setData] = useState([{points: "", member:""},{points: "", member:""},{points: "", member:""},{points: "", member:""},{points: "", member:""}])
  useEffect(() =>{
    fetch("https://sahisti-lii1.onrender.com/api/v1/ranked-list",{
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    .then((res) => res.json())
  .then((data) => {setData(data = data.slice(0,5))})
  }, [])
  
    return (
      <div>
      <h2 className='naslov'>RANG LISTA</h2>
      <div className="RangLista">
        
        <table>
          <tr>
            <th>Redni broj</th>
            <th>Ime</th>
            <th>Broj bodova</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{val.member}</td>
                <td>{val.points}</td>
              </tr>
            )
          })}
        </table>
      </div>
      <h4 className='pogledajOstatak' >
            <Link className='pogledaj' to='/rang' id='link'>
                Pogledaj ostatak rang liste
            </Link></h4>
      </div>
    );
  }
    
  export default RangLista;
