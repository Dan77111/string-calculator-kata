const add = (numbers) => {
  regex = /[\n]/;
  delimiter = '';
  numbers;
  //controlla se c'è un delimitatore personalizzato
  if (numbers.startsWith('//')) {
    [delimiter, ...rest] = numbers.split(regex);
    delimiter = delimiter.split('//')[1];
    numbers = rest.join(delimiter);
  } else {
    delimiter = ',';
  }
  //crea la regex per lo split usando eventuali delimitatori personalizzati
  regex = new RegExp(`[\n${delimiter}]`, 'g');
  //dividi la stringa con i numeri in un array e converte tutti i numeri in interi, se la stringa è vuota inserisci uno 0
  numbers = numbers.split(regex);
  numbers = numbers.map((number) => parseInt(number) || 0);

  //controlla se ci sono numeri negativi e in caso lancia un'eccezione
  if (numbers.some((number) => number < 0)) {
    throw new Error(
      'negatives not allowed: ' + numbers.filter((number) => number < 0).join(',')
    );
  }

  //controlla se ci sono numeri maggiori di 1000 e in caso ignorali
  if (numbers.some((number) => number > 1000)) {
    numbers = numbers.filter((number) => number <= 1000);
  }

  //restituisce la somma dei numeri
  return numbers.reduce((total, number) => total + number, 0);
};

//esporta la funzione per poterla usare per i test
module.exports = add;
