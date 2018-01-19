// @flow

type StudentDict = {[string]: Object};

let test2: StudentDict = {
  [1]: {firstName: 'Tony', lastName: 'Stark'},
  [2]: {firstName: 'Captain', lastName: 'America'},
};

console.log(test2);
