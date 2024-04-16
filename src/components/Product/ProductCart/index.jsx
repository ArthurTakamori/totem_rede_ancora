import Amortecedor from '../../../assets/img/amortecedorProductCart.png'
import Remover from '../../../assets/img/Botão remover.png'

export default function Cart(){


    
    return (
        <>
            <div className='d-flex justify-content-center border border-dark' style={{padding:"0px", width:"30rem"}}>
                <div className="d-flex align-items-center">
                    <div className='d-flex justify-content-center' style={{padding:" 0px", margin:"0px", width:"10.5rem"}}>
                        <img src={Amortecedor} alt="Imagem de Amortecedor" className='p-4' style={{height:"15rem"}}/>
                    </div>
                    <div style={{width:"100%", paddingRight:"0px"}}>
                        <div className='d-flex align-content-between p-3' style={{height:"2.5rem", padding:"0px"}}> 
                            <h1 className='' style={{height:"2rem", fontSize:"1.5rem"}} >AMORTECEDOR</h1>
                            <img src={Remover} alt="Lixeira para Remover" className='ms-auto' style={{height:"2.5rem", paddingRight:"1.5rem"}}/>
                        </div>    
                            
                        <div className='d-flex align-content-between p-3'>
                        <p className=' p-0' style={{fontSize:"1rem"}}>MODELO ORIGINAL</p>
                        </div>
                            
                        <div className='d-flex p-3 align-content-between flex-wrap' style={{height: "8rem", padding:"0px"}}>
                            <h2 className='pt-5 p-1 ' style={{fontSize:"1.5rem"}}>R$244,50</h2>
                            <div className='d-flex ms-auto align-items-end' style={{width:"10rem"}}>
                                <div className='d-flex justify-content-center px-2 bg-primary rounded-start 'style={{width:"2.4rem", height:"2.3rem", fontSize:"1.5rem"}}>
                                    <p id='itemSubtraction' style={{fontSize:"1.6rem", color:"white", fontWeight:"100"}}>-</p>
                                </div>
                                <div className='d-flex justify-content-center px-2 bg-white'style={{width:"3.5rem", height:"2.3rem"}}>
                                    <p id='itemQuantity' style={{fontSize:"1.6rem", fontWeight:"100"}}>01</p>
                                </div>
                                <div className='d-flex justify-content-center px-2 bg-primary rounded-end ' style={{width:"2.4rem", height:"2.3rem", fontSize:"1.5rem"}}>
                                    <p id='itemSum' style={{fontSize:"1.6rem", color:"white", fontWeight:"100"}}>+</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}