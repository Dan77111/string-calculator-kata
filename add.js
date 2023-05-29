const add = (numbers) => {
  numbers = numbers.split(',');
  numbers = numbers.map((number) => parseInt(number) || 0);
  return numbers.reduce((total, number) => total + number, 0);
};

module.exports = add;
