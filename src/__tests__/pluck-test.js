import pluck from '../main';

let people = [
  {name: 'Simon', age: 34},
  {name: 'John', age: 59},
  {name: 'Gary', age: 93},
];
let res = pluck(people, 'name');

xit('should pluck values', () => {
  expect(res).toEqual(['Simon', 'John', 'Gary']);
});
