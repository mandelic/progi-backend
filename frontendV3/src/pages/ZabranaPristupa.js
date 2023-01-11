import React from 'react'
import NavBar from '../components/NavBar';
import './ZabranaPristupa.css';
import {GiStopSign} from 'react-icons/gi'
import Profil_NavBar from '../components/Profil_NavBar'
import { useLocation, useNavigate } from "react-router";


function ZabranaPristupa() {
    const navigate = useNavigate();

function odlazakNaPlacanje(){
    navigate("/placanje");

}
  return (
    <div>
        <div className='Zabrana-container'>
            <div className='Zabrana-form-container' id='color-bg-primary'>
                <div className="Zabrana-form" id='color-bg-secundary'>
                    <div className="Zabrana-form-content">
                        <div>
                            <GiStopSign size={"50vh"} color={"#392a16"}></GiStopSign>
                        </div>
                        <div>
                            <p>Zabranjem vam je pristup stranici jer niste platili članarinu. Pristup stranici će vam biti omogućen nakon što platite članarinu.</p>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-danger" onClick={odlazakNaPlacanje}>
                                    Plati
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ZabranaPristupa