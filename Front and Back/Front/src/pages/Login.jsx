import React, { useState } from 'react'
import Navbar from '../componentes/Navbar'

function Login() {


    const [FormLogin, setLogin] = useState ({ Email: '', Senha: ''})
    const [Mensagem, setMensagem] = useState('')

    const EfetuarLogin = async (e) =>{

        e.preventDefault();

        try{

            const response = await fetch('http://localhost:3000/login', {

                method: 'POST',
                headers: {'Content-type':'application/json'},
                body: JSON.stringify(FormLogin)
                
                
            });

            

            

            if(!response.ok){

                setMensagem("Erro ao efetuar login!")

            }else{
                const data = await response.json();
                setMensagem("Login bem sucedido!")
                localStorage.setItem('token', data.token)

            } 
         }   catch (error){

            setMensagem('Erro ao fazer login!')

            }
    }

  return (

    <div>

        <Navbar/>

      <h1>Login</h1>

      <form onSubmit={EfetuarLogin}>
       
       <label htmlFor="">Email:</label>

       <br />

      <input type="text" required value={FormLogin.Email} onChange={(e) => setLogin({...FormLogin, Email: e.target.value})}/>
       <br /><br />

       <label htmlFor="">Senha:</label>

       <br />

      <input type="text" value={FormLogin.Senha} onChange={(e) => setLogin({...FormLogin, Senha: e.target.value})}/>
 
       <br /><br />

      <input type="submit" />

</form>

{Mensagem}

    </div>
  )
}

export default Login
