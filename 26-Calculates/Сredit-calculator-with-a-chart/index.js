const amountInputElement = document.querySelector("#loan-amount");//Сумма
const precentInputElement = document.querySelector("#loan-precent");//Процент
const termInputElement = document.querySelector("#loan-term"); //Срок

const paymentOutElement = document.querySelector("#loan-payment"); //оплата кредита
const overOutElement = document.querySelector("#loan-over"); //погашение кредита
const totalOutElement = document.querySelector("#loan-total"); //итоговый кредит

const btnSubmit = document.querySelector("#btn-submit");

function numRound(num) {
    let roundedNumber = Number(Math.round(num));
    return roundedNumber;
}

const defaultOption = {
    amount: 300000,
    precent: 20,
    term: 60,
};

amountInputElement.value = defaultOption.amount;
precentInputElement.value = defaultOption.precent;
termInputElement.value = defaultOption.term;

class Loan {
    option = {};
    result = {};

    constructor(option) {
        this.option = option;
        this.calculete();
    };

    set amount(num) {
        this.option.amount = num;
    };

    set precent(num) {
        this.option.precent = num;
    };
    set term(num) {
        this.option.term = num;
    };

    calculete() {
        const monthlyPrecent = this.option.precent / (12 * 100);
        this.result.monthlyPayment = 
        (this.option.amount * monthlyPrecent) / (1 - Math.pow(1 + monthlyPrecent, -this.option.term));
        this.result.total = this.result.monthlyPayment * this.option.term;
        this.result.over = this.result.total - this.option.amount;
        this.update();
    };

    update() {
        paymentOutElement.value = numRound(this.result.monthlyPayment);
        overOutElement.value = numRound(this.result.over);
        totalOutElement.value = numRound(this.result.total);
    }
};

const myLoad = new Loan(defaultOption);

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    myLoad.amount = Number(amountInputElement.value);
    myLoad.precent = Number(precentInputElement.value);
    myLoad.term = Number(termInputElement.value);
    myLoad.calculete();
})

console.log(myLoad);
