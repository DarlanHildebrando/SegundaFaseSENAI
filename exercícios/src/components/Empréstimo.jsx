import React from 'react'
import { useState } from 'react'

function Empréstimo() {

   const [resultado, setResultado] = useState()

   function Calcula(){

    let Salario = document.getElementById('Salário')
    let Empréstimo = document.getElementById('Empréstimo')
    let Prestações = document.getElementById('Prestações')

    let ValorPrestação
    let PorcentagemSalario

    Salario = Number(Salario.value)
    Empréstimo = Number(Empréstimo.value)
    Prestações = Number(Prestações.value)

    ValorPrestação = Empréstimo / Prestações
    PorcentagemSalario = (30/100)*Salario

    if(Salario =='' || Empréstimo == '' || Prestações == ''){

        setResultado('Campos não preenchidos!')
   

    }else if(Salario < 0 || Empréstimo < 0 || Prestações < 0){

    
        setResultado('Os valores não podem ser negativos!')
 
    }else if(ValorPrestação>PorcentagemSalario){
     
        setResultado('Empréstimo não válido!')

    }else 
    {

      setResultado('Empréstimo válido!')

    }

}


  return(
    <>

       <h3>Para fazer um empréstimo, preencha os seguintes campos:</h3>
      
      <label>Salário:</label> <input id='Salário' type="text" />

      <br /><br />

      <label>Valor do empréstimo:</label> <input id='Empréstimo' type="text" />

      <br /><br />

      <label>Número de prestações:</label> <input id='Prestações' type="text" />

      <br /><br />

      <button onClick={Calcula}>Verificar validação</button>

      <h2>Resposta:</h2> {resultado}

    </>
  )
  }


export default Empréstimo
