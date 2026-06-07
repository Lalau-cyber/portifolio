import contador from '../assets/contador.png';
import filmes from '../assets/filmes.png';
import formulario from '../assets/formulario.png';
import listaTarefas from '../assets/listaTarefas.png'

export const ProjetosDados = [
  {
        id: 1,
        titulo: "Contador Limitado",
        imagem:contador,
        objetivo:"Objetivo:  Criar um contador que mostra as praticas de controle de estado",       
        descricaoCompleta:"Descrição: Este é um contador com certos limites de 0 a 10, ele incrementa e decrementa e tambem pode reiniciar e mostra o histórico de todos os cliques realizados",
        funcionalidades: [
            "Funcionalidades: Incrementa números até 10",
            "Decrementa números ate 0",
            "Histórico de cliques",
            "Reinicia contador"
        ],
        desafios:"Desafios: Foi adicionar um estado que mostre e esconda o histórico e visializar as funções necessarias",
        aprendizado:"Aprendizado: uso de Estados de controle e funções dentro da outra",
        melhorias:[
            "Melhorias: CSS mais moderno",
            "Aumetar o alcance de números",
            "Histórico dentro de um menu mais estruturado"
        ],
        linkGitHub:"https://github.com/Lalau-cyber/portifolio",
        linkDeploy:"https://portifolio-rxho.vercel.app/"
    },
     {id: 2,
        titulo: "Lista de Tarefas",
        objetivo:"Objetivo: Listagem de tarefas e exclusão delas",
        descricaoCompleta:"Descrição: Este é um software que permite você inceriri tarefas e removelas",
        funcionalidades:[
            "Funcionalidades: adicionar tarefas",
            "remover tarefas",
        ],
        desafios:"Desafios: Não a nenhum especifico que fosse muito dificil mas quando usar o .map ou onde colocar o useState foram um pouco mais trabalhosos para mim",
       aprendizado:"Aprendixado: Onde e como devo usar o Estado da variavel, e usar ,map",
       melhorias:[
        "Melhorias: Adicionar botao de selecionr prioridades",
        "Campo de tarefas ja feitas",
        "CSS mais bonito",
       ],
        imagem: listaTarefas,
        linkDeploy: 'https://portifolio-9fbt.vercel.app/',
       linkGitHub:'https://github.com/Lalau-cyber/portifolio'
     },
     {
        id:3,
        titulo: "Formulario",
        objetivo: "Objetivo: E uma aplicação simples que de mostrar o nome digitado",
        descricaoCompleta: "Descrição: a pessoa pode digitar seu nome e ira aparecer na tela um ola, (nome)",
        funcionalidades:[
            "Funcionalidades: campo para incerir seu nome",
            "apresentação simple do nom digitado"
        ],
        aprendizado:"Aprendizao: Mesmo sendo um software simple pude aprender que é bom fazer aplicaçãoes reutilizaveis como essa, e também a mostrat o nome digitado sem alert",
        melhorias:[ 
            
            "Melhorias: Uma memoria para quardar os nome",
            "Botão de excluir ou eidtar",
            "Futuramente ser utilizado em sites de login, etc",
        ], 
        imagem: formulario,
        linkGitHub:"https://github.com/Lalau-cyber/React-professores",
        linkDeploy:"https://react-professores-eerd.vercel.app/",
     }

]