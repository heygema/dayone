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

export default createCallLogger;
