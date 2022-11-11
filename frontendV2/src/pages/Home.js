import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Centar from '../components/Centar.js';
import Novosti from '../components/Novosti.js';

function Home() {
  return (
    <>
    <Centar />
    <Novosti />
    </>
  )
}

export default Home