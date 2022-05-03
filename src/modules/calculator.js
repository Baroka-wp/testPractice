class Calculator {
  constructur(){}

  sum(num1 , num2){
    return num1 + num2;
  }

   multiply(num1 , num2){
    return num1 * num2;
  }

  soustraction(num1 , num2){
    return num1 - num2;
  }

  divize(num1 , num2) {
    if(num2 !== 0) {
      return num1 / num2;
    }
    return "Can not divize by 0"
  }
}

module.exports = Calculator;
