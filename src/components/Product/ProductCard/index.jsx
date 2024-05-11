import LogoRedeAncora from "@/assets/img/logo_v1.png";
import QuantityCart from "@/components/QuantityCart";
import { formatCurrency } from "@/utils/formatCurrency";
import "./styles.scss";

export default function ProductCard({
    product, index, updateQuantity, deleteProduct
}) {

    const { imagemReal, nomeProduto, marca, qtd, discountedPrice, codigoReferencia } = product;

    return (
        <>

            <div className='row'>

                <div className="col-12 col-md-4 p-0">

                    <div className='d-flex align-items-center justify-content-center bg-slate-50 p-5 h-100 w-100'>
                        <img
                            src={imagemReal ? imagemReal : LogoRedeAncora}
                            className="card-img-top w-50"
                            alt={nomeProduto}
                        />
                    </div>
                </div>

                <div className="col-12 col-md-8 bg-white p-0">

                    <div className='w-100 h-100 d-flex flex-column justify-content-between gap-5 p-5'>

                        <div className='d-flex align-items-center justify-content-between w-100'>

                            <div className='text-uppercase'>
                                <h2>{nomeProduto} ({codigoReferencia})</h2>
                                <p className="fs-3">{marca}</p>
                            </div>

                            <button type='button' className='btn-delete p-4 bg-slate-50 rounded-circle d-flex align-items-center justify-content-center'
                                onClick={() => deleteProduct(index)}>
                                <span className='mgc_delete_2_line fs-1'></span>
                            </button>

                        </div>

                        <div className='d-flex align-items-center justify-content-between w-100'>

                            <p className='fs-1 fw-medium'>
                                {formatCurrency(discountedPrice)}
                            </p>

                            <QuantityCart
                                qtd={qtd}
                                index={index}
                                updateQuantity={updateQuantity}
                            />

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}