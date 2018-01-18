import DataStore from '../day4/DataStore';

it('should expect to be right', () => {
  let d = new DataStore();
  d.set('banana', 'enak');
  d.set('apple', 'tidak enak');

  console.log(d.data);

  function goal() {
    return 'GOAL !';
  }

  function showLength(thing) {
    return thing.length;
  }

  d.forEach(goal);
  d.forEach(showLength);

  expect(true).toBe(true);
});
