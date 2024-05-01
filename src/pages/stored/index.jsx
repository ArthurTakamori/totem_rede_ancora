import StoredCartImg from '../../assets/img/stored_cart.png';

export default function Stored() {

    const turn = Math.floor(Math.random() * 101);

    return (
        <>
            <div className="container-main">

                <main className='d-flex flex-column align-items-center justify-content-center'>

                    <div class="d-flex flex-column align-items-center justify-content-center">

                        <img src={StoredCartImg} alt='Compra finalizada ícone' width={'45%'}/>
                    
                
                        <div className='mt-5 flex-grow-1 d-flex flex-column align-items-center text-center'>

                            <div className='d-flex align-items-center justify-content-center w-50 mb-5'>
                                <h1 className='fw-bold text-center' style={{
                                    fontSize: '6vw',
                                }}>
                                    Pedido finalizado!
                                </h1>

                            </div>

                            <div className='d-flex flex-column align-items-center justify-content-center mb-5' style={{
                                maxWidth: '800px'
                            }}>

                                <p style={{
                                    fontSize: '3.5vw'
                                }}>
                                    Por favor, dirija-se ao caixa para retirar sua compra.
                                </p>
                            </div>
                            
                            <div className='mb-5'>
                                <span className='bg-primary py-2 px-4 fw-bold text-white text-uppercase' style={{
                                    fontSize: '3.5vw'
                                }}>Senha: {turn}</span>
                            </div>

                            <small style={{
                                    fontSize: '2.5vw'
                                }}>
                                Até a próxima.
                            </small>
                        </div>
                        
                    </div>


                </main>
            </div>
        </>
    );
}
