import {useState} from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contato(){

    //pegar dados do formulario
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    //feedbacks
    const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

    function handleSubmit(e)  {
        e.preventDefault(); // Impede o recarregamento da página
        setErro('');
        setSucesso('');

        if(nome.trim() ==''){
            setErro("Por favor, informe um nome")
            return;
        }

        if(email.trim() ==''){
            setErro("Por favor, informe um email")
            return;
        }
        if(email.includes('@') || !email.includes('.')){
            setErro("Por favor, informe um email valido")
            return;
        }

        if(assunto.trim() == ''){
            setErro("Por favor, insira o assunto da mensagem")
            return;
        }
        if(mensagem.trim() ==''){
            setErro("A mensagem não pode ser vazia")
            return;
        }
        setSucesso(`Obrigada ${nome}! Sua mensagm sobre "${assunto}" foi enviada com sucesso`)

        setNome('');
        setEmail('');
        setAssunto('');
        setMensagem('');
    }

   return (
    <section style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Contato & Oportunidades</h2>
      <p>Entre em contato para propostas profissionais, parcerias ou networking comercial.</p>

      <div className="container-contato" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '20px' }}>
        
        {/* === CANAIS DIRETOS (Links + Ícones) === */}
        <div className="canais-diretos" style={{ flex: '1', minWidth: '250px' }}>
          <h3>Canais Diretos</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            
            <li style={{ marginBottom: '15px' }}>
              <a href="mailto:laurinha.ss1305@gmail.com" className="link-contato" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                <FaEnvelope size={24} style={{ color: '#db4437' }} />
                <span>laurinha.ss1305@gmail.com</span>
              </a>
            </li>

            <li style={{ marginBottom: '15px' }}>
              <a href="https://www.linkedin.com/in/laura-cristina-silva-souza-880811414/?trk=public-profile-join-page" target="_blank" rel="noreferrer" className="link-contato" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                <FaLinkedin size={24} style={{ color: '#0a66c2' }} />
                <span>LinkedIn Profissional</span>
              </a>
            </li>

            <li style={{ marginBottom: '15px' }}>
              <a href="https://github.com/Lalau-cyber" target="_blank" rel="noreferrer" className="link-contato" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                <FaGithub size={24} style={{ color: '#24292e' }} />
                <span>GitHub Técnico</span>
              </a>
            </li>

          </ul>
        </div>

        {/* === FORMULÁRIO DE CONTATO INTEGRADO === */}
        <div className="formulario-contato" style={{ flex: '1.5', minWidth: '300px' }}>
          <h3>Envie uma Mensagem</h3>

          {/* Feedbacks Reativos na tela */}
          {erro && <p style={{ color: 'red', fontWeight: 'bold' }}>⚠️ {erro}</p>}
          {sucesso && <p style={{ color: 'green', fontWeight: 'bold' }}>✅ {sucesso}</p>}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>Nome:</label>
              <input 
                type="text" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome ou empresa"
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>E-mail:</label>
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu-email@exemplo.com"
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>Assunto:</label>
              <input 
                type="text" 
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                placeholder="Ex: Oportunidade de Emprego / Parceria"
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>Mensagem:</label>
              <textarea 
                rows="4"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Escreva os detalhes aqui..."
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
              />
            </div>

            <button 
              type="submit" 
              onClick={handleSubmit}
              style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Enviar Formulário
            </button>

          </form>
        </div>

      </div>
    </section>
   )
}