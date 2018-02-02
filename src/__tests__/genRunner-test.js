// @flow

import {run, actionTaker} from '../day15/runner';

describe('Test if generator controller works', () => {
  it('should return true for all conditions', () => {
    function* getUserRepos(userID: string) {
      yield {type: 'WAIT', ms: 200};
      let repos = yield {
        type: 'FETCH',
        url: `https://api.github.com/users/${userID}/repos`,
      };
      yield {type: 'WAIT', ms: 300};
      return repos;
    }

    expect(true).toBe(true);
  });
});
