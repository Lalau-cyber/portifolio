import {useState} from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default  function Contato(){

    //pegar dados do formulario
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    //feedbacks
    const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [enviado, setEnviado] = useState(false)

   async function handleSubmit(e)  {
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
        if(!email.includes('@') || !email.includes('.')){
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
        setEnviado(true)
        
    
          try {
            await emailjs.send(
              'service_c2g6ugi',   
              'template_325zoku',  
        {
          from_name: nome,
          from_email: email,
          subject: assunto,
          message: mensagem,
        },
        'VqLjp4AXAXi32BpKV'   
      )

        setSucesso(`Obrigada ${nome}! Sua mensagm sobre "${assunto}" foi enviada com sucesso`)
        setNome('');
        setEmail('');
        setAssunto('');
        setMensagem('');
    }
    catch(error){
      setErro('Erro ao enviar mensagem. Tente novamente')
    }finally{
      setEnviado(false)
    }
   }
   return (
    <section style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 className='Hcontato'>Contato & Oportunidades</h2>
      <p className='contato-descri'>Entre em contato para propostas profissionais, parcerias ou networking comercial.</p>

      <div className="container-contato" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '20px' }}>
        
        {/* === CANAIS DIRETOS (Links + Ícones) === */}
        <div className="canais-diretos" style={{ flex: '1', minWidth: '250px' }}>
          <h3>Canais Diretos</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            
            <li className='div-email' style={{ marginBottom: '15px' }}>
              <a href="mailto:laurinha.ss1305@gmail.com" className="link-contato" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                <FaEnvelope size={24} className='faenvelope' />
                <span className='meu-email'>laurinha.ss1305@gmail.com</span>
              </a>
            </li>

            <li className='div-linkedin' style={{ marginBottom: '15px' }}>
              <a href="https://www.linkedin.com/in/laura-cristina-silva-souza-880811414/?trk=public-profile-join-page" target="_blank" rel="noreferrer" className="link-contato" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                <FaLinkedin size={24} className='falinkedin' />
                <span className='meu-linkedin'>LinkedIn Profissional</span>
              </a>
            </li>

            <li className='div-git' style={{ marginBottom: '15px' }}>
              <a href="https://github.com/Lalau-cyber" target="_blank" rel="noreferrer" className="link-contato" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                <FaGithub size={24} className='fagithb'/>
                <span className='meu-git'>GitHub Técnico</span>
              </a>
            </li>
            <div className='div-disponivel'>
              <p className='dispo_p'>Disponivel para novas oportunidades</p>
            </div>
          </ul>
        </div>

        {/* === FORMULÁRIO DE CONTATO INTEGRADO === */}
        <div className="formulario-contato" style={{ flex: '1.5', minWidth: '300px' }}>
          <h3>Envie uma Mensagem</h3>

          {/* Feedbacks Reativos na tela */}
          {erro && <p style={{ color: 'red', fontWeight: 'bold' }}>⚠️ {erro}</p>}
          {sucesso && <p style={{ color: 'green', fontWeight: 'bold' }}>✅ {sucesso}</p>}

          <form onSubmit={handleSubmit}  >
            
            <div className='div-nome-form'>
              <label className='nome'>Nome:</label>
              <input 
                type="text" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome ou empresa"
                className='input'
              />
            </div>

            <div className='div-email-form'>
              <label className='email'>E-mail:</label>
              <input className='input'
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu-email@exemplo.com"
                
              />
            </div>

            <div className='div-assunto'>
              <label className='assunto'>Assunto:</label>
              <input className='input-assunto'
                type="text" 
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                placeholder="Ex: Oportunidade de Emprego / Parceria"
              
              />
            </div>

            <div className='div-mensagem'>
              <label className='mensagem' >Mensagem:</label>
              <textarea className='input-mensagem'
                rows="4"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Escreva os detalhes aqui..."
               
              />
            </div>

            <button className='btn-enviar'
              type="submit" 
              onClick={handleSubmit}
              disabled={enviado}
            >
              {enviado ? 'Enviando...' : 'Enviar Formulário'}
              <FaPaperPlane className='FaPaperPlane'/>
            </button>

          </form>
        </div>

      </div>
    </section>
   )
}
