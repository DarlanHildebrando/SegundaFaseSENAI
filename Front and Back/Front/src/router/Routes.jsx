import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Usuarios from "../pages/Usuarios";
import Login from "../pages/Login";

const Router = createBrowserRouter([

    {path: '/', element: <Home/>},
    {path: '/usuarios', element: <Usuarios/>},
    {path: '/loginusuario', element: <Login/>}

])

export default Router;