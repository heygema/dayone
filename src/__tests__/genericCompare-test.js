import {genCompare} from '../genericCompare';

it('should return true', () => {
  expect(genCompare(1, 1)).toEqual(true);
});

it('should return falsy', () => {
  expect(genCompare(1, '1')).toEqual(false);
});

it('should return truthy', () => {
  expect(genCompare({}, {})).toEqual(true);
});

it('should return truthy', () => {
  expect(genCompare({}, null)).toEqual(false);
});

it('should return truthy', () => {
  expect(genCompare(null, {})).toEqual(false);
}); // this isn't working

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

it('should return falsy', () => {
  expect(genCompare(true, false)).toEqual(false);
});

it('should return true', () => {
  expect(genCompare(true, true)).toEqual(true);
});

it('should return true', () => {
  expect(genCompare(null, null)).toEqual(true);
});

it('should return false', () => {
  expect(genCompare(1, null)).toEqual(false);
});

it('should return false', () => {
  expect(genCompare(undefined, null)).toEqual(false);
});
