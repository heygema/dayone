// @flow
/*eslint-disable no-unused-vars*/

export let store = (something: number) => {
  let val;
  let initVal = (num) => (val = num);
  let incWith = (num: number) => {
    val = counter.increaseWith(num);
    return val;
  };
  let decWith = (num: number) => {
    val = counter.decreaseWith(num);
    return val;
  };

  let getVal = () => val;
  initVal(something);

  return {getVal, incWith, decWith};
};

let counter = (nval: number = 0) => {
  let val = nval;

  let getVal = () => val;

  let increaseWith = (num: number) => {
    val += num;
    return getVal();
    // if you want pure stuff
    // return val + num;
  };

  let decreaseWith = (num: number) => {
    val -= num;
    return getVal();
    // if you want pure stuff
    // return val - num;
  };

  return {getVal, increaseWith, decreaseWith};
};

export default counter;
