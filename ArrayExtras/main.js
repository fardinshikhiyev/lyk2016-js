var dizi = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
];

var mapped = dizi.map(function(item) {
  
  return {
    number: item,
    square: item * item
  };

});

var dizi2 = [
  { name: 'Hana', lastname: 'Can' },
  { name: 'M. Onur', lastname: 'Celik' },
  { name: 'Adilcan', lastname: 'Eren' },
  { name: 'Burak', lastname: 'Can' },
  { name: 'Fatih', lastname: 'Erikli' },
  { name: 'Aziz', lastname: 'Arslan' }
];

var egitmenler = dizi2.map(function(obj) {
  return obj.name + ' ' + obj.lastname;
});

var filtered = dizi.filter(function(item) {

  return item % 2 == 0;

});

var filtered2 = dizi2.filter(function(obj) {
  
  return obj.lastname == 'Can';  

});

var filtered3 = dizi2.filter(function(obj) {
  
  // return obj.lastname[0] == 'C';
  return obj.lastname.toLowerCase().charAt(0) == 'c';

});

var reduced = dizi.reduce(function(total, item) {

  return total * item;

});

console.log(reduced);
