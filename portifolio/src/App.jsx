import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Projetos from './pages/projetos'
import {ProjetosDados} from './dados/ProjetosDados'
import DetalhesProjetos from './pages/DetalhesProjeto'
import Contato from './pages/Contato'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projeto/:id" element={<ProjetosDados />} />
        <Route path='/DetalhesProjetos' element={<DetalhesProjetos/>}/>
        <Route path='/Contato' element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
