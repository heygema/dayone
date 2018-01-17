// @flow
/*eslint-disable no-unused-vars*/

// let r = new RegExp('(?=S*[a-z])(?=S*[A-Z])(?=S*d)(?=S*([^ws]|[_]))S{6,}$');

let checkPass = (pass: string) => {
  function checkLength() {
    return pass.length > 6;
  }
  function checkLower() {
    let countSmall = 0;
    for (let i of pass) {
      if (i === i.toLowerCase()) {
        countSmall++;
      }
    }
    return countSmall > 1;
  }
  function checkUpper() {
    let countUpper = 0;
    for (let i of pass) {
      if (i === i.toUpperCase()) {
        countUpper++;
      }
    }
    return countUpper > 1;
  }
  let success = () => {
    return checkLength() && checkUpper() && checkLower();
  };
  let reason = () => {
    let result = [];
    if (checkLength() === false) {
      result.push('too short');
    }
    if (checkUpper() === false) {
      result.push('only one upper case');
    }
    if (checkLower() === false) {
      result.push('only one lower case');
    }
    if (checkLength() && checkUpper() && checkLower()) {
      result.push('password is okay');
    }
    return {stringType: result.join(', '), arrayType: result};
  };
  return {
    success: success(),
    reason: reason(),
    pass,
  };
};

export default checkPass;

// rough test
// let {success, reason} = checkPass('huamM908234');
// console.log(success, reason);
