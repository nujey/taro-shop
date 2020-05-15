/**
 * interface 的各种写法
 * interface 是一种描述对象或函数的东西，可以理解为形状 用来约束我们定义的数据的
 */

// 对象的interface
interface Person {
  name: string // 普通属性
  bool?: boolean // 可选属性
  readonly timestamp: number // 只读属性
  readonly arr: ReadonlyArray<object> // 只读数组 不允许赋值
  arr2?: Array<number>
  [propsName: string]: any // u can add extra properties
  // map: ReadonlyMap<object>
  // set: ReadonlySet
}
var p1: Person = {
  name: '111',
  timestamp: 444,
  arr: [{'a': 1}]
}

// 函数的interface
/**
 * 
 */
interface Func {
  (x: number, y: number, desc?: string): void
}
const sum: Func = function(x, y) {
  return x + y
}

/**
 * 可索引类型的interface
 */
interface StringSet {
  readonly [index: number]: string
  length: number
}

let arr: StringSet = ['a', 'b']
arr[1] = '' // error because the arr is readonly

/**
 * 类的interface
 */
interface Func {
  (x: number, y: string, desc?: boolean): boolean
}
// 检查静态属性和方法
interface PersonConstructor {
  new (name: string, age: number)
  typename: string
  logname(x: number): void
}
// 检查实例属性和方法
interface PersonInterface1 {
  log(): void
}
// 检查实例属性和方法
interface PersonInterface2 {
  time: Date,
}
const Person: PersonConstructor = class Person implements PersonInterface1, PersonInterface2 {
  name: string
  age: number
  static typename
  static logname() {
    return true
  }
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  // 实例的属性和方法
  time: Date
  log(){
    console.log(this.name, this.age)
  }
}
/**
 * interface的继承
 */
interface FatherInterface {
  name: string
  age: number
}

interface p1 extends FatherInterface {
  dop1(): boolean
}
interface p2 extends FatherInterface {
  dop2(): void
}

let child1: p1 = {
  name: '2',
  age: 2,
  dop1() {
    return true
  }
}

/**
 * 混合类型的接口
 */
interface Counter {
  (start: number): void //  如果只有这一个 那么这个接口是函数接口
  add(): void // 这里还有一个方法 代表接口是混合接口
  log(): number // 
}

function getCounter(): Counter {
  let count = 0
  function counter( start: number) {
    count = start
  }
  counter.add = function() { count++ }
  counter.log = function() { return count }
  return counter
}

/**
 * 继承类的interface
 */
class Father {
  type: string
}
interface Child extends Father {
  log(): void
  // 这里其实有一个type: string
}
// 第一种写法
class Girl implements Child {
  type: 'child'
  log() {}
}
// 第二种写法
class Boy extends Father implements Child{
  type: 'child'
  log() {}
}

/**
 * 定义类型
 */
interface ObjectOf<V> {
  [_: string]: V
}
class OrderItem {
  uuid: string;
  amount: number;
  secondaryTotal: number;
  total: number;
  originalTotal: number;
  checked: boolean;
}

interface State {
  promoList: {
    giftCheck: ObjectOf<OrderItem>
    freeCheck: Array<OrderItem>
  }
}


