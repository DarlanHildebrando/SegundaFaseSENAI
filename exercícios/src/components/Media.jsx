import React from 'react'
import { useState } from 'react'

function Media() {

   const [resultado, setResultado] = useState()

   function Somar(){

   let num1 = document.getElementById('Num1')
   let num2 = document.getElementById('Num2')
   let media 

   

   media = (Number(num1.value)+Number(num2.value))/2

   setResultado(media)


   }

  return (
    <>
      <h2>Calcular a média de 2 números</h2>

      <label>Digite um número</label><input id='Num1' type="text" />
      
      <br />
      <br />
      
      <label>Digite um número</label><input id='Num2' type="text" />
      
      <br />
      <br />

      <button onClick={Somar}>Calcular Média</button>

      <br />

     <h2>Resultado:</h2> <h2>{resultado}</h2>

    </>
  )
}

export default Media
