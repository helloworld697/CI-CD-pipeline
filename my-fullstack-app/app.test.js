// app.test.js
const multiply = (a, b) => {
  return a * b; 
};

test('multiplies 2 * 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

test('multiplies 3 * 2 to equal 6', () => {
  expect(multiply(3, 2)).toBe(6);
});