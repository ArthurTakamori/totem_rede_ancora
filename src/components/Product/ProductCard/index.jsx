import Amortecedor from '../../../assets/img/product_cart_amortecedor.png'
import "./styles.scss";

export default function ProductCard({
    product, description, price, qtd, index, updateQuantity, deleteProduct
}) {

    // const [qtd, updateQuantity] = useState('01')

    const increment = () => {
        var newValue = parseInt(qtd) + 1;
        updateQuantity(maskQtd(newValue), index)
    }

    const decrement = () => {
        var newValue = parseInt(qtd) - 1;
        newValue = newValue < 1 ? 1 : newValue

        updateQuantity(maskQtd(newValue), index)
    }

    function maskQtd(qtd) {
        return qtd < 10 ? `0${qtd}` : qtd;
    }

    return (
        <>

            <div className='d-flex justify-content-center mb-4 rounded-1 overflow-hidden bg-white'>

                <div style={{width: '250px'}} className='d-flex align-items-center justify-content-center p-4 bg-slate-50'>
                    <img src={Amortecedor} alt="Imagem de Amortecedor" width={'30px'}/>
                </div>
                
                <div className='w-100 d-flex flex-column justify-content-between'>

                    <div className='d-flex align-items-center justify-content-between p-4 w-100'>

                        <div className='text-uppercase'>
                            <h2>{product}</h2>
                            <p>{description}</p>
                        </div>

                        <button type='button' className='btn-delete p-3 bg-slate-50 rounded-circle d-flex align-items-center justify-content-center'
                                onClick={() => deleteProduct(index)}>
                            <span className='mgc_delete_2_line fs-3'></span>
                        </button>

                    </div>

                    <div className='d-flex align-items-center justify-content-between p-4 w-100'>
                        <p className='fs-3 fw-medium'>R${price}</p>

                        <div className='d-flex'>

                            <button type='button'
                            className='bg-primary rounded-start p-3 d-flex align-items-center justify-content-center' onClick={decrement}>
                                <span className='btn-qtd mgc_minimize_line fs-4'></span>
                            </button>
                            
                            <div style={{minWidth: '65px'}} className='fs-3 p-2 bg-white d-flex align-items-center justify-content-center'>
                                <span>
                                    {qtd}
                                </span>
                            </div>

                            <button type='button'
                                    className='bg-primary rounded-end p-3 d-flex align-items-center justify-content-center'
                                    onClick={increment}>
                                <span className='btn-qtd mgc_add_line fs-4'></span>    
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}