import React from 'react'
import { useState } from 'react'
import Navbar from '../componentes/Navbar'
import '../styles/Cadastro.css'


function Cadastro() {
  const [User, setUser] = useState()
  const [Senha, setSenha] = useState()

  return (
    <>
     <Navbar/>

     <form className='Form'>

    <input type="email" className='Inpt' onChange={(e) => setUser((e.target.value))} />

    
     </form>
    </>
  )
}

export default Cadastro
