let resArr = [];
let leftOperand, rightOperand;
let res = document.getElementById("res");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");

const addZero = () => {
  resArr.push("0");
  res.innerHTML = resArr.join("");
};

const addOne = () => {
  resArr.push("1");
  res.innerHTML = resArr.join("");
};

const clearRes = () => {
  res.innerHTML = "";
  while (resArr.length) {
    resArr.pop();
  }
};

const sumRes = () => {
  if (resArr) {
    let leftOperand = resArr.join("");
    clearRes();
    console.log(leftOperand);
  }
  //   if (leftOperand && !resArr) {
  //     let rightOperand = resArr.join("");
  //     console.log(rightOperand);
  //   }
};
