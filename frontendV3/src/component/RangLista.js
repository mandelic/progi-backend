import React from 'react'
import './RangLista.css'
import {Link} from 'react-router-dom';

const data = [
    { redni: 1., name: "I. Ivic", brojBod: 76 },
    { redni: 2., name: "M. Matic", brojBod: 58 },
    { redni: 3., name: "I. Goric", brojBod: 49},
    { redni: 4., name: "M. Savic", brojBod: 38},
    { redni: 5., name: "T. Tonic", brojBod: 32},
  ]

function RangLista() {
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
                <td>{val.redni}</td>
                <td>{val.name}</td>
                <td>{val.brojBod}</td>
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
