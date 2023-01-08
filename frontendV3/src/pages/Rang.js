import React from 'react'
import './Rang.css';

import NavBar from '../components/NavBar';

const data = [
  { redni: 1., name: "I. Ivic", brojBod: 76 },
  { redni: 2., name: "M. Matic", brojBod: 58 },
  { redni: 3., name: "I. Goric", brojBod: 49},
  { redni: 4., name: "M. Savic", brojBod: 38},
  { redni: 5., name: "T. Tonic", brojBod: 32},
  { redni: 6., name: "K. Baric", brojBod: 30},
  { redni: 7., name: "Z. Kovac", brojBod: 29},
  { redni: 8., name: "R. Barisic", brojBod: 27},
  { redni: 9., name: "D. Horvat", brojBod: 26},
  { redni: 10., name: "A. Lucic", brojBod: 24},
  { redni: 11., name: "M. Marusic", brojBod: 22},
  { redni: 12., name: "M. Tomic", brojBod: 20},
  { redni: 13., name: "K. Matic", brojBod: 19},
  { redni: 14., name: "V. Grubisic", brojBod: 18},
  { redni: 15., name: "Z. Kralj", brojBod: 15},  
]



function Rang() {
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
                <td>{val.redni}</td>
                <td>{val.name}</td>
                <td>{val.brojBod}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  )
}

export default Rang
