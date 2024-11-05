import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Usuarios from "../pages/Usuarios";

const Router = createBrowserRouter([

    {path: '/', element: <Home/>},
    {path: '/usuarios', element: <Usuarios/>}

])

export default Router;