const form = document.querySelector("form");
const squareInput = document.querySelector("#square-input");
const squareRange = document.querySelector("#square-range");
const totalPrice = document.querySelector("#total-price");
const listInputs = document.querySelectorAll("input");
const radiosType = document.querySelectorAll('input[name="type"]');
const radiosBuilding = document.querySelectorAll('input[name="building"]');
const radiosRooms = document.querySelectorAll('input[name="rooms"]');
//checkbox
const checkboxCeiling = document.querySelector('input[name="ceiling"]');
const checkboxWalls = document.querySelector('input[name="walls"]');
const checkboxFloor = document.querySelector('input[name="floor"]');

// const basePrice = 6000;

// squareRange.addEventListener("input", function () {
//     squareInput.value = this.value;
//     // console.log(basePrice * Number(squareInput.value));
// });

// squareInput.addEventListener("input", function () {
//     squareRange.value = this.value;
// });

// function calculate() {
//     const selectedType = [...radiosType].find((radio) => radio.checked)?.value || null;
//     const selectedBuilding = [...radiosBuilding].find((radio) => radio.checked)?.value || null;
//     const selectedRooms = [...radiosRooms].find((radio) => radio.checked)?.value || null;
//     let currentPrice = basePrice * parseInt(squareInput.value);
//     if(selectedType !== null) {
//         currentPrice *= Number(selectedType);
//     };

//     if(selectedBuilding !== null) {
//         currentPrice *= Number(selectedBuilding);
//     };
//     if(selectedRooms !== null) {
//         currentPrice *= Number(selectedRooms);
//     };

//     if(checkboxCeiling.checked === true) {
//         currentPrice *= Number(checkboxCeiling.value);
//     };
//     if(checkboxWalls.checked === true) {
//         currentPrice *= Number(checkboxCeiling.value);
//     };
//     if(checkboxFloor.checked === true) {
//         currentPrice *= Number(checkboxCeiling.value);
//     };
//     const formattedPrice = new Intl.NumberFormat('ru-RU', {
//         style: 'currency',
//         currency: 'RUB'
//     }).format(currentPrice);
//     return formattedPrice;
// };

// totalPrice.textContent = calculate();

// listInputs.forEach((input) => {
//     input.addEventListener("input", function () {
//         totalPrice.textContent = calculate();
//     });
// });

const basePrice = 6000;

const formattedPrice = (value) => {
    return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
      }).format(value);
};

totalPrice.textContent = formattedPrice(basePrice * parseInt(squareInput.value));

squareRange.addEventListener("input", function () {
    squareInput.value = this.value;
    // console.log(basePrice * Number(squareInput.value));
});

squareInput.addEventListener("input", function () {
    squareRange.value = this.value;
});

const optionsCheckbox = {
  ceiling: document.querySelector('input[name="ceiling"]'),
  walls: document.querySelector('input[name="walls"]'),
  floor: document.querySelector('input[name="floor"]'),
};

form.addEventListener("input", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const numberValue = Number(data.number) || 0;
  const typeValue = Number(data.type) || 0;
  const buildingValue = Number(data.building) || 0;
  const roomsValue = Number(data.rooms) || 0;

  let currentPrice = basePrice * numberValue * typeValue * buildingValue * roomsValue;

  Object.values(optionsCheckbox).forEach((checkbox) => {
    if (checkbox.checked) {
      const percent = parseFloat(checkbox.value); // 1.1
      currentPrice *= percent; // Умножаем на 1.1
    };
  });

//   console.log(currentPrice);

  totalPrice.textContent = formattedPrice(currentPrice);
});
