// @flow
/*eslint-disable no-unused-vars*/

import counter from '../counter';

it('should start at 0', () => {
  let c = counter();
  expect(c.getVal()).toEqual(0);
});

it('should tambah tambah', () => {
  let c = counter(1);
  expect(c.increaseWith(2)).toBe(3);
  expect(c.increaseWith(1)).toEqual(4);
  expect(c.increaseWith(6)).toEqual(10);
});

it('should kurang kurangin', () => {
  let c = counter(10);
  expect(c.decreaseWith(1)).toEqual(9);
  expect(c.decreaseWith(5)).toEqual(4);
  expect(c.decreaseWith(6)).toEqual(-2);
});
