import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import DetalhesProjetos from './pages/DetalhesProjeto'
import Contato from './pages/Contato'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path='/DetalhesProjetos' element={<DetalhesProjetos/>}/>
        <Route path='/Contato' element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
