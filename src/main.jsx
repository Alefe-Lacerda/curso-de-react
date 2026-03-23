import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // O App é um componente (e sempre tem q ser renderezado com letra maiúscula)
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Importa o createBrowserRouter do react-router-dom
import TaskPage from './pages/TaskPage.jsx'

const router = createBrowserRouter([
  {
    path: '/', // O caminho da rota, ou seja, o q eu preciso digitar na URL para acessar essa rota
    element: <App />, // O elemento que vai ser renderizado quando a rota for acessada
  },
  {
    path: '/tasks',
    element: <TaskPage />,
  }
])

createRoot(document.getElementById('root')).render( // É nessas linhas de código aqui que a gente insere no index.html
  <StrictMode>
    <RouterProvider router={router} /> {/* O RouterProvider é o componente que vai renderizar as rotas */}
  </StrictMode>,
)
