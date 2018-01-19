let compareObjects = (a, b) => {
  let keys = Object.keys(a);
  for (let i of keys) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

export default compareObjects;
