import React from 'react'
import './RangLista.css'

const data = [
    { redni: 1., name: "I. Ivic", brojBod: 76 },
    { redni: 2., name: "M. Matic", brojBod: 58 },
    { redni: 3., name: "I. Goric", brojBod: 49},
    { redni: 4., name: "M. Savic", brojBod: 38},
    { redni: 5., name: "T. Tonic", brojBod: 32},
  ]

function RangLista() {
    return (
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
                <td>{val.redni}</td>
                <td>{val.name}</td>
                <td>{val.brojBod}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }
    
  export default RangLista;
