import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


function Exercícios() {
  return (
    <div>

        <Navbar/>

     <Link to='/numeros712'>Numeros 7.12</Link>

     <br /><br />

     <Link to='/parescontidos'>Pares Contidos 7.13</Link>
      
    </div>
  )
}

export default Exercícios
