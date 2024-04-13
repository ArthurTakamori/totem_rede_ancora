import Amortecedor from '../../../assets/img/amortecedorProductCart.png'
import Remover from '../../../assets/img/Botão remover.png'

import { Link } from 'react-router-dom';

export default function Cart(){


    
    return (
        <>
            <div className='container border border-dark '>
                <div className="d-flex row justify-content-center">
                    <div className='d-flex col-md-4 justify-content-center'>
                        <img src={Amortecedor} alt="Imagem de Amortecedor" className='justify-content-center'/>
                    </div>
                    <div className='col-md-8'>
                        <div className='col-md-12'>
                            <h1>AMORTECEDOR</h1>
                            <p>MODELO ORIGINAL</p>
                            <img src={Remover} alt="Imagem de Amortecedor" className='d-flex align-items-right'/>
                        </div>
                        <div className=' col-md-12 '>
                            <h2 className='pt-5'>R$244,50</h2>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}