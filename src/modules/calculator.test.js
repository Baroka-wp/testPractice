const Calculator = require('./calculator.js');

const calc = new Calculator();
describe('function sum', () => {
  test('1 + 1 to be equal 2', () => {
    expect(calc.sum(1,1)).toBe(2)
  });
  test('5 + 7 to be equal 12', () => {
    expect(calc.sum(5,7)).toBe(12)
  });
  test('5 + 6 to be equal 11', () => {
    expect(calc.sum(5,6)).toBe(11)
  });
});

describe('function soustraction', () => {
  test('1 - 1 to be equal 0', () => {
    expect(calc.soustraction(1,1)).toBe(0)
  });
  test('5 - 7 to be equal -2', () => {
    expect(calc.soustraction(5,7)).toBe(-2)
  });
  test('8 - 2 to be equal 6', () => {
    expect(calc.soustraction(8,2)).toBe(6)
  });
});

describe('function multiply', () => {
  test('1 * 1 to be equal 1', () => {
    expect(calc.multiply(1,1)).toBe(1)
  });
  test('5 * 7 to be equal 35', () => {
    expect(calc.multiply(5,7)).toBe(35)
  });
  test('5 * 0 to be equal 0', () => {
    expect(calc.multiply(5,0)).toBe(0)
  });
});

describe('function divize', () => {
  test('1 / 1 to be equal 1', () => {
    expect(calc.divize(1,1)).toBe(1)
  });
  test('4 / 2 to be equal 35', () => {
    expect(calc.divize(4,2)).toBe(2)
  });
  test('5 / 0 to be equal 0', () => {
    expect(calc.divize(5,0)).toBe("Can not divize by 0")
  });
});
