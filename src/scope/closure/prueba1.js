function sumWithClosure(firstNum) {
  function sum(secondNum) {
    if (secondNum) {
      return secondNum + firstNum;
    }
    return firstNum;
  }
  return sum;
}

console.log(sumWithClosure(90)());
