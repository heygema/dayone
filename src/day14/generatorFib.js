function* fib() {
  let t = [0, 1];
  yield t[1];
  while (true) {
    let x = t[1] + t[0];
    t = [t[1], x];
    yield x;
  }
}

let gen = fib();
let a = gen.next().value;
let b = gen.next().value;
let c = gen.next().value;
let d = gen.next().value;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
