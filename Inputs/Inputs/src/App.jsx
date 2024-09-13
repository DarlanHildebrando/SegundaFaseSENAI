
import { useState } from 'react'
import './App.css'
import Maior from './componentes/Maior'
import Menor from './componentes/Menor'
import AdivinhaNumero from './componentes/AdivinhaNumero'

function App() {

  const [InptIdade, setInputIdade] = useState(0)
  const [maior, setMaior] = useState (false)
  const [menor, setMenor] = useState (false)

  function ConfereIdade(){

    if(InptIdade>=18){

    
      setMaior(true)
      setMenor(false)

    }else{

    setMenor(true)
    setMaior(false)

    }
  }

   
  return (

    

    <>
      
      <h2>Inputs</h2>

<div className='Separa'>

  <div>
      idade:
      <input type="Number" className='forms' value={InptIdade} 
       onChange={ (event) => {setInputIdade(event.target.value)}}/>

       <br /><br />

       <button onClick={ConfereIdade}>Conferir idade</button>

       {maior && <Maior/>}
       {menor && <Menor/>}

    </div>

</div>


       <div className='Separa'>

        <div>

       <AdivinhaNumero/>

        </div>
        
     </div>


    </>
  )
  }

export default App
