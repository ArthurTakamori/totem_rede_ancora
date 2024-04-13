import Amortecedor from '../../../assets/img/amortecedorProductCart.png'
import Remover from '../../../assets/img/Botão remover.png'

import { Link } from 'react-router-dom';

export default function Cart(){


    
    return (
        <>
            <div className='d-flex align-items-center justify-content-between m-4 border border-dark '>
                <div className="d-flex align-items-left">
                    <img src={Amortecedor} alt="Imagem de Amortecedor" className='p-5 '/>
                </div>
                <div className='d-flex container align-items-center justify-content-between m-4'>
                    <div className="border border-dark">
                        <div className=''>
                            <h1>AMORTECEDOR</h1>
                            <p>MODELO ORIGINAL</p>
                            <img src={Remover} alt="Imagem de Amortecedor" className='p-0 '/>
                        </div>
                    
                    <div className="border border-dark">    
                        <div className=''>
                            <h2>R$244,50</h2>
                        </div>
                    </div>    
                </div>
            </div>

            </div>
        </>
    )
}