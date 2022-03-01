const dropList = document.querySelectorAll('.drop-list select');
const fromCurrency = document.querySelector('.from select');
const toCurrency = document.querySelector('.to select');
const getButton = document.querySelector('form button');
const exchangeRateTxt = document.querySelector('.exchange-rate');

for (let i = 0; i < dropList.length; i++) {
    for(currency_code in country_list) {
        let selected;
        if(i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        } else if (i == 1){
            selected = currency_code == "BRL" ? "selected" : "";
        }
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend",optionTag)
    }
    dropList[i].addEventListener('change', e=> {
        loadFlag(e.target);
    });
}

function loadFlag(element){
    for(code in country_list) {
        if(code === element.value){
            let imgTag = element.parentElement.querySelector('img')
            imgTag.src = `"https://flagcdn.com/32x24/${country_list[code].toLowerCase()}.png`
        }
    }
}

window.addEventListener = ("load", e => {
    getExchangeRate();
})
getButton.addEventListener = ('click', event => {
    event.preventDefault(); //prevent form from submitting
    getExchangeRate();
})


const getExchangeRate = () => {
    const amount = document.querySelector('.amount input')
    let amountVal = amount.value;
    if(amountVal == ''  || amountVal == '0'){
        amount.value = '1';
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/a7284795796908754e625775/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2)
        
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`
    })
}