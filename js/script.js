const result = document.querySelector(".result");
const history = document.querySelector(".history");
const clearBtn = document.getElementById("c");
const scoreBtn = document.getElementById("equals")
const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const threeBtn = document.getElementById("3");
const fourBtn = document.getElementById("4");
const fiveBtn = document.getElementById("5");
const sixBtn = document.getElementById("6");
const sevenBtn = document.getElementById("7");
const eightBtn = document.getElementById("8");
const nineBtn = document.getElementById("9");
const zeroBtn = document.getElementById("0");
const commaBtn = document.getElementById("comma");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const powerBtn = document.getElementById("power");
const rootBtn = document.getElementById("root");
const percentBtn = document.getElementById("percent");

let opperand;

function getNumber(number) {
  if (result.textContent.length < 10) {
    result.textContent = parseFloat(`${result.textContent}${number}`);
  }
}

function clear() {
  result.textContent = '0';
  history.textContent = '';
}

function addHistory() {
  history.textContent = result.textContent;
}

function setOpperand(chosenOpperand) {
  addHistory();
  result.textContent = ''
  opperand = chosenOpperand;
}

function setScore() {
  const first = stringToNumber(history.textContent);
  const second = stringToNumber(result.textContent);
  let tempScore;

  switch (opperand) {
    case '+':
      tempScore = first + second;
      break;
    case '-':
      tempScore = first - second;
      break;
    case '*':
      tempScore = first * second;
      break;
    case '/':
      tempScore = first / second;
      break;
    default:
      console.log('Coś poszlo nie tak');
  }

  if (isNaN(tempScore) === true) {
    tempScore = result.textContent;
  }

  showScore(tempScore);
}


function showScore(score) {
  if (String(Math.round(score)).length > 10) {
    result.textContent = 'ERR MAX';
  } else {
    tempScore = String(score).substring(0, 11);
    result.textContent = tempScore;
    tempScore = history.textContent;
  }
}

function stringToNumber(number) {
  if (number.includes('.')) {
    return parseFloat(number);
  } else {
    return parseInt(number);
  }
}

function power() {
  showScore(result.textContent *= result.textContent);
}

function root() {
  if (result.textContent > 0) {
    showScore(result.textContent = Math.sqrt(result.textContent));
  }
}

function percent() {
  //
}


oneBtn.addEventListener("click", function () { getNumber(1) });
twoBtn.addEventListener("click", function () { getNumber(2) });
threeBtn.addEventListener("click", function () { getNumber(3) });
fourBtn.addEventListener("click", function () { getNumber(4) });
fiveBtn.addEventListener("click", function () { getNumber(5) });
sixBtn.addEventListener("click", function () { getNumber(6) });
sevenBtn.addEventListener("click", function () { getNumber(7) });
eightBtn.addEventListener("click", function () { getNumber(8) });
nineBtn.addEventListener("click", function () { getNumber(9) });
zeroBtn.addEventListener("click", function () { getNumber(0) });
commaBtn.addEventListener("click", function () { getNumber('.') });
clearBtn.addEventListener("click", clear);
plusBtn.addEventListener("click", function () { setOpperand('+') });
minusBtn.addEventListener("click", function () { setOpperand('-') });
multiplyBtn.addEventListener("click", function () { setOpperand('*') });
divideBtn.addEventListener("click", function () { setOpperand('/') });
powerBtn.addEventListener("click", power);
rootBtn.addEventListener("click", root);
percentBtn.addEventListener("click", percent);
scoreBtn.addEventListener("click", setScore)