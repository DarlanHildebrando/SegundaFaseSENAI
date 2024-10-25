import React, { useContext, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Navbar from '../components/Navbar'

function Contatinhos() {

    const {VetorContatos, setVetor} = useContext(GlobalContext)

  return (
    <div>
        <Navbar/>

        <div className='Contatinhos'>

{VetorContatos.map((V, index) => (

  <div key={index}>

  <p>{V}</p>

 </div>
))}

</div>
      
    </div>
  )
}

export default Contatinhos
