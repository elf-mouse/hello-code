console.info('object');

let obj = {
  'L': 'is for the way you look at me',
  'O': 'is for the only one I see',
  'V': 'is very, very extraordinary',
  'E': 'is even more than anyone that you adore can'
};
let newObj = {};

/****************************************************************/

console.info('for...in');

for (let key in obj) {
  let value = obj[key];
  console.log(key + ' ' + value);
}

/****************************************************************/

console.info('keys');

newObj = Object.keys(obj);
console.log(newObj);

/****************************************************************/

console.info('values');

newObj = Object.values(obj);
console.log(newObj);

/****************************************************************/

console.info('entries');

newObj = Object.entries(obj);
console.log(newObj);

/****************************************************************/

console.info('Generator');

function* entries(obj) {
  for (let key of Object.keys(obj)) {
    let value = obj[key];
    yield [key, value];
  }
}

for (let [key, value] of entries(obj)) {
  console.log(key, value);
}
