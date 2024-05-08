import Logo from "@/assets/img/logo_v1.png";
import HeaderProject from "@/components/Header/Project";
import FooterProject from "@/components/Footer/Project";
import BootstrapIcon from "@/components/Icons/Bootstrap";
import SassIcon from "@/components/Icons/Sass";
import JavascriptIcon from "@/components/Icons/Javascript";
import CssIcon from "@/components/Icons/Css";
import ApiIcon from "@/components/Icons/Api";
import ReactIcon from "@/components/Icons/React";

export default function Project() {

  const tecnologies = [
    {
      title: 'CSS',
      aplication: 'Utilizamos classes CSS para estilizar elementos HTML, garantindo uma aparência visual consistente e atraente em toda a aplicação. As classes são aplicadas diretamente aos elementos, proporcionando flexibilidade e modularidade na estilização.',
      icon: <CssIcon />
    },
    {
      title: 'Bootstrap',
      aplication: 'Aproveitamos os recursos oferecidos pelo framework Bootstrap para criar layouts responsivos e componentes pré-estilizados. Isso nos permitiu economizar tempo no desenvolvimento, além de garantir uma base sólida para a interface do usuário.',
      icon: <BootstrapIcon />
    },
    {
      title: 'SASS',
      aplication: 'Utilizamos o SASS para personalizar o Bootstrap de acordo com as necessidades específicas do projeto. Isso nos permitiu estender e modificar as classes padrão do Bootstrap de forma eficiente, mantendo a organização do código e facilitando futuras atualizações.',
      icon: <SassIcon />
    },
    {
      title: 'Javascript',
      aplication: 'Aprofundamos nosso conhecimento em JavaScript ao manipular arrays e objetos para armazenar e manipular dados dinâmicos. Além disso, utilizamos funções para modularizar o código e criar abstrações reutilizáveis. Também exploramos o uso de constantes para definir valores fixos e a manipulação do DOM para interagir dinamicamente com a interface do usuário.',
      icon: <JavascriptIcon />
    },
    {
      title: 'React',
      aplication: 'Utilizamos o React para criar componentes reutilizáveis e modulares, facilitando a construção e manutenção da aplicação. Além disso, implementamos estilos CSS utilizando a abordagem de estilização em linha e com classes, garantindo uma estilização consistente dos componentes. Utilizamos o roteamento do React Router para navegar entre as diferentes páginas da aplicação de forma eficiente. Também aplicamos a validação de formulários utilizando a biblioteca Yup, garantindo que os dados inseridos pelos usuários atendam aos critérios definidos antes de serem enviados para o servidor.',
      icon: <ReactIcon />
    },
    {
      title: 'Fetch API',
      aplication: 'Utilizamos a API Fetch para realizar requisições HTTP e consumir dados de APIs externas. Isso nos permitiu integrar dados dinâmicos à nossa aplicação, como exibir informações atualizadas em tempo real e proporcionar uma experiência mais interativa aos usuários.',
      icon: <ApiIcon />
    },

  ]

  const members = [
    {
      name: 'Arthur Guilherme M. Takamori',
      rm: 'RM553809',
      activies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit animi repellat! Eos provident et itaque'
    },
    {
      name: 'Mariana Thainara Tojal',
      rm: 'RM553014',
      activies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit animi repellat! Eos provident et itaqu'
    },
    {
      name: 'Wesley da Costa Matos',
      rm: 'RM553488',
      activies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit animi repellat! Eos provident et itaque'
    }
  ]

  return (
    <>
      <div className="overflow-y-auto d-flex flex-column" style={{
          minHeight: '100vh'
      }}>

          <HeaderProject />

          <div className="mt-4 flex-grow-1 px-5 d-flex flex-column align-items-center justify-content-center"> 

              <div className="d-flex align-items-center text-center justify-content-center gap-3 mb-4">

                <img src={Logo} alt="Logo Rede Ancora" width={'60px'}/>

                <h1 className="fw-semibold fs-3">
                  Sobre o projeto
                </h1>

              </div>

              <div className="container">

                <div className="row gap-5">

                  <div className="col-12">

                    <div className="h-100">

                      <h2 className="mb-4 fw-bold fs-5">
                        Integrantes
                      </h2>

                      <div>
                        <ul className="row g-5 align-items-stretch">
                          {members.map((member, index) => (
                            <li className="col-sm-12 col-lg-4" key={index}>
                              <Member member={member}/>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="col-12">
                    <div className="h-100">
                      <h2 className="mb-4 fw-bold fs-5">
                        Tecnologias utilizadas
                      </h2>

                      <div>
                        <ul className="row g-5 align-items-stretch">
                          {tecnologies.map((item, index) => (
                            <li className="col-sm-12 col-lg-4" key={index}>
                              <Tecnology tecnology={item}/>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                </div>

              </div>

          </div>

          <FooterProject />
          
      </div>
    </>
  );
}

const Member = ({member}) => {
  const firstLetterName = member.name.charAt(0)

  return (
    <>
      <div className="project-card h-100 d-flex gap-4 flex-column align-items-center text-center border rounded-1 p-5 bg-white">
        <Avatar firstLetterName={firstLetterName}/>

        <div className="d-flex flex-column">
          <span className="fw-medium text-primary">{member.name}</span>
          <span className="text-uppercase opacity-50 fw-medium mb-4" style={{
            fontSize: '.775rem'
          }}>
            {member.rm}
          </span>

          <p>
            {member.activies}
          </p>
        </div>

      </div>
    </>
  )
}

const Avatar = ({ firstLetterName }) => {

  return (

    <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center p-4" style={{
      width: '1.5rem',
      height: '1.5rem',
    }}>
      
      <span className="text-white fw-bold">
        {firstLetterName}
      </span>
    </div>
    
  );
};
  
const Tecnology = ({tecnology}) => {
  return (
    <>
      <div className="project-card h-100 d-flex gap-4 flex-column align-items-center text-center 
                      border rounded-1 p-5 bg-white">
        
        {tecnology.icon}

        <div className="d-flex flex-column">
          <span className="text-uppercase opacity-50 fw-medium mb-4" style={{
            fontSize: '.775rem'
          }}>
            {tecnology.title}
          </span>

          <p className="lh-md" style={{
            fontSize: '.875rem'
          }}>
            {tecnology.aplication}
          </p>
        </div>

      </div>
    </>
  )
}