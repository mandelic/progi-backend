import React from 'react'
import NavBar from '../components/NavBar';
import './PotpunaZabranaPristupa.css';
import {FaBan} from 'react-icons/fa'

function PotpunaZabranaPristupa() {
 
  return (
    <div>
        <NavBar></NavBar>
        <div className='Potpuna-zabrana-container'>
            <div className='Potpuna-zabrana-form-container' id='color-bg-primary'>
                <div className="Potpuna-zabrana-form" id='color-bg-secundary'>
                    <div className="Potpuna-zabrana-form-content">
                        <div>
                            <FaBan size={"50vh"} color={"#392a16"}></FaBan>
                        </div>
                        <div>
                            <p className='Potpuna-zabrana-tekst'>Žao nam je, ali zabranjen vam je pristup stranici!!!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PotpunaZabranaPristupa