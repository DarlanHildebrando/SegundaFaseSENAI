import {useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Navbar from '../components/Navbar'

function Skateboard() {
 
    const {MusicaGlobalSkate} = useContext(GlobalContext)

  return (
    <div>
        <Navbar/>

      <h1>CHARLIE BROWN POOOORRAAAA🛹🛹🛹🛹🛹🛹🛹</h1>

      <h4>Agora eu sei exatamente como andar de skate
Bom recomeçar, poder andar de skate
Pois eu me lembro de tudo, irmão
Eu andava de skate também
Um homem quando anda de skate
Não anda de skate com ninguém

<br /><br />

Eu segurei os meus skate
Pois não queria demonstrar os meus skates
Já que estava ali só pra andar de skate
E aprender um pouco mais sobre andar de skate

<br /><br />

Eles dizem que é impossível encontrar o skate
Sem perder o skate
Mas pra quem tem pensamento skate
O impossível é só questão de ter skate

<br /><br />

E disso os skates sabem
Só os skates sabem
E disso skates sabem
Só os skates sabem

<br /><br />

Todos os skates eu desejo a você
Pois precisamos de skate
Nos dias de skate
O medo segue os nossos skates
O medo segue os nossos skates
Mina linda eu quero andar no seu skate

<br /><br />

Você deixou o skate
Você deixou o skate
Quero te ver o skate
Quero te ver o skate
Você deixou o skate

<br /><br />

Agora eu sei exatamente como andar de skate
Vou recomeçar, poder andar de skate
Pois eu me lembro de tudo, irmão
Andava de skate também
Um homem quando anda de skate
Não anda de skate com ninguém</h4>

      <h2>{MusicaGlobalSkate}</h2>

    </div>
  )
}

export default Skateboard
