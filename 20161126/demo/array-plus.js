// let arr = ['L', 'O', 'V', 'E'];
let newArr = [];
let result = '';

/****************************************************************/

console.info('forEach');

arr.forEach(function(value, key, array) {
  console.log(key, value);
  newArr.push(value);
});

console.log(newArr);

/****************************************************************/

console.info('map');

newArr = arr.map(function(value, key, array) {
  console.log(key, value);
  return key + ':' + value;
});

console.log(newArr);

/****************************************************************/

console.info('find');

result = arr.find(function(value, key, array) {
  console.log(key, value);
  return value === 'E';
});

console.log(result);

/****************************************************************/

console.info('findIndex');

result = arr.findIndex(function(value, key, array) {
  console.log(key, value);
  return value === 'E';
});

console.log(result);

/****************************************************************/

console.info('every');

result = arr.every(function(value, key, array) {
  console.log(key, value);
  let inArray = ['A', 'E', 'I', 'O', 'U'].indexOf(value) > -1;
  return inArray;
});

console.log(result);

/****************************************************************/

console.info('some');

result = arr.some(function(value, key, array) {
  console.log(key, value);
  let inArray = ['A', 'E', 'I', 'O', 'U'].indexOf(value) > -1;
  return inArray;
});

console.log(result);
