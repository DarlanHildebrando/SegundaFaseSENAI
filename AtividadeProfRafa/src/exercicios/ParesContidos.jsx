import React, { useState } from 'react'

function ParesContidos() {

    const [Num1, setNum1] = useState('')
    const [Num2, setNum2] = useState('')


  return (
    
    <div>
      
      Numero 1: <input type="text" onChange={(e) => setNum1(e.target.value)} />

<br /><br />

      Numero 2: <input type="text" onChange={(e) => setNum2(e.target.value)} />

    </div>
  )
}

export default ParesContidos
