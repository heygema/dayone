// @flow

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, ms);
  });
}

let promise = sleep(1000);

promise.then((item) => console.log(item));
