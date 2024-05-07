
export default function QuantityCart({ qtd, index, updateQuantity
}) {

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
        <div className='d-flex align-items-stretch'>

            <button type='button'
                className='bg-primary rounded-start p-3 d-flex align-items-center justify-content-center' onClick={decrement}>
                <span className='btn-qtd mgc_minimize_line fs-4'></span>
            </button>

            <div style={{ minWidth: '65px' }} className='fs-3 p-2 bg-white d-flex align-items-center justify-content-center'>
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
    )
}
