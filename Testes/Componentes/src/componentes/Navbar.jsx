import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import React from 'react'

function Navbar() {
  return (
    <>
  
  <div className='Conatainer'>

<div className='Infos'>
   
   <Link className='HiperLink' to="/">Home</Link>
   <Link className='HiperLink' to="cadastro">Cadastro</Link>
   <Link className='HiperLink' to="">Login</Link>
   <Link className='HiperLink' to="">Sobre nós</Link>

</div>
 

</div>
      
    </>
  )
}

export default Navbar
