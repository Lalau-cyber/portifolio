import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Projetos from './pages/projetos'
import {ProjetosDados} from './dados/ProjetosDados'
import DetalhesProjetos from './pages/DetalhesProjeto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projeto/:id" element={<ProjetosDados />} />
        <Route path='/DetalhesProjetos' element={<DetalhesProjetos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
