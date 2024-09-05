import { useState } from "react"


function Componente01() {

  const [resultado, setResultado] = useState(0)

  function Aumentar(){

  setResultado(resultado +1)

  }

  function Diminuir(){
setResultado(resultado - 1)

  }


  return (
    
    <>
    
    <button onClick={Aumentar}>+</button>
    {resultado}
    <button onClick={Diminuir}>-</button>
    

    
    
    </>


  )
}

export default Componente01
