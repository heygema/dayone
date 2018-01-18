// @flow
/*eslint-disable no-unused-vars*/

type Call = {
  type: 'MISSED' | 'INCOMING' | 'OUTGOING',
  number: number,
  timestamp: string,
};

let createCallLogger = () => {
  let logs: Array<Object> = [];

  let add = (typical: 'MISSED' | 'INCOMING' | 'OUTGOING', number: number) => {
    let obj: Call = {
      type: typical,
      number: number,
      timestamp: new Date().toString(),
    };
    logs.push(obj);
    return logs;
  };

  return {logs, add};
};

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
console.log(cL.logs);

export default createCallLogger;
