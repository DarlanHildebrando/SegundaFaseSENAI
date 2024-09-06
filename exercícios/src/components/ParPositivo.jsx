import React from 'react'
import { useState } from 'react'

function ParPositivo() {

    const [resultado, setResultado] = useState()

    function Verificar(){

     let Numero = document.getElementById('Numero')

     if(Number(Numero.value)%2 == 0 && Number(Numero.value)>=0 ){

      setResultado('O número é par e positivo')

     }else if(Number(Numero.value)%2 == 0 && Number(Numero.value)<=0){
 
      setResultado('O número é par e negativo')

       }else if(Number(Numero.value)%2 != 0 && Number(Numero.value)<=0){

      setResultado('O número é ímpar e negativo')

      }else if(Number(Numero.value)%2 != 0 && Number(Numero.value)>=0){
 
      setResultado('O número é ímpar e positivo')

    }
  }

  return (
    <>
      
      <h2>Digite um número e verifique se é par e positivo</h2>

     <label>Digite um número</label> <input id='Numero' type="text" />

     <br />
     <br />

     <button onClick={Verificar}>+ ou - ?</button>

     <h2>Resposta:</h2> <h2>{resultado}</h2>

    </>
  )
}

export default ParPositivo
