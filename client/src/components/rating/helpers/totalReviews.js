const totalReviews = (obj) => {
  let total = 0;

  for (const rating in obj) {
    total += Number(obj[rating]);
  }

  return total;
};

module.exports = totalReviews;
