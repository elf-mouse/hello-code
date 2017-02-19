console.info('array');

let arr = ['L', 'O', 'V', 'E'];

/****************************************************************/

console.info('for');

for (let i = 0, len = arr.length; i < len; i++) {
  let key = i;
  let value = arr[i];
  console.log(key, value);
}

/****************************************************************/

console.info('for...in');

for (let key in arr) {
  let value = arr[key];
  console.log(key, value);
}

/****************************************************************/

console.info('for...of');

for (let value of arr) {
  console.log(value);
}
