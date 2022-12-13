const squarePow = (num) => {
  if (num === 1) {
    return 1;
  }
  // возводим в квадрат
  return Math.pow(num, 2);
};

module.exports = squarePow;
