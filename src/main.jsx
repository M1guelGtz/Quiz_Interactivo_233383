import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Formulario from './Pages/Formulario.jsx'
import Generador from './Pages/Generador.jsx'
import Home from './Pages/Home.jsx'
import Quiz from './Pages/Quiz.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/formulario",
    element: <Formulario/>
  },
  {
    path: "/quiz",
    element: <Quiz />
  },{
    path: "/formulario/datos",
    element: <Generador />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
