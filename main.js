const percent = document.getElementById("percent");
const clearAll = document.getElementById("deleteAll");
clearAll.addEventListener("click", clearLittle);
const clear = document.getElementById("delete");
clear.addEventListener("click", clearLittle);
const remove = document.getElementById("remove");
remove.addEventListener("click", removeOne);
const divide = document.getElementById("divide");
divide.addEventListener("click", symbSelect);
const multiply = document.getElementById("multiply");
multiply.addEventListener("click", symbSelect);
const subtract = document.getElementById("subtract");
subtract.addEventListener("click", symbSelect);
const plus = document.getElementById("plus");
plus.addEventListener("click", symbSelect);
const equation = document.getElementById("equation");
equation.addEventListener("click", getResult);
const display = document.querySelector(".display");
let allNums = document.querySelectorAll("button.num");
for (let num of allNums) {
  num.addEventListener("click", numSelect);
}
function numSelect(event) {
  event.preventDefault();
  const value = Number(event.target.innerText); // Получаем текст кнопки
  display.value += value; // Добавляем его в поле ввода
}
function symbSelect(event) {
  event.preventDefault();
  const symb = event.target.innerText;
  const lastChar = display.value.slice(-1);
  if ("+-×÷".includes(lastChar) && "+-×÷".includes(symb)) {
    return; // Не добавляем повторяющийся оператор
  }
  display.value += symb;
}
function getResult(event) {
  event.preventDefault();
  try {
    let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/"); // Заменяем символы
    display.value = new Function(`return ${expression}`)();
  } catch {
    display.value = "Ошибка";
  }
}
function clearLittle(event) {
  event.preventDefault();
  display.value = "";
}
// function removeOne(event) {
//   event.preventDefault();
// }
