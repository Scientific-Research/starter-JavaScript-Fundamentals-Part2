const name = "Jonas";

let a = 0;
while (a <= 100) {
  // console.log(second());
  const second = () => {
    var c = 2;
    return c;
  };
  const first = () => {
    // let a = 1;
    const b = second();
    a = a + b;
    return a;
  };
  console.log(first());
}
