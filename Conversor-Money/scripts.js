/*const cliqueiNoBotao = document.querySelector(".convert-button")
const coinSelectOne = document.querySelector('.coin-select-one')
const coinSelectTwo = document.querySelector('.coin-select-two')



function convertvaluesOne() {
    const inputCoinValue = document.querySelector('.input-coin').value
    const coinValueToConvert = document.querySelector('.coin-value-to-convert')
    const coinValueConverted = document.querySelector('.coin-value')

    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 534.2
    const realToday = 1.0

    if (coinSelectOne == 'real') {
        coinValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            sytle: 'currency',
            currency: 'BRL'
        }).format(inputCoinValue / realToday)
    }

    if (coinSelectOne == 'dolar') {
        coinValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            sytle: 'currency',
            currency: 'USD'
        }).format(inputCoinValue / dolarToday)
    }

    if (coinSelectOne == 'euro') {
        coinValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            sytle: 'currency',
            currency: 'EUR'
        }).format(inputCoinValue / euroToday)
    }

    if (coinSelectOne == 'bitcoin') {
        coinValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            sytle: 'currency',
            currency: 'BTC'
        }).format(inputCoinValue / bitcoinToday)
    }


    coinValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCoinValue)

    coinValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(inputCoinValue)

    coinValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(inputCoinValue)

    coinValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'BTC'
    }).format(inputCoinValue)

}


    if (coinSelectTwo == 'real') {
        coinValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            sytle: 'currency',
            currency: 'BRL'
        }).format(inputCoinValue / realToday)
    }

    if (coinSelectTwo == 'dolar') {
        coinValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            sytle: 'currency',
            currency: 'USD'
        }).format(inputCoinValue / dolarToday)
    }

    if (coinSelectTwo == 'euro') {
        coinValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            sytle: 'currency',
            currency: 'EUR'
        }).format(inputCoinValue / euroToday)
    }

    if (coinSelectTwo == 'bitcoin') {
        coinValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            sytle: 'currency',
            currency: 'BTC'
        }).format(inputCoinValue / bitcoinToday)
    }



    coinValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCoinValue)

    coinValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(inputCoinValue)

    coinValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(inputCoinValue)

    coinValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'BTC'
    }).format(inputCoinValue)



function changeCoinOne() {

    const coinNameOne = document.getElementById('coin-name-one')
    const coinImage = document.querySelector('.real')


    if (coinSelectOne.value == 'real') {
        coinNameOne.innerHTML = 'Real Brasileiro'
        coinImage.src = '/assets/real.png'
    }

    if (coinSelectOne.value == 'dolar') {
        coinNameOne.innerHTML = 'Dólar Americano'
        coinImage.src = '/assets/dolar.png'
    }

    if (coinSelectOne.value == 'euro') {
        coinNameOne.innerHTML = 'Euro'
        coinImage.src = '/assets/Euro.png'
    }

    if (coinSelectOne.value == 'bitcoin') {
        coinNameOne.innerHTML = 'Bitcoin'
        coinImage.src = '/assets/bitcoin 1.png'
    }
   
}

function changeCoinTwo() {

    const coinNameTwo = document.querySelector('.coin-text')
    const coinImage = document.querySelector('.dolar')
    
    if (coinSelectTwo.value == 'dolar') {
        coinNameOne.innerHTML = 'Dólar Americano'
        coinImage.src = '/assets/dolar.png'
    }

    if (coinSelectTwo.value == 'real') {
        coinNameOne.innerHTML = 'Real Brasileiro'
        coinImage.src = '/assets/real.png'
    }


    if (coinSelectTwo.value == 'euro') {
        coinNameOne.innerHTML = 'Euro'
        coinImage.src = '/assets/Euro.png'
    }

    if (coinSelectTwo.value == 'bitcoin') {
        coinNameOne.innerHTML = 'Bitcoin'
        coinImage.src = '/assets/bitcoin 1.png'
    }
}




coinSelectOne.addEventListener('change', changeCoinOne)

coinSelectTwo.addEventListener('change', changeCoinTwo)

cliqueiNoBotao.addEventListener('click', convertvalues)

*/
/*
const cliqueiNoBotao = document.querySelector('.convert-button')
const coinSelectTwo = document.querySelector('.coin-select-two')

function convertvalues() {

    const inputCoinValue = document.querySelector('.input-coin').value
    const coinValueToConvert = document.querySelector('.coin-value-to-convert')
    const coinValueConverted = document.querySelector('.coin-value')

    const dolarToday = 5.2
    const euroToday = 6.2



    if (coinSelectTwo.value == 'dolar') {
        coinValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (coinSelectTwo.value == 'euro') {
        coinValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

     coinValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRl'
    }).format(inputCurrencyValue)


}

function changeCoinTwo () {
    const coinNameTwo = document.querySelector('coin-text')
    const coinImage = document.querySelector('.dolar')


    if (coinSelectTwo.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImage.src = '/assets/dolar.png'
    }

    if (coinSelectTwo.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = '/assets/Euro.png'
    }

    convertvalues()
}

coinSelectTwo.addEventListener('change', changeCoinTwo)
cliqueiNoBotao.addEventListener('click', convertvalues)


*/


const botaoClicado = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')
const currencySelectCc = document.querySelector('.currency-select-cc')



function convertvalues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')

    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 534.2
    const realToday = 1.0




    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == 'real') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue / realToday)

    }

    if (currencySelect.value == 'bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRl'
    }).format(inputCurrencyValue)


}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.dolar')




    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImage.src = '/Conversor-Money/assets/dolar.png'
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = '/Conversor-Money/assets/Euro.png'
    }
    if (currencySelect.value == 'real') {
        currencyName.innerHTML = 'Real Brasileiro'
        currencyImage.src = '/Conversor-Money/assets/real.png'
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = '/Conversor-Money/assets/bitcoin 1.png'
    }





    convertvalues()
}


currencySelect.addEventListener('change', changeCurrency)
botaoClicado.addEventListener('click', convertvalues)