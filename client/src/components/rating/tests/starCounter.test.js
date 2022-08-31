const starCounter = require('../helpers/starCounter');

const noRatings = {};

const manyRatings = {
  1: '7',
  2: '9',
  3: '7',
  4: '10',
  5: '36'
}

test('Returns 0s when there are no reviews', () => {
  expect(starCounter(noRatings)).toEqual([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
});

test('Should round percentage to nearest whole number', () => {
  expect(starCounter(manyRatings)).toEqual([[52.17391304347826, 36], [14.492753623188406, 10], [10.144927536231885, 7], [13.043478260869565, 9], [10.144927536231885, 7]]);
});
