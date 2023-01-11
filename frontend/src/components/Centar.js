import React from 'react'
import './Centar.css';
import RangLista from './RangLista';
import Pozdrav from './Pozdrav';
import Novosti from './Novosti';
import {Link} from 'react-router-dom';

function Centar() {
  return (

    <div className='centar' id='color-bg-primary'>
        <Pozdrav/>
        <RangLista/>
        <Novosti />

    </div>

  )
}

export default Centar