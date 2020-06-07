import { observable, action, decorate, computed } from 'mobx'

const counterStore = observable({
  counter: 0,
  get count() {
    return this.counter + 1
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
})


const appState = observable({
  timer: 0,
  get computedTimer() {
    return this.timer++
  },
  setTimer(n) {
    this.timer = n
  } 
}, {
  setTimer: action
})

class Person {
  name = 'John'
  age = 18
  get labelText() {
    return this.age > 20 ? this.age : '未成年'
  }
  setAge(age) {
    this.age = age
  }
}
decorate(Person, {
  name: observable,
  age: observable,
  labelText: computed,
  setAge: action
})


export default counterStore
