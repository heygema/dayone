import createCallLogger from '../callLogger';

it('test', () => {
  expect(true).toBe(true);
  let cL = createCallLogger();
  let call1 = {
    type: 'INCOMING',
    number: 123,
  };

  let call2 = {
    type: 'MISSED',
    number: 92389284,
  };

  let call3 = {
    type: 'OUTGOING',
    number: 7937593,
  };
  cL.add(call1.type, call1.number);
  cL.add(call2.type, call2.number);
  cL.add(call3.type, call3.number);
  let recentCall = cL.getRecent();
  expect(recentCall).toHaveLength(3);
  expect(recentCall).toBeInstanceOf(Array);
  let recentCallFiltered = recentCall.map((call) => {
    let {type, number, timestamp} = call;
    return {type, number, timestamp: typeof timestamp};
  });
  expect(recentCallFiltered[0]).toEqual({
    type: 'INCOMING',
    number: '123',
    timestamp: 'string',
  });
});
