var dizi = [1, 4, 5, 3, 8, 6, 9, 2];

dizi.push(12);
dizi.unshift(15);

dizi.pop();
dizi.shift();

dizi.sort();
dizi.reverse();

var index = dizi.indexOf(4);

var spliced = dizi.splice(index, 3);

console.log(dizi);
