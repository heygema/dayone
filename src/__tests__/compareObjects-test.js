import compareObjects from '../day1/compareObjects';

let simon = {name: 'Simon', age: 34};
let john = {name: 'John', age: 59};
let a = {one: 1, two: 2};
let b = {two: 2, one: 1};

it('{} {} should return true', () => {
  let result = compareObjects({}, {});
  expect(result).toEqual(true);
});

it('simon and john should return false', () => {
  let res = compareObjects(simon, john);
  expect(res).toEqual(false);
});

it('should expect true', () => {
  let res = compareObjects(a, b);
  expect(res).toEqual(true);
});
