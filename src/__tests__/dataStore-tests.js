import DataStore from '../day4/DataStore';

it('should expect to be right', () => {
  let d = new DataStore();

  let bananaCriteria = {
    color: 'yellow',
    calorie: '160kcal',
  };

  let appleCriteria = {
    color: 'red',
    calorie: '90kcal',
  };

  let chocoCriteria = {
    color: 'dark',
    calorie: '200kcal',
  };

  d.set('banana', bananaCriteria);
  d.set('apple', appleCriteria);
  d.set('chocolate', chocoCriteria);

  expect(true).toBe(true);
  expect(d.get('banana')).toEqual(bananaCriteria);
});
