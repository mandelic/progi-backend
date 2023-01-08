import React, { useEffect, useState } from 'react'
import './Rang.css';

import NavBar from '../components/NavBar';




function Rang() {

  let [data, setData] = useState([])
  useEffect(() =>{
    fetch("http://localhost:8080/api/v1/ranked-list",{
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    .then((res) => res.json())
  .then((data) => {setData(data = data)})
  }, [])
  return (
    <><NavBar></NavBar >
      <div className="Tab">
        <table>
          <tr>
            <th>Pozicija</th>
            <th>Ime</th>
            <th>Broj bodova</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{val.memberId}</td>
                <td>{val.points}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  )
}

export default Rang
