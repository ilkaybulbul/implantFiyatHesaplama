const yerli = document.getElementById('yerli')
const ithal = document.getElementById('ithal')
const impPiece  = document.querySelector('.implantPiece')
const calculateBtn = document.querySelector('.calculateBtn')
const totalPriceLabel = document.getElementById('totalPrice')
const nowEurPrice = document.querySelector('.nowEurPrice') 
const brandChoose = document.getElementById('brandChoose')

const currency = new Currency()
const ithalEuro = 'EUR'
const yerliTR = 'TRY'

const xgateGlobal = 350
const roott = 390

/**
 * EXCHANGE for euro
 */ 

export function exchange() {
    const amount = Number(impPiece.value)
    console.log(impPiece.value)

    currency.exchange(amount, ithalEuro, yerliTR)
    .then((result) => {
        ithal.value = result
        nowEurPrice.innerHTML = 'Anlık Euro : ' + (result + 0.07)
    })
}
exchange()

/**
 * Calculates Implant Price
 */
let impPrice;
export function calculate() {
    const optionValue = brandChoose.options[brandChoose.selectedIndex].value;
    

    if (ithal.checked && (optionValue == 'XGATE' || optionValue == 'Roott')) {
        if (optionValue == 'XGATE') {
            impPrice = (xgateGlobal * (parseInt(ithal.value.trim()) + 0.07)) * parseInt(impPiece.value.trim());
            totalPriceLabel.innerHTML ='TOTAL FİYAT ' + impPrice + ' TL';
        } else if (optionValue == 'Roott') {
            impPrice = (roott * (parseInt(ithal.value.trim()) + 0.07)) * parseInt(impPiece.value.trim());
            totalPriceLabel.innerHTML ='TOTAL FİYAT ' + impPrice + ' TL';
        }
    } else if (yerli.checked) {
        impPrice = parseInt(yerli.value) * parseInt(impPiece.value.trim());
    }

    if (impPrice !== undefined) {
        totalPriceLabel.innerHTML ='TOTAL FİYAT ' + impPrice + ' TL';
    }
    return impPrice
}





calculateBtn.addEventListener('click', calculate)
