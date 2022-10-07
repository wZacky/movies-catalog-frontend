import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "dashboard",
        element: <p>en proceso</p>
      }
    ]
  },
])

/**
 * routes sirve para saber que componente carga cada path

en el navbar debo especificar los paths de c/link

el navbar estara en toda la app
 */

export default router;