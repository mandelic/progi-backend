import React from 'react'
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, useRouteLoaderData} from 'react-router-dom';
import Centar from '../components/Centar.js';
import Novosti from '../components/Novosti.js';
import NavBar from '../components/NavBar.js'




function Home() {
  console.log(localStorage)
  return (
    <>
    <NavBar />
    <Centar />
    <Novosti />
    </>
  )
}

export default Home