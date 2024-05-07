import Amortecedor from '../../../assets/img/product_cart_amortecedor.png'
import QuantityCart from "../../QuantityCart";
import "./styles.scss";

export default function ProductCard({
    product, description, price, qtd, index, updateQuantity, deleteProduct
}) {

    // const [qtd, updateQuantity] = useState('01')

    return (
        <>

            <div className='d-flex justify-content-center mb-4 rounded-1 overflow-hidden bg-white w-100'>

                <div style={{width: '350px'}} className='d-flex align-items-center justify-content-center p-4 bg-slate-50'>
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
                        
                        <p className='fs-3 fw-medium'>
                            R${price}
                        </p>

                        <QuantityCart
                            qtd={qtd}
                            index={index}
                            updateQuantity={updateQuantity}
                        />

                    </div>
                </div>
                
            </div>
        </>
    )
}