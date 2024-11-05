
import { useState } from 'react'
import Navbar from '../componentes/Navbar'

function Home() {

 const [Form, setForm] = useState({ Nome: '', Email: '', Senha: '', Endereco: '', CPF: '' })

 const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await fetch('http://localhost:3000/usuarios', {

        method: 'POST',
        headers: {

            'Content-type': 'application/json'

        },

        body: JSON.stringify(Form)

    });

    if(response.ok){

        setForm({Nome: '', Email: '', Senha: '', Endereco: '', CPF: '' })

    }


 }

  return (
    <>

    <Navbar/>

<form onSubmit={handleSubmit}>

<label htmlFor="">Nome User:</label>

<br />

    <input 
    type="text" 
    value={Form.Nome}
    onChange={(e) => setForm({ ...Form, Nome: e.target.value })}
    required

    />

    <br /><br />

<label htmlFor="">Email User:</label>

<br />

<input 
    type="email" 
    value={Form.Email}
    onChange={(e) => setForm({ ...Form, Email: e.target.value })}
    required
    
    />

    <br /><br />

    <label htmlFor="">Senha User:</label>

<br />

<input 
    type="password" 
    value={Form.Senha}
    onChange={(e) => setForm({ ...Form, Senha: e.target.value })}
    required
    
    />

    <br /><br />

    <label htmlFor="">Endereço:</label>

<br />

<input 
    type="" 
    value={Form.Endereco}
    onChange={(e) => setForm({ ...Form, Endereco: e.target.value })}
    required
    
    />

    <br /><br />

    <label htmlFor="">CPF:</label>

<br />

<input 
    type="password" 
    value={Form.CPF}
    onChange={(e) => setForm({ ...Form, CPF: e.target.value })}
    required
    
    />

    <br /><br />


    

    <input type="submit" />


</form>
    </>
  )
}

export default Home