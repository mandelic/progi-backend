import React from 'react'
import Profil_NavBar from '../components/Profil_NavBar'
import NavBar from '../components/NavBar';
import './Placanje.css';


function Placanje() {
  return (
    <div>
        <NavBar></NavBar>
        <div className='podaciContainer2' id='color-bg-primary'>
            <Profil_NavBar></Profil_NavBar>
            <div className='Placanje-form-container' id='color-bg-primary'>
                <form className="Placanje-form" id='color-bg-secundary'>
                  <p className='placanjeTekst'>Plačanje članarine</p>
                  <div className="Placanje-form-content">
                    <div className="form-group mt-3">
                      <label>Ime</label>
                      <input
                        type="ime"
                        className="form-control mt-1 sign-up" 
                        id='color-bg-primary'
                        placeholder="npr. Fran"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Prezime</label>
                      <input
                        type="prezime"
                        className="form-control mt-1 sign-up" 
                        id='color-bg-primary'
                        placeholder="npr. Hunski"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>E-pošta</label>
                      <input
                        type="name"
                        className="form-control mt-1 sign-up"
                        id='color-bg-primary'
                        placeholder="npr. fran.hunski@gmail.com"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Broj Mobitela</label>
                      <input
                        type="broj"
                        className="form-control mt-1 sign-up"
                        id='color-bg-primary'
                        placeholder="npr. 0992332294"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Broj Kartice</label>
                      <input
                        type="kartica"
                        className="form-control mt-1 sign-up"
                        id='color-bg-primary'
                        placeholder="broj kartice"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Kontrolni broj kartice</label>
                      <input
                        type="kontrolniBroj"
                        className="form-control mt-1 sign-up"
                        id='color-bg-primary'
                        placeholder="kontrolni broj kartice"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Datum isteka</label>
                      <div className='datumIsteka-container'>
                        <select className='datumIsteka-container2'>
                          <option>Siječanj</option>
                          <option>Veljača</option>
                          <option>Ožujak</option>
                          <option>Travanj</option>
                          <option>Svibanj</option>
                          <option>Lipanj</option>
                          <option>Srpanj</option>
                          <option>Kolovoz</option>
                          <option>Rujan</option>
                          <option>Listopad</option>
                          <option>Studeni</option>
                          <option>Prosinac</option>
                        </select>
                        <select className='datumIsteka-container2'>
                          <option>2023</option>
                          <option>2024</option>
                          <option>2025</option>
                          <option>2026</option>
                          <option>2027</option>
                          <option>2028</option>
                          <option>2029</option>
                          <option>2030</option>
                          <option>2031</option>
                          <option>2032</option>
                          <option>2033</option>
                          <option>2034</option>
                          <option>2035</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <label>Datum placanja:</label>
                      <div className='datumIsteka-container'>
                        <select className='datumIsteka-container2'>
                          <option>Siječanj</option>
                          <option>Veljača</option>
                          <option>Ožujak</option>
                          <option>Travanj</option>
                          <option>Svibanj</option>
                          <option>Lipanj</option>
                          <option>Srpanj</option>
                          <option>Kolovoz</option>
                          <option>Rujan</option>
                          <option>Listopad</option>
                          <option>Studeni</option>
                          <option>Prosinac</option>
                        </select>
                        <select className='datumIsteka-container2'>
                          <option>2022</option>
                          <option>2023</option>
                          <option>2024</option>
                          <option>2025</option>
                          <option>2026</option>
                          <option>2027</option>
                          <option>2028</option>
                          <option>2029</option>
                          <option>2030</option>
                          <option>2031</option>
                          <option>2032</option>
                          <option>2033</option>
                          <option>2034</option>
                          <option>2035</option>
                        </select>
                      </div>
                    </div>
                  </div>
                    <div className="d-grid gap-2 mt-3">
                      <button type="submit" className="btn btn-danger">
                        Plati
                      </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

  )
}

export default Placanje