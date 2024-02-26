let formElement = document.querySelector(".js-form");
let currency = document.querySelector(".js-currency");
let fillAmount = document.querySelector(".js-amount");
let message = document.querySelector(".js-message");
let paragraph = document.querySelector(".js-paragraph");


let rateEUR = 4.3293
let rateUSD = 4.0177
let rateGPB = 5.0704
let rateCHF = 4.6024



formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    rate = currency.value;
    amount = +fillAmount.value;

    let result;

    switch (rate) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
        case "GPB":
            result = amount / rateGPB;
            break;
        case "CHF":
            result = amount / rateCHF;
            break;
    };
    paragraph.classList.add("container__message");
    message.innerText = `Za kwotę ${amount.toFixed(2)} PLN otrzymasz ${result.toFixed(2)} ${rate}`;

});