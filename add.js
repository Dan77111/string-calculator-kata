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

  if (numbers.some((number) => number < 0)) {
    throw new Error(
      'negatives not allowed: ' + numbers.filter((number) => number < 0).join(',')
    );
  }

  return numbers.reduce((total, number) => total + number, 0);
};

module.exports = add;
