import { genCompare } from '../genericCompare';

it('should return true', () => {
  expect(genCompare(1,1)).toEqual(true);
});

it('should return falsy', () => {
  expect(genCompare(1,"1")).toEqual(false);
});

it('should return truthy', () => {
  expect(genCompare({}, {})).toEqual(true);
});


it('should return truthy', () => {
  expect(genCompare({}, [])).toEqual(false);
});

it('should return truthy', () => {
  expect(genCompare([1,2,3], [1,2,3])).toEqual(true);
});

it('should return falsy', () => {
  expect(genCompare([1,2,3], [1,2])).toEqual(false);
});

it('should return true', () => {
  expect(genCompare({one: 1, two: 2}, {one: 1, two:2})).toEqual(true);
});

it('should return falsy', () => {
  expect(genCompare({one: 1, two: 2}, {one: 1})).toEqual(false);
});
