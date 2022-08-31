const percentRec = require('../helpers/percentRec');

const noReviews = {
  false: '0',
  true: '0'
};

const percentToInt = {
  false: '36',
  true: '400'
};

test('Returns 0 when there are no reviews', () => {
  expect(percentRec(noReviews)).toBe(0);
});

test('Should round percentage to nearest whole number', () => {
  expect(percentRec(percentToInt)).toBe(92);
});
