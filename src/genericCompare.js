// @flow
// *eslint

export let genCompare = (a: mixed , b: mixed) => {
  if (typeof a === typeof b) {
    let typos = typeof a;
    switch(typeof a) {
      // case 'string': {
      //   return a === b;
      // }
      // case 'number': {
      //   return a === b;
      // }
      case 'object': {
        if ( Array.isArray(a) === Array.isArray(b) ) {
          if (Array.isArray(a)) {
            // this is array block
            if (Array.isArray(b)) {
              if (a.length === b.length) {
                 for (let i=0;i<a.length;i++) {
                   if (genCompare(a[i], b[i]) === false) {
                     return false;
                   }
                   else { return true; }
                 }
              } else { return false; }
            }
          } else {
            // this is object block
            if (a !== null && b !== null) {
            let keysa: Array<string> = Object.keys(a);
            let keysb: Array<string> = Object.keys(b);
            if (keysa.length !== keysb.length) {
              return false;
            } else {
            for(let key of keysa) {
              if(genCompare(a[key], b[key]) === false ) {
                return false;
              } else { return true; }
            }
          }
          }
            return true;
          }
        }
        return false;
      }
      default: {
        return a === b;
      }
    }
  }
  return false;
}
