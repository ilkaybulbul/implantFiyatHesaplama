const porselen = document.getElementById('porselen')
const zirkon =  document.getElementById('zirkon')
const cronPiece = document.getElementById('cronPiece')
const cronBtn = document.getElementById('cronBtn')
const cronPriceLabel = document.getElementById('cronPriceLabel')

const porselenPrice = 1200
const zirkonPrice = 2200

export function cronCalculate() {
    
    let CronPrice;

    if(porselen.checked) {
        CronPrice = cronPiece.value * porselenPrice
        cronPriceLabel.innerHTML = 'Kron fiyatı : ' + CronPrice + ' TL'
    }
    else if (zirkon.checked) 
    {
        CronPrice = cronPiece.value * zirkonPrice
        cronPriceLabel.innerHTML = 'Kron fiyatı : ' + CronPrice + ' TL'
    }

    if (CronPrice !== undefined) {
        cronPriceLabel.innerHTML ='TOTAL FİYAT ' + CronPrice + ' TL';
    }

}



cronBtn.addEventListener('click', cronCalculate)