// @flow

import filterArray from '../day5/filterArray';

it('should expect the same thing', () => {
  expect(true).toBe(true);
  let numss = [1, 2, 9];
  let res1 = filterArray(numss, (thing) => thing !== 9);
  let notApple = new RegExp('^((?!apple).)*$');
  let notRed = new RegExp('^((?!red).)*$');
  let arrOfFruits = [
    {
      name: 'banana',
      color: 'yellow',
    },
    {
      name: 'apple',
      color: 'red',
    },
    {
      name: 'apple pie',
      color: 'blue',
    },
    {
      name: 'avocado apple',
      color: 'green',
    },
  ];
  let res2 = filterArray(arrOfFruits, (fruit) => notApple.test(fruit['name']));
  expect(res1).toEqual([1, 2]);
  expect(res2).toEqual([
    {
      name: 'banana',
      color: 'yellow',
    },
  ]);
  let res3 = filterArray(arrOfFruits, (fruit) => notRed.test(fruit['color']));
  expect(res3).toHaveLength(3);
});
