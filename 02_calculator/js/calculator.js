"use strict";

const elementSelect = document.getElementById("calcType");
const elementNum1 = document.getElementById("num1");
const elementNum2 = document.getElementById("num2");
const elementResult = document.getElementById("result");
const elementbtnEqul=document.getElementById("btnEqual");


elementNum1.addEventListener("change",clear);
elementNum2.addEventListener("change",clear);
elementSelect.addEventListener("change", clear);
elementbtnEqul.addEventListener("click", update);

function update() {
  //精算結果を求める
  const result = calculate(
      Number(elementNum1.value),
      Number(elementNum2.value),
      elementSelect.value
  );

  //画面に表示
  elementResult.innerHTML = result;//テキストを代入
}

function calculate(num1, num2, calcType) {
  let result;
  // 計算の種類で処理を分岐
  switch (calcType) {
      case "type-add": // 足し算の場合
          result = num1 + num2;
          break;
      case "type-substract": // 引き算の場合
          result = num1 - num2;
          break;
      case "type-multiply": // 掛け算の場合
          result = num1 * num2;
          break;
      case "type-divide": // 割り算の場合
          result = num1 / num2;
          break;
  }
  return result;
}

function clear() {
    elementResult.innerHTML = "";
}