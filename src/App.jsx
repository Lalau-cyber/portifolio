import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Projetos from './pages/projetos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projeto/:id" element={<DetalheProjeto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
