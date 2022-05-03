const { reverseString } = require('./reverseString.js')

test('manu should return unam', () => {
  expect(reverseString('manu')).toBe('unam');
});

test('toto should return otot', () => {
  expect(reverseString('toto')).toBe('otot');
});

test('irotori should return irotori', () => {
  expect(reverseString('irotori')).toBe('irotori');
});
