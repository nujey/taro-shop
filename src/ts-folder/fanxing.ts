function identity1<T>(arg:T): T {
  console.log(arg.length)
  return arg
}

function identity2<T>(arg: T[]): T[] {
  return arg
}

function logIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}

function text<T>(arg: T): T {
  return arg
}

interface GenericFn {
  <T>(arg: T): T
}

function identity<T>(arg: T) {
  return arg
}

let myIdentity: GenericFn = identity

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
let myGenericString = new GenericNumber<string>();

myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };