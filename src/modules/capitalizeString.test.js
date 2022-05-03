const {capitalizeString } = require('./capitalizeString.js');


describe('capitalize string', () => {
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
})
