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
  return new Promise((resolve) => {
    let iterator = generatorFunc;
    let runIterator = (input) => {
      let a = iterator.next(input);
      if (a.done) {
        resolve(a.value);
      }
      switch (a.value.type) {
        case 'WAIT': {
          setTimeout(() => console.log('WAITING...'), a.value.ms);
          break;
        }
        case 'FETCH': {
          break;
        }
        default: {
          break;
        }
      }
    };
  });
}

let promise: Promise<any> = run(getUserRepos('sstur'));
console.log('THE PROMISE YOU GOT MAN ', promise);
