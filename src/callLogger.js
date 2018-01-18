// @flow
/*eslint-disable no-unused-vars*/

type Call = {
  type: 'MISSED' | 'INCOMING' | 'OUTGOING',
  number: string,
  timestamp: string,
};

type DateFunction = () => string;

let createCallLogger = (
  createDate: DateFunction = () => new Date().toISOString()
) => {
  let logs: Array<Object> = [];

  let getRecent = () => logs;

  let add = (typical: 'MISSED' | 'INCOMING' | 'OUTGOING', number: string) => {
    if (typeof number !== 'string') {
      number = number.toString();
    }
    let obj: Call = {
      type: typical,
      number: number,
      timestamp: createDate(),
    };
    logs.push(obj);
    return logs;
  };

  return {getRecent, add};
};

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
console.log(cL.getRecent());

export default createCallLogger;
