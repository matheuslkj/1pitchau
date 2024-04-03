import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { Contato } from './pages/Contato'
import { Produtos } from './pages/Produtos'

export const Rotas = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/carrinho'
          element={<Carrinho />}
        />
        <Route
          path='/contatos'
          element={<Contato />}
        />
        <Route
          path='/produto/:id'
          element={<Produtos />}
        />
      </Routes>
    </BrowserRouter>
  )
}
