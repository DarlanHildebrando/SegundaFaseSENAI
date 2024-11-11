import React, { useEffect, useState } from 'react'
import Navbar from '../componentes/Navbar'

function Usuarios() {

  const [User, setUser] = useState('')
  const [Mostrar, setMostrar] = useState(false)
  const token = localStorage.getItem('token')


  const Renderizar = async () => {

    try {
      const response = await fetch('http://localhost:3000/perfil', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json'
        }
      });

      if (response.ok) {

        const userData = await response.json();
        setUser(userData)
        setMostrar(true)

      }

    }

    catch (err) {

      console.error('Erro ao buscar usuario', err)

    }

  }


  useEffect(() => {

    Renderizar()

  }, [])



  return (
    <div>

      <Navbar />


    
      <h4>
        Nome Usuário logado: {User.nome} <br /> <br />  
        Email Usuário logado: {User.email} <br /> <br />
        Senha Hasheada: {User.senha}
       </h4> 
   

        
    

      




    </div>
  )
}

export default Usuarios
