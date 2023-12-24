class Currency {
    constructor() {
        this.url = 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_C0FKO9ZZjOYY0C52pZ5N8DQHCJRa1uoPfCh8NHOv&base_currency='
    }

    async exchange(amount, firstCurrency, secondCurrency){
       const response =  await fetch(`${this.url}${firstCurrency}`)
       const result = await response.json()
       const exchangeResult = amount * result.data[secondCurrency] 
        console.log(amount)
       return exchangeResult
    }
}