// @flow
/*eslint-disable no-unused-vars*/
type Data = {
  [string]: Object,
};

type DataCriteria = {
  color: string,
  calorie: string,
};

type Fn = Data => string;

class DataStore {
  data: Data = {};

  get(key: string) {
    return this.data[key];
  }
  set(key: string, value: DataCriteria) {
    this.data[key] = value;
  }

  forEach(fn: DataCriteria => mixed) {
    let keys: Array<string> = Object.keys(this.data);
    for (let key of keys) {
      console.log(fn(this.data[key]));
    }
  }
}

console.log(`
    -----------------
    TEST LOG FOR DATA STORE
    ------------------
    `);

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

console.log(d.data);
console.log(d.get('banana'));

function goal() {
  return 'GOAL !';
}

// function showLength(thing: string) {
//   return 'the length is ' + thing.length;
// }

function showColor(thing: DataCriteria) {
  return 'the color is ' + thing['color'];
}

// function showColorAndItem(item: string, thing: Object) {
//   return 'the color of ' + item + 'is' + thing['color'];
// }

d.forEach(goal);
d.forEach(showColor);

export default DataStore;
