// @flow
/*eslint-disable no-unused-vars*/

type DataCriteria = {
  color: string,
  calorie: string,
};

type Data = {
  [string]: DataCriteria,
};

type Fn = (key: string, value: mixed) => mixed;

class DataStore {
  data: Data = {};

  get(key: string) {
    return this.data[key];
  }
  set(key: string, value: DataCriteria) {
    this.data[key] = value;
  }

  forEach(fn: Fn) {
    let keys: Array<string> = Object.keys(this.data);
    for (let key of Object.keys(this.data)) {
      let value = this.data[key];
      fn(key, value);
    }
  }
}

// console.log(`
//     -----------------
//     TEST LOG FOR DATA STORE
//     ------------------
//     `);

// let d = new DataStore();

// let bananaCriteria = {
//   color: 'yellow',
//   calorie: '160kcal',
// };

// let appleCriteria = {
//   color: 'red',
//   calorie: '90kcal',
// };

// let chocoCriteria = {
//   color: 'dark',
//   calorie: '200kcal',
// };

// d.set('banana', bananaCriteria);
// d.set('apple', appleCriteria);
// d.set('chocolate', chocoCriteria);

// console.log(d.data);
// console.log(d.get('banana'));

// function goal() {
//   return 'GOAL !';
// }

// function showLength(thing: string) {
//   return 'the length is ' + thing.length;
// }

// function showColor(thing: DataCriteria) {
//   let title = 'none';
//   return 'the color of ' + title + ' is ' + thing['color'];
// }

// function showColorAndItem(item: string, thing: Object) {
//   return 'the color of ' + item + 'is' + thing['color'];
// }

// d.forEach(showColor);

export default DataStore;
