import { Link } from 'react-router-dom';
import {ProjetosDados} from '../dados/ProjetosDados'

export default function DetalhesProjetos(){
    return(
        <div>
            <section style={{ padding: '20px' }}>
      <h2>Meus Projetos</h2>
      
      <div className="container-cards" >
        
        {ProjetosDados.map((projeto) => (
          <div key={projeto.id} className="card-projeto" >

            <p>{projeto.titulo}</p>
            <br />
            <p>{projeto.objetivo}</p>
            <br />
            <p>{projeto.funcionalidades}</p>
            <br />
            <p>{projeto.aprendizado}</p>
            <br />
            <p>{projeto.melhorias}</p>
            <br />
           <p>{projeto.desafios}</p>
             <br />
             <p className="descricao-projeto">{projeto.descricaoCompleta}</p>
         
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
               
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  
    <Link to="/" >
        Voltar para o Inicio
      </Link>
        </div>
    )
}