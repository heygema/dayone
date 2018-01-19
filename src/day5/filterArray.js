// @flow
/*eslint-disable no-unused-vars */

let defaultToTrue = (thing: mixed) => true;

function filterArray<X>(
  array: Array<X>,
  fn: X => boolean = defaultToTrue
): Array<X> {
  let results = [];
  for (let i of array) {
    if (fn(i)) {
      results.push(i);
    }
  }
  return results;
}

let a = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3];

function not2(num) {
  return num !== 2;
}

console.log(filterArray(a, not2));
// console.log(res);

// a.filter(x => x != 2);

export default filterArray;
