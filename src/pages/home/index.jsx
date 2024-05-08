import Logo from "@/assets/img/logo_v1.png";
import HeaderProject from "@/components/Header/Project";
import FooterProject from "@/components/Footer/Project";

export default function Home() {

    return (
      <>
        <div className="overflow-y-auto d-flex flex-column" style={{
            minHeight: '100vh'
        }}>

            <HeaderProject />

            <div className="mt-4 flex-grow-1 px-5 d-flex justify-content-center">

                <div className="border rounded-1 bg-white p-5">

                    <div className="row align-items-center"> 

                        <div className="col-12 col-lg-6 mb-5 m-md-0">

                            <div className="h-100 d-flex flex-column justify-content-between">

                                <img src={Logo} alt="Logo Rede Ancora" width={'80px'}/>

                                <div style={{
                                    marginTop: '3rem'
                                }}>

                                    <h2 className="mb-4 fw-bold fs-3">
                                        A jornada do cliente
                                    </h2>

                                    <p className="lh-sm text-primary pe-5"
                                        style={{
                                            textAlign: 'justify',
                                            fontSize: '.976rem'
                                        }}>

                                        Apresentamos uma solução para a Rede Ancora, visando simplificar o processo de consulta e compra de produtos para veículos pelos clientes das lojas. A proposta busca facilitar a experiência do cliente, permitindo uma seleção mais eficiente e personalizada de produtos. Além disso, a plataforma propõe a captura de informações dos clientes para comunicação futura, oferta de produtos e aumento das vendas. Essa abordagem promete não apenas melhorar a experiência do cliente, mas também impulsionar as vendas e o engajamento com a marca.
                                    
                                    </p>
                                </div>

                            </div>

                            
                        </div>

                        <div className="col-12 col-lg-6 h-100">

                            <div className="ratio ratio-16x9">
                                <iframe className="embed-responsive-item rounded-1" src="https://www.youtube.com/embed/pJPZaYjcLgo?si=fkY24fOedRFjRtYa" title="Pitch - Rede Ancora" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>

                            <p className="d-block text-primary fw-medium mt-4">
                                Link: 
                                <a href="https://youtu.be/pJPZaYjcLgo?si=0UC7hx9QD4y_oybU" 
                                            target="_blank" 
                                            className="link-opacity-100-hover ml-4">
                                    Pitch Rede Ancora
                                </a>
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <FooterProject />
            
        </div>
      </>
    );
  }
  