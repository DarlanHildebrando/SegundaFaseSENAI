import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link>
        <Link to='/contatinhoCadastro'>Cadastrar Contatinho</Link>
        <Link to='/contatinhos'>Contatinhos</Link>
    </nav>
  )
}

export default Navbar
