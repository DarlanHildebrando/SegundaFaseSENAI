import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'

function Cadastro() {

    const [ContatinhoCad, setCad] = useState('')
    const {VetorContatos, setVetor, Contatinho01, setContatinho} = useContext(GlobalContext)
    

    const Cadastrar = (e) =>{

        e.preventDefault()


    setVetor([...VetorContatos, ContatinhoCad])

    



    }

  return (
    <div>
    <Navbar/>
      <h1>Cadastre seu contatinho</h1>

      <form  className='Container'>

        <div>

        <label htmlFor="Nome">Nome:</label> 

        <br />

        <input type="text" value={ContatinhoCad} onChange={(e) => setCad(e.target.value)}/>

    </div>

    <br />
     
     <button onClick={Cadastrar}>Cadastrar</button>

      </form>

      

    </div>

    
  )
}

export default Cadastro
