import { Link } from 'react-router-dom';
import {ProjetosDados} from '../dados/ProjetosDados'
import Contato from './Contato'

export default function DetalhesProjetos(){
    return(
        <div>
            <section style={{ padding: '20px' }}>
      <h2>Meus Projetos</h2>
      
      <div className="container-cards" >
        
        {ProjetosDados.map((projeto) => (
          <div key={projeto.id} className="card-projeto" >

            <p className='titulo-detalhe'>{projeto.titulo}</p>
          
            <p className='obje-detalhe'>{projeto.objetivo}</p>
         
            <p className='func-detalhe'> {projeto.funcionalidades}</p>
            
            <p className='aprendi-detalhe'>{projeto.aprendizado}</p>
          
            <p className='melhoria-detalhe'>{projeto.melhorias}</p>
            
           <p className='desafio-detalhe'>{projeto.desafios}</p>
             <br />
             <p className="descricao-detalhe">{projeto.descricaoCompleta}</p>
         
           <div  className="imagem-projeto" >
            <img 
              src={projeto.imagem} 
              alt={`imagem${projeto.projeto}`}
             className="imagem-projeto" 
            />
              
              <div className="div-deploy">
                <a 
                href={projeto.linkDeploy}
                 target="_blanck"
                 rel='noreferrer'
                 className='deploy'>
                  Ver Projeto Online
                 </a>
               
               <div className='div-github'>
                <a href={projeto.linkGitHub}
                target='_blanck'
                real='nonereferrer'>Ver Github</a>
               </div>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  
    <Link className='link' to="/" >
        Voltar para o Inicio
      </Link>
      <Link className='link' to ="/Contato"> Ver árear de contato</Link>
        </div>
    )
}