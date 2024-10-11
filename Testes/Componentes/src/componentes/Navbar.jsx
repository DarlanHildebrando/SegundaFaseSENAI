import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import {useEffect, useState} from 'react'


function Navbar() {

  const [Logado, setLogado] = useState(false)
  const [UserLogado, setUserLogado] = useState()


  useEffect(() => {

   setUserLogado(localStorage.getItem('User'))

   if(UserLogado == '' || UserLogado == null){

    alert('Usuario não cadastrado')

   }else{

    alert('User cadastrado')
   return

   }
 

  }, [])
  

  return (
    <>
  
  <div className='Conatainer'>

<div className='Infos'>


   <Link className='HiperLink' to="/">Home</Link>
   <Link className='HiperLink' to="cadastro">Cadastro</Link>
   <Link className='HiperLink' to="">Login</Link>
   <Link className='HiperLink' to="">Sobre nós</Link>


</div>
 

</div>
      
    </>
  )
}

export default Navbar
