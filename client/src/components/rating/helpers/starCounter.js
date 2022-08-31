const totalReviews = require('./totalReviews');

const starCounter = (obj) => {
  let total = totalReviews(obj);
  let starOrder = {
    1: [0, 0],
    2: [0, 0],
    3: [0, 0],
    4: [0, 0],
    5: [0, 0]
  };
  let starCount = [];

  for (const rating in obj) {
    let ratings = Number(obj[rating]);
    starOrder[rating][0] = (ratings / total) * 100;
    starOrder[rating][1] = ratings;
  }

  for (let i = 5; i > 0; i--) {
    starCount.push(starOrder[i]);
  }

  return starCount;
};

module.exports = starCounter;
