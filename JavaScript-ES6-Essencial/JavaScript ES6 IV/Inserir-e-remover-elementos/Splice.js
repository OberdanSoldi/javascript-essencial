const arr = [1, 2, 3, 4, 5];

arr.splice(2);
// [1, 2]

console.log(arr);
// [1, 2]

arr.slice(0, 0, 'first');
// []

console.log(arr);
// ["first", 1, 2]