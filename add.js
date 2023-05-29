const add = (numbers) => {
  regex = /[\n]/;
  delimiter = '';
  numbers;
  if (numbers.startsWith('//')) {
    [delimiter, ...rest] = numbers.split(regex);
    delimiter = delimiter.split('//')[1];
    numbers = rest.join(delimiter);
  } else {
    delimiter = ',';
  }
  regex = new RegExp(`[\n${delimiter}]`, 'g');
  numbers = numbers.split(regex);
  numbers = numbers.map((number) => parseInt(number) || 0);
  return numbers.reduce((total, number) => total + number, 0);
};

module.exports = add;
