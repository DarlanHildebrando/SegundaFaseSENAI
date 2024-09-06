import React from 'react'
import { useState } from 'react'

function StarUber() {

  const[resultado, setResultado]= useState()
  const[resultadoMinuto, setResultadoMinuto] = useState()
  const[resultadoHoras, setResultadoHoras] = useState()
  const[resultadoDias, setResultadoDias] = useState()
  const[resultadoMeses, setResultadoMeses] = useState()
  const[resultadoAnos, setResultadoAnos] = useState()
  

function Calcular(){

  let Distancia = document.getElementById('Distancia')
  let Velocidade = 300000
  let TempoViagem

  TempoViagem = Number(Distancia.value) / Velocidade

  setResultado(TempoViagem)
  setResultadoMinuto(TempoViagem/60)
  setResultadoHoras((TempoViagem/60)/60)

 

  
  

  

}

  return (


    <>
      <h2>StarUber.</h2>
    
      <h3>Viagens na velocidade da luz!</h3>

      <label>Distância da sua corrida:</label> <input id='Distancia' type="text" />

      <br /><br />

      <button onClick={Calcular}>Calcular viagem</button>


      <h3>Tempo de viagem:</h3>
      <h4>Segundos: {resultado}</h4>
      <h4>Minutos: {resultadoMinuto}</h4>
      <h4>Horas: {resultadoHoras}</h4>
      <h4>Dias:{resultadoDias}</h4>
      <h4>Mêses:{resultadoMeses}</h4>
      <h4>Anos:{resultadoAnos}</h4>

    </>
  )
}

export default StarUber
