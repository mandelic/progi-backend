import React from 'react'
import {BrowserRouter as Router, Routes, Route, useRouteLoaderData} from 'react-router-dom';
import Centar from '../components/Centar.js';
import Novosti from '../components/Novosti.js';


function Home() {
  console.log(localStorage)
  return (
    <>
    <Centar />
    <Novosti />
    </>
  )
}

export default Home