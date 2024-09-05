import React from 'react'
import { useState } from 'react'

function PositivoOuNegativo() {

    const [resultado, setResultado] = useState()

    function Calcular(){

    let Numero = document.getElementById('Numero')

    if(Number(Numero.value)<0){

     setResultado('O número é negativo')

    }else if(Number(Numero.value)>=0 && Number(Numero.value) != ''){

    setResultado('O número é positivo')

    }else if(Numero.value == ''){

     setResultado('Número nulo')


    }

}


  return (

    <>
      
     <h2>Digite um número e verifique se é positivo ou negativo</h2>

     <label>Digite um número</label> <input id='Numero' type="text" />

     <br />
     <br />

     <button onClick={Calcular}>+ ou - ?</button>

     <h2>Resposta:</h2> <h2>{resultado}</h2>

    </>
  )
}

export default PositivoOuNegativo
