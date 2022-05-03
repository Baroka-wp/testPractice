const {capitalizeString } = require('./capitalizeString.js');


describe('when user provide string', () => {
  test('harry should return Harry', () => {
    expect(capitalizeString('harry')).toBe("Harry")
  })
  test('HARRY should return Harry', () => {
    expect(capitalizeString('HARRY')).toBe("Harry")
  })
  test('haRry should return Harry', () => {
    expect(capitalizeString('haRry')).toBe("Harry")
  })
  test('Harry should return Harry', () => {
    expect(capitalizeString('Harry')).toBe("Harry")
  })
  test('h should return H', () => {
    expect(capitalizeString('h')).toBe("H")
  })
})

describe('when user provide NOT string or empty string', () => {
  test('1000 should return error', () => {
    expect(capitalizeString(1000)).toBe("Not a string")
  })
  test(' empty string should return error', () => {
    expect(capitalizeString("")).toBe("Your string must contain one character")
  })
})
