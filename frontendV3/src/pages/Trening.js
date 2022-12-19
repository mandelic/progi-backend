import React from 'react'
import './Podaci.css'
import NavBar from '../components/NavBar';
import Profil_NavBar from '../components/Profil_NavBar'

function Trening() {
  let prT= [{
    naslov: 'redovni trening',
    datum: '23.4.2011',
    opis: 'jdsdjis',
    organizator: 'marko'
  }]

  let slT =[
    {
    naslov: 'trenig za turnir',
    datum: '23.4.2011',
    opis: 'jdsdjis',
    organizator: 'marko'
    },
    {
      naslov: 'trenig',
      datum: '23.4.2011',
      opis: 'jdsdjis',
      organizator: 'pero'
    }

]

  return (
    <div>      
      <NavBar></NavBar>
      <div className='podaciContainer' id='color-bg-primary'>
        <Profil_NavBar></Profil_NavBar>
        <div>
          <div className='t'>

            <table className='t-table'>
              <caption>NADOLAZECI TRENINZI NA KOJE SI PRIJAVLJEN</caption>
              <tr>
                <th>trening</th>
                <th>datum</th>
                <th>opis</th>
                <th>organizator</th>
              </tr>
              {prT.map((val,key) =>{
                return(
                  <tr key={key}>
                    <td>{val.naslov}</td>
                    <td>{val.datum}</td>
                    <td>{val.opis}</td>
                    <td>{val.organizator}</td>
                  </tr>
                )
              })}
            </table>
          </div>
          <div className='t'>
          <table className='t-table'>
              <caption>NADOLAZECI TRENINZI NA KOJE SE MOŽEŠ PRIJAVITI</caption>
              <tr>
                <th>trening</th>
                <th>datum</th>
                <th>opis</th>
                <th>organizator</th>
                <th>prijavi se</th>
              </tr>
              {slT.map((val,key) =>{
                return(
                  <tr key={key}>
                    <td>{val.naslov}</td>
                    <td>{val.datum}</td>
                    <td>{val.opis}</td>
                    <td>{val.organizator}</td>
                    <td><button className='btn'>želim se prijaviti!</button></td>
                  </tr>
                )
              })}
              </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trening
