import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { Contato } from './pages/Contato'
import { Produtos } from './pages/Produtos'
import { Lista } from './pages/Lista'
import { List } from './pages/list'

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
          path='/contatos/:id'
          element={<Contato />}
        />
        <Route
          path='/produto/:id'
          element={<Produtos />}
        />
        <Route
          path='/lista/:id'
          element={<Lista />}
        />
        <Route
          path='/list'
          element={<List />}
        />
      </Routes>
    </BrowserRouter>
  )
}
