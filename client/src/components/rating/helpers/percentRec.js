const percentRec = (obj) => {
  let rec = Number(obj.true) || 0;
  let total = rec + Number(obj.false) || 0;

  if (total === 0) {
    return 0;
  } else {
    let percent = (rec / total) * 100
    return Math.round(percent);
  }
};

module.exports = percentRec;
