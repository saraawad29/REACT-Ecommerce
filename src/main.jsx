import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProdContextProvider from './prodContext'
// import Test from './components/Test'
import Boucle from './components/boucle'
import Collier from './components/collier'
import Bague from './components/bague'
import  Connexion from './components/connexion'
import  Accueil from './components/accueil'
import  Inscrpition from './components/Inscrpition'
import  Panier from './components/panier'
// import Root from './root'




// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Root />
  // },
  {
    path: "/",
    element: <App />
  },
  {
    path: "Panier",
    element: <Panier />
  },
  {
    path: "Connexion",
    element: <Connexion />
  },
  {
    path: "Inscrpition",
    element: <Inscrpition />
  },
  {
  path: "Accueil",
    element: <Accueil />
  },
  {
    path: "Boucle",
    element: <Boucle />
  },
  {
    path: "Collier",
    element: <Collier />
  },
  {
    path: "Bague",
    element: <Bague />
  }
]);
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)