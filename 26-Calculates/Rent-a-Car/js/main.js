const tabsTariffElements = [...document.querySelectorAll(".tariff")];
const optionsListElements = [...document.querySelectorAll(".option")];
const timeRangeElement = document.querySelector("#time");
const totalElement = document.querySelector("#total");
const orderTariffElement = document.querySelector("#order_tariff");
const orderTimeElement = document.querySelector("#order_time");
const orderOptionElement = document.querySelector("#order_option");
const volume = document.querySelector("#volume");


const priceInfo = {
  tariff: {
    economy: 500,
    comfort: 800,
    business: 1100,
    premium: 1400,
  },
  option: {
    option1: 1000,
    option2: 1500,
    option3: 1500,
    option4: 2000,
  },
};

let currentState = {
  tariff: "comfort",
  time: 2,
  option: [],
  getTariffPrice() {
    return priceInfo.tariff[this.tariff];
  },
  totalPriceOption() {
    let optionPrise = 0;
    optionPrise = this.option.length !== 0 ? this.option.reduce((acc, el) => acc += priceInfo.option[el], 0) : 0;
    return optionPrise;
  },
};



tabsTariffElements.forEach((tariffElement) => {
  tariffElement.addEventListener("click", (e) => updateTariff(e));
});

optionsListElements.forEach((optionElement) => {
  optionElement.addEventListener("change", (e) => updateOption(e));
});

timeRangeElement.addEventListener("input", (e) => updateTimeRange(e));

function updateTimeRange(e) {
  currentState.time = timeRangeElement.value;
  volume.textContent = currentState.time ;
  if(currentState.time < 5) {
    orderTimeElement.textContent = volume.textContent + " часа";
  } else {
    orderTimeElement.textContent = volume.textContent + " часов";
  }
  updatePrise();
  updateOrder();
}

function updatePrise() {
  const tariffPrice = currentState.getTariffPrice();
  const optionPrice = currentState.totalPriceOption();
  let totalPrice = currentState.time * tariffPrice + optionPrice
  totalElement.textContent = totalPrice;
};

function updateOrder() {
  orderTariffElement.textContent = currentState.getTariffPrice() + " \u{20BD}/час";
  orderOptionElement.textContent = currentState.totalPriceOption() + " \u{20BD}/час";
};


function updateTariff(e) {
  const value = e.target.value;
  currentState.tariff = value;
  updatePrise();
  updateOrder();
  updateTimeRange();
};

function updateOption(e) {
  e.stopPropagation();
  if(e.target.checked) {
    currentState.option.push(e.target.name)
  } else {
    const idOption = currentState.option.indexOf(e.target.name);
    currentState.option.splice(idOption, 1);
  };
  updatePrise();
  updateOrder();
  updateTimeRange();

};

