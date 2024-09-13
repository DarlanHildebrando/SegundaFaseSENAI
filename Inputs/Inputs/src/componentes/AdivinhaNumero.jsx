import React from 'react'
import { useState } from 'react'

function AdivinhaNumero() {

    const [Numero, setNumero] = useState(0)
    const [Adivinha, setAdivinha] = useState(0)
    const [AcertouErrou, setAcertouErrou] = useState(false)
    let NumeroAdd

    function EnviaNumero(){

    NumeroAdd = Numero

    setNumero(0)

    }

    function Verificar(){

        if(Adivinha == NumeroAdd){

        setAcertouErrou('Acertouuu')

        }else{

        setAcertouErrou('Errouuuu')

        }

    }

  return (
    

    <div>
      
     Digite um número de 1 a 10: <input type="number" className='forms' value={Numero} onChange={(event) => setNumero(event.target.value)}/> <button onClick={EnviaNumero}>Enviar número</button>



     <br /><br />

     adivinhe o número de 1 a 10: <input type="number" className='forms' value={Adivinha} onChange={(event) => setAdivinha(event.target.value)} />

     <button onClick={Verificar}>Acertou ou errou?</button>

     {AcertouErrou}


    </div>
  )
}

export default AdivinhaNumero
