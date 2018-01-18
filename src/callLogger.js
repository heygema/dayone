// @flow
/*eslint-disable no-unused-vars*/

type Call = {
  type: 'MISSED' | 'INCOMING' | 'OUTGOING',
  number: string,
  timestamp: string,
};

type DateFunction = () => string;

let defaultTime = () => new Date().toISOString();

let createCallLogger = (createDate: DateFunction = defaultTime) => {
  let logs: Array<Call> = [];

  let getRecent = () => logs;
  console.log(typeof createDate());
  let add = (typical: 'MISSED' | 'INCOMING' | 'OUTGOING', number: string) => {
    let obj: Call = {
      type: typical,
      number: number.toString(),
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
  number: '123',
};

let call2 = {
  type: 'MISSED',
  number: '9232',
};

let call3 = {
  type: 'OUTGOING',
  number: '343',
};
cL.add(call1.type, call1.number);
cL.add(call2.type, call2.number);
cL.add(call3.type, call3.number);
console.log(cL.getRecent());

export default createCallLogger;
