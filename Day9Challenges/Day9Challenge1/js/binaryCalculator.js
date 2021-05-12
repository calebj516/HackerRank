let resArr = [];
let leftOperand, rightOperand, operator, expression;
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
  if (res.innerHTML) {
    resArr.push("+");
    res.innerHTML = resArr.join("");
    operator = "+";
  }
};

const subRes = () => {
  if (res.innerHTML) {
    resArr.push("-");
    res.innerHTML = resArr.join("");
    operator = "-";
  }
};

const mulRes = () => {
  if (res.innerHTML) {
    resArr.push("*");
    res.innerHTML = resArr.join("");
    operator = "*";
  }
};
const divRes = () => {
  if (res.innerHTML) {
    resArr.push("/");
    res.innerHTML = resArr.join("");
    operator = "/";
  }
};

const evalRes = () => {
  if (res.innerHTML) {
    let leftOperand = resArr.slice(0, resArr.indexOf(operator)).join(""); // takes result array from start up to the operator
    let rightOperand = resArr
      .slice(resArr.indexOf(operator) + 1, resArr.length)
      .join(""); // takes result array from the position after the operator to the end of the array
    let base10Res = eval(parseInt(leftOperand, 2) + parseInt(rightOperand, 2));
    let binaryRes = base10Res.toString(2);
    res.innerHTML = binaryRes;
  }
};
