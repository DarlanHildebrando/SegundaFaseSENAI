import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Numeros() {
    const [Numeros, setNumeros] = useState('')
    const [Cont, setCont] = useState(0)
    const [Mostrar, setMostrar] = useState(false)
    const [NumeroAnterior, setAnterior] = useState('')


    const Ler = () => {

        if(Numeros>100 && Numeros<200 ){
           
            setCont(Cont+1)
           
     }
    }
    
  

  return ( 
    <div>
    <Navbar/>
    <h1>Números 7.12 AAAAAAAAAAAAAAAAA </h1>

    <input type="text" value={Numeros} onChange={(e) => setNumeros(e.target.value)} />

    <br /><br />

    <button onClick={Ler}>Ler</button>

    <br /><br />

    <button onClick={() => setMostrar(true)}>Resultado</button>

    <br /><br />

{Mostrar && `Números na faixa 100 e 200: ${Cont} ` }

    


    </div>
  )
}

export default Numeros
