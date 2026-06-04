import { Link } from 'react-router-dom';
import {DadosCurtos} from '../dados/ProjetoDaCurtos';


export default function Projetos(){
  
    return(
        <div>
            <section style={{ padding: '20px' }}>
                <h2>Meus Projetos</h2>
      
          <div className="container-cards" >
            {DadosCurtos.map((projeto) => (
              <div key={projeto.id} className="card-projeto" >
          
              
            {/* Conteúdo do Card */}
            <div  className="conteudo-card" >
              {/* Nome do Projeto */}
               <h3 className="titulo-projeto">{projeto.titulo}</h3>
              
              {/* Descrição Curta */}
                <p className="descricao-projeto">{projeto.descricaoCurta}</p>
              
              {/* Badges de Tecnologias */}
              <div className='tech-usadas'> 
                 {projeto.badgeTech && projeto.badgeTech.map((tech, index) => (
                   <span key={index} >
                      {tech}
                    </span>
                ))}
              </div>
                <img 
                  src={projeto.imagem} 
                  alt={`imagem${projeto.titulo}`}
                  className="imagem-projeto" 
                />
              </div>
              </div>
            ))}
            </div>
                  </section>
                   < Link to="/" >  Voltar para o Inicio</Link>
                   <br />
                   <Link to ='/DetalhesProjetos'> Ver Detalhes</Link>
           </div>
  );}