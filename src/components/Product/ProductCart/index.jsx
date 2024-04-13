import Amortecedor from '../../../assets/img/amortecedorProductCart.png'
import Remover from '../../../assets/img/Botão remover.png'

import { Link } from 'react-router-dom';

export default function Cart(){


    
    return (
        <>
            <div className='container-md border border-dark  '>
                <div className="d-flex row justify-content-center">
                    <div className='d-flex col-md-4 justify-content-center' style={{padding:"0px", margin:"0px"}}>
                        <img src={Amortecedor} alt="Imagem de Amortecedor" className='justify-content-center p-3' style={{height:"15rem"}}/>
                    </div>
                    <div className='col-md-8' style={{padding:"0px"}}>
                        <div className='d-flex col-md-12 align-content-between  p-3 row' style={{height:"8rem"}}> 
                            <h1 className='fs-3 p-0'>AMORTECEDOR</h1>
                            <p className='fs-5 p-0 '>MODELO ORIGINAL</p>
                            <div className='d-flex justify-content-end'>
                                <img src={Remover} alt="Imagem de Amortecedor" className='align-items-right' style={{height:"3rem"}}/>
                            </div>
                        </div>    
                        <div className='d-flex col-md-12 p-3 align-content-between flex-wrap row' style={{height: "8rem"}}>
                            <h2 className='pt-5'>R$244,50</h2>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}