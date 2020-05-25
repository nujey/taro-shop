import { observable } from 'mobx'

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
export default counterStore