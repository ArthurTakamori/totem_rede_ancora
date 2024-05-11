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

            <div className="mt-4 flex-grow-1 px-5 d-flex justify-content-center align-items-center">
                

                <div className="container">

                    <div className="border rounded-1 bg-white p-5">

                        <div className="row align-items-center"> 

                            <div className="col-12 col-lg-6 mb-5 m-md-0">

                                <div className="h-100 d-flex flex-column justify-content-between">

                                    <img src={Logo} alt="Logo Rede Ancora" width={'80px'}/>

                                    <div style={{
                                        marginTop: '2rem'
                                    }}>

                                        <h2 className="mb-4 fw-bold fs-3">
                                            A jornada do cliente
                                        </h2>

                                        <p className="lh-base text-primary pb-5 pe-lg-5 pb-lg-0"
                                            style={{
                                                textAlign: 'justify',
                                                fontSize: '.976rem'
                                            }}>

                                            {/* Apresentamos uma solução para a Rede Ancora, visando simplificar o processo de consulta e compra de produtos para veículos pelos clientes das lojas. A proposta busca facilitar a experiência do cliente, permitindo uma seleção mais eficiente e personalizada de produtos. Além disso, a plataforma propõe a captura de informações dos clientes para comunicação futura, oferta de produtos e aumento das vendas. Essa abordagem promete não apenas melhorar a experiência do cliente, mas também impulsionar as vendas e o engajamento com a marca. */}
                                            Apresentamos uma solução inovadora para a Rede Ancora, que revoluciona o processo de consulta e compra de produtos para veículos, proporcionando uma experiência excepcional aos clientes. Com nossa plataforma intuitiva, os clientes têm acesso a uma ampla e personalizada seleção de produtos, tornando a busca pelo item ideal mais eficiente do que nunca. Além disso, nossa tecnologia captura informações valiosas dos clientes para comunicações futuras personalizadas e ofertas relevantes, prometendo impulsionar vendas e engajamento com a marca. Prepare-se para uma jornada de sucesso onde cada interação com sua marca é memorável e gratificante.
                                            
                                        
                                        </p>
                                    </div>

                                </div>

                                
                            </div>

                            <div className="col-12 col-lg-6 h-100">

                                <div className="ratio ratio-16x9">
                                    <iframe className="embed-responsive-item rounded-1" src="https://www.youtube.com/embed/pJPZaYjcLgo?si=fkY24fOedRFjRtYa" title="Pitch - Rede Ancora" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>

                                <span className="d-block mt-4"></span> 
                                    <a href="https://youtu.be/pJPZaYjcLgo?si=0UC7hx9QD4y_oybU" 
                                                target="_blank" 
                                                className="link-opacity-100-hover ml-4 text-primary fw-medium"> 
                                        Link: Pitch Rede Ancora
                                    </a>

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
