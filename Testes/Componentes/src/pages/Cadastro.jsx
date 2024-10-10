import React from 'react'
import { useState } from 'react'
import Navbar from '../componentes/Navbar'
import '../styles/Cadastro.css'


function Cadastro() {
  const [User, setUser] = useState()
  const [Senha, setSenha] = useState()
  

  const Cadastrar = () => {

localStorage.setItem('User', User)
localStorage.setItem('Senha', Senha)

  }

  return (
    <>
     <Navbar/>

     <div className='Container'>

      <h4>Cadastre sua conta!</h4>

     <form className='Form'>

    <input type="email" placeholder='Digite seu email' className='Inpt' onChange={(e) => setUser((e.target.value))} />
    
    <input type="password" placeholder='Digite sua senha' className='Inpt' onChange={(e) => setSenha((e.target.value))} />

    <input type="submit" className='Inpt' onClick={Cadastrar} />

    {User}
    
     </form>
     
     </div>

    </>
  )
}

export default Cadastro
