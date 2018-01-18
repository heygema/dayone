import createCallLogger from '../callLogger';

it('test', () => {
  expect(true).toBe(true);
  let cL = createCallLogger();
  let call1 = {
    type: 'INCOMING',
    number: 92389284,
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

  expect(cL.logs).toHaveLength(3);
});
