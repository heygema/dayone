let fs = require('fs');

// fs.readdir('./', (err, res) => {
//   if (err) {
//     throw err;
//   }
//   let arr = res.map((x) => fs.statSync(x).size);
//   let sum = 0;
//   for (let i of arr) {
//     sum += i;
//   }
//   console.log(sum);
// });

function countSum() {
  fs.readdir('./', (err, res) => {
    if (err) {
      throw err;
    }
    let result = 0;
    for (let file of res) {
      fs.stat(file, (err, stat) => {
        if (err) {
          console.log('error', err);
        }
        let isTheEndOfArray = res[res.length - 1] === file;
        result += stat.size;

        console.log('result', stat.size);
        if (isTheEndOfArray) {
          console.log(result);
        }
      });
    }
    // let remainingCall = res.length;

    // let something = res.reduce((acc, item, currentIndex, currentArray) => {
    //   fs.stat(item, (err, stat) => {
    //     if (err) {
    //       console.error(err);
    //     }
    //     acc += stat.size;
    //     return acc;
    //   });
    // }, 0);

    // console.log('something', something);
    // res.forEach((x) => {
    //   fs.stat(x, (err, stat) => {
    //     if (err) {
    //       throw err;
    //     } else {
    //       total += stat.size;
    //       console.log('INSIDE', total);
    //     }
    //   });
    // });
  });
  //   console.log(total);
}
countSum();

// export default callBack;
