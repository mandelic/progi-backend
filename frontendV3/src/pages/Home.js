import React from 'react'
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, useRouteLoaderData} from 'react-router-dom';
import Centar from '../components/Centar.js';
import Novosti from '../components/Novosti.js';
import NavBar from '../components/NavBar.js'
import ZabranaPristupa from './ZabranaPristupa.js';
import PotpunaZabranaPristupa from './PotpunaZabranaPristupa.js';




function Home() {
  console.log(localStorage)

  if(localStorage.getItem("role") == 'ROLE_UNPAID'){
    return(
      <>
      <ZabranaPristupa></ZabranaPristupa>
      </>
    )
  }

  else if(localStorage.getItem("role") == 'ROLE_DELETED'){
    return(
      <><PotpunaZabranaPristupa></PotpunaZabranaPristupa></>
    )
  }
  else{

  return (
    
    <div className='home-container'>
    <NavBar />
    <Centar />

    </ div>
  )
  }
}

export default Home