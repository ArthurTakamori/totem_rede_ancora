import Amortecedor from '../../../assets/img/amortecedorProductCart.png'
import Remover from '../../../assets/img/Botão remover.png'
import "./styles.scss";

export default function productCard(){

    const minus = document.getElementById("itemSubtraction")
    const num = document.getElementById("itemQuantity");
    const plus = document.getElementById("itemSum");
    
    let a = 1;

    plus.addEventListener("click", () => {
        a++;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    });

    minus.addEventListener("click", () => {
        if (a > 1) {
            a--;
            a = (a < 10) ? "0" + a : a;
            num.innerText = a;
        }
    })


    return (
        <>
            <div className='d-flex justify-content-center border border-dark sl-c-card__container'>
                <div className="d-flex align-items-center sl-c-card">
                    <div className='d-flex justify-content-center img sl-c-card__container__image'>
                        <img src={Amortecedor} alt="Imagem de Amortecedor" className='p-4 sl-c-card__product__image'/>
                    </div>
                    <div className='sl-c-card__container__info'>
                        <div className='d-flex align-content-between p-3 sl-c-card__container__info__header'> 
                            <h1 className='sl-c-card__container__info__header__title'>AMORTECEDOR</h1>
                            <img src={Remover} alt="Lixeira para Remover" className='ms-auto sl-c-card__container__info__header__trash__icon'/>
                        </div>    
                            
                        <div className='d-flex align-content-between p-3 sl-c-card__container__info__body'>
                        <p className='p-0 sl-c-card__container__info__body__title'>MODELO ORIGINAL</p>
                        </div>
                            
                        <div className='d-flex p-3 align-content-between flex-wrap sl-c-card__container__info__value'>
                            <h2 className='pt-5 p-1 sl-c-card__container__info__value__price'>R$244,50</h2>
                            <div className='d-flex ms-auto align-items-end sl-c-card__container__info__value__buttons'>
                                <div className='d-flex justify-content-center px-2 bg-primary rounded-start sl-c-card__container__info__value__buttons__subtraction__frame'>
                                    <p id='itemSubtraction'>-</p>
                                </div>
                                <div className='d-flex justify-content-center px-2 bg-white sl-c-card__container__info__value__buttons__quantity__frame'>
                                    <p id='itemQuantity'>01</p>
                                </div>
                                <div className='d-flex justify-content-center px-2 bg-primary rounded-end sl-c-card__container__info__value__buttons__addition__frame'>
                                    <p id='itemSum'>+</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}