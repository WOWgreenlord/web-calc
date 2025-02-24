const percent = document.getElementById('percent');
const clearAll = document.getElementById('deleteAll');
const clear = document.getElementById('delete');
const remove = document.getElementById('remove');
const divide = document.getElementById('divide');
const display = document.querySelector('.display');
let allNums = document.querySelectorAll('button.num');
  for (let num of allNums) {
    num.addEventListener("click", numSelect);
  }
  function numSelect(event) {
    event.preventDefault();
    const value = Number(event.target.innerText); // Получаем текст кнопки
    display.value += value; // Добавляем его в поле ввода
    console.log(typeof value);
    // switch(num) {
    //   case num == 0:
    //     display[0].innerHTML = 7
    // }
  };
  