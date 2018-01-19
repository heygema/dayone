let fruits = new Map();

fruits.set('banana', {color: 'yellow', cal: '190'});
fruits.set('apple', {color: 'red', cal: '190'});

console.log(fruits);

// function arrayFrom(thing) {
//   let results = [];
//   for (let [key, value] of thing.keys()) {
//     let obj = {key, value};
//     results.push([obj]);
//   }
//   return results;
// }

// console.log(arrayFrom(fruits));

//2
function arrayFrom(thing) {
  return [...thing];
}

console.log(arrayFrom(fruits));
