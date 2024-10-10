import { createBrowserRouter} from "react-router-dom";

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";

const routes = createBrowserRouter([

{path: "/", element: <Home/>},
{path: "cadastro", element: <Cadastro/>}

])

export default routes;