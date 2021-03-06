import fetch from 'node-fetch';
// @flow

type Action =
  | {
      type: 'WAIT',
      ms: number,
    }
  | {
      type: 'FETCH',
      url: string,
    };

function* getUserRepos(userID: string) {
  yield {type: 'WAIT', ms: 200};
  let repos = yield {
    type: 'FETCH',
    url: `https://api.github.com/users/${userID}/repos`,
    // just in case got throttled
    // url: 'http://jsonplaceholder.typicode.com/posts/1',
  };

  yield {type: 'WAIT', ms: 300};

  return repos;
  // should return this actually though ..
  //   return repos.map((repo) => repo.name);
}

function* generator2() {
  yield 'haha this is useless';
  yield 'just for testing';
  return 'hahaha generator2 is terminated';
}

function wrap(genFunc) {
  return (...args) => {
    run(genFunc(...args));
  };
}

export function actionTaker(action: Action) {
  switch (action.type) {
    case 'WAIT': {
      setTimeout(() => console.log('Waiting...'), action.ms);
      return 'waiting...';
    }
    case 'FETCH': {
      return fetch(action.url).then((res) => res.json());
    }
    default: {
      break;
    }
  }
}

export function run(generatorFunc: Generator<any, any, any>) {
  let iterator = generatorFunc;
  let runGenerator = (aThing: any) => {
    let a = iterator.next(aThing);
    if (a.done) {
      return a.value;
    }
    let somethingProducedByAction = actionTaker(a.value);
    return runGenerator(somethingProducedByAction);
  };
  return runGenerator();
}

let promise: Promise<any> = run(getUserRepos('sstur'));

let gen2 = run(generator2());

console.log('generator2 returns', gen2);

if (promise) {
  promise.then((data) => {
    console.log('the titles :', data.map((item) => item.name));
  });
}
