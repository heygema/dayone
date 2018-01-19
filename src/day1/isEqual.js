// @flow
/*eslint-disable no-unused-vars*/

let isEqual = (a: mixed, b: mixed) => {
  if (typeof a === 'string' && typeof b === 'string') {
    return a === b;
  }
};

export let isEqualObject = (a: mixed, b: mixed) => {};

export let isEqualArray = (a: mixed, b: mixed) => {};

export default isEqual;
