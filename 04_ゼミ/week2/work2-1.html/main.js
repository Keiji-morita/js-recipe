/const displayItems = document.getElementById("display-items");
const addButton100 = document.getElementById("add-button-100");
const displaySaifu = document.getElementById("display-saifu");
const displayJihankiMoney = document.getElementById("display-jihanki-money");

let saifu = 1000;
let jihankiMoney = 0;

addButton100.onclick = function () {
  const payMoney = function () {
    jihankiMoney = 100;
  };

  if (saifu >= 100) {
    displaySaifu.textContent = saifu -= 100;
    displayJihankiMoney.textContent = jihankiMoney += 100;
    changeDisplay.textContent = jihankiMoney;
  }
};

const buyButtonTea = document.getElementById("buy-button-tea");
const teaArea = document.getElementById("teaArea");

buyButtonTea.onclick = function () {
  if (jihankiMoney >= 100) {
    teaArea.textContent += "🍵";
    displayJihankiMoney.textContent = jihankiMoney -= 100;
    changeDisplay.textContent = jihankiMoney;
  }
};

const backChangeButton = document.getElementById("back-change-button");
const changeDisplay = document.getElementById("change-display");

let change = jihankiMoney;

backChangeButton.onclick = function () {
  const change = function () {
    change = 0;
  };
  changeDisplay.textContent = 0;
  displayJihankiMoney.textContent = 0;
  displaySaifu.textContent = saifu + jihankiMoney;
};
