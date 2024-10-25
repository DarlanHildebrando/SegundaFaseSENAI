import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Cadastro from "../pages/Cadastro";
import Contatinhos from "../pages/Contatinhos";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: '/contatinhoCadastro', element: <Cadastro/>},
    {path: '/contatinhos', element: <Contatinhos/>} 
])

export default router;
