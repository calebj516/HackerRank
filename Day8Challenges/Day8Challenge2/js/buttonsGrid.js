// Behavior. Each time btn5 is clicked, the innerHTML text on the grid's outer buttons (i.e., bt1, btn2, btn3, btn4, btn6, btn7, btn8, btn9) must rotate in the clockwise direction. Do not update the button id's.

let btn = document.getElementById("btn5");

btn.onclick = function () {
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let btn3 = document.getElementById("btn3");
  let btn4 = document.getElementById("btn4");
  let btn6 = document.getElementById("btn6");
  let btn7 = document.getElementById("btn7");
  let btn8 = document.getElementById("btn8");
  let btn9 = document.getElementById("btn9");

  // When moving values from one variable to the next, there must be a third variable to hold the value that will be moved. Otherwise the code won't function as intended.

  let num1 = btn1.innerHTML;
  let num2 = btn2.innerHTML;
  let num3 = btn3.innerHTML;
  let num4 = btn4.innerHTML;
  let num6 = btn6.innerHTML;
  let num7 = btn7.innerHTML;
  let num8 = btn8.innerHTML;
  let num9 = btn9.innerHTML;

  btn1.innerHTML = num4;
  btn2.innerHTML = num1;
  btn3.innerHTML = num2;
  btn4.innerHTML = num7;
  btn6.innerHTML = num3;
  btn9.innerHTML = num6;
  btn8.innerHTML = num9;
  btn7.innerHTML = num8;
};
