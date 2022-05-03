const {stringLength} = require('./stringLength.js')

test('manu length to equal 4', () => {
  expect(stringLength("manu")).toBe(4)
})

test('empty string should return errors message', () => {
  expect(stringLength("")).toBe("string must be betewen 1 and 10")
})

test('antropologiste should return errors message', () => {
  expect(stringLength("antropologiste")).toBe("string must be betewen 1 and 10")
})
