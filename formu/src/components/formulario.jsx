import { useState } from 'react'

function Formulario() {
  const [nome, setNome] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit() {
    if (nome.trim() === '') {
      setMensagem('por favor, informe seu nome')
      return
    }
    setMensagem(`Olá, ${nome}, seja bem vindo`)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="digite o seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Enviar
      </button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  )
}

export default Formulario