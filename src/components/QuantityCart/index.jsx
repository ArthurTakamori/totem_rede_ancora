
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
        <div class="btn-group" role="group" aria-label="Basic outlined example">

            <button type='button'
                className='btn btn-primary rounded-start-4' onClick={decrement}
                style={{
                    width: '8vw'
                }}>
                <span className='btn-qtd mgc_minimize_line fs-3'></span>
            </button>

            <div className='flex-shrink-1 fs-1 p-2 w-50 bg-white d-flex align-items-center justify-content-center'>
                <span>
                    {qtd}
                </span>
            </div>

            <button type='button'
                className='btn btn-primary rounded-end-4'
                onClick={increment}
                style={{
                    width: '8vw'
                }}>
                <span className='btn-qtd mgc_add_line fs-1'></span>
            </button>
        </div>
    )
}
