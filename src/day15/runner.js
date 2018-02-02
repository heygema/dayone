// @flow

import fetch from 'node-fetch';

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
  // it want this
  //   return repos.map((repo) => repo.name);
}

function procedure(action: Action) {
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

function run(generatorFunc: Generator<any, any, any>) {
  let gen = generatorFunc;
  let runGenerator = (aThing) => {
    let a = gen.next(aThing);
    if (a.done) {
      return a.value;
    }
    let action = procedure(a.value);
    return runGenerator(action);
  };
  return runGenerator();
}

let promise: Promise<any> = run(getUserRepos('sstur'));

if (promise) {
  promise.then((data) => {
    console.log('the title :', data.map((item) => item.name));
  });
}
