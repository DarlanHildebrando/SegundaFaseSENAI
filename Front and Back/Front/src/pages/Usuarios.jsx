import React, { useEffect, useState } from 'react'
import Navbar from '../componentes/Navbar'

function Usuarios() {

  const [User, setUser] = useState([])
  const [Mostrar, setMostrar] = useState(false)


  const Renderizar = async () => {

    try {
      const response = await fetch('http://localhost:3000/usuarios/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {

        throw new Error('Erro ao buscar usuario')


      }

      const data = await response.json();
      setUser(data);

      if(data.lenght > 0){

      setMostrar(false)

      }else{

        setMostrar(true)

      }

    }

    catch (err) {

      console.error('Erro ao buscar usuario', err)

    }

  }


  useEffect(() => {

    Renderizar();

  }, [])



  return (
    <div>

      <Navbar />


      {Mostrar ? (
        <ul>
          {User.map((users) => (
            <li key={users.id}>
              <h4>
               Nome: {users.nome} - {users.email}
              </h4>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Nada aqui!</h1>
      )}




    </div>
  )
}

export default Usuarios
