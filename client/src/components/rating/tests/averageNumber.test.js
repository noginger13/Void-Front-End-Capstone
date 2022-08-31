const averageNumber = require ('../helpers/averageNumber');

const oneRating = {
  3: '5',
};

const oneDecimal = {
  1: '36',
  2: '19',
  3: '57',
  4: '60',
  5: '173'
};

const noRating = {};

test('Returns average rating of 1', () => {
  expect(averageNumber(oneRating)).toBe('3.0');
});

test('Should round average to 1 decimal place', () => {
  expect(averageNumber(oneDecimal)).toBe('3.9');
});

test('Should show 0 to 1 decimal place', () => {
  expect(averageNumber(noRating)).toBe('0.0');
});
