
import { createBrowserRouter } from "react-router-dom"; 

/**Pages */
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Skateboard from "../pages/Skateboard";
import Exercícios from "../pages/Exercícios";

/**Exercícios */
import Numeros from "../exercicios/Numeros";
import ParesContidos from "../exercicios/ParesContidos";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/skate", element: <Skateboard/>},
    {path: "/exercicios", element: <Exercícios/>},

    /**Exercícios */

    {path:'/numeros712', element: <Numeros/>},
    {path:'/parescontidos', element:<ParesContidos/>}
])

export default router;
