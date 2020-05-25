import { observable, action, computed } from 'mobx'

class OrderItem {
  id: number | string
  status: boolean
}
class mobxListStore {
  // title: '',
  // todos: [],
  // unfinishedList: []
  @observable title:string = ''
  @observable status:boolean = false
  @observable todos:Array<OrderItem> = []

  @computed
  get unfinishedList():Array<OrderItem> {
    return this.todos.filter(item => item.status) || []
  }

  @action.bound
  handleCheckBox = (e) => {
    console.log(e)
    this.status = e.target.checked
  }
  @action.bound
  setList = (list) => {
    this.todos = list
  }

  @action.bound
  addItem = () => {
    console.log(this.unfinishedList)
    this.todos.push({id: this.title, status: this.status})
  }
  
  @action.bound
  removeItem = (item) => {
    const list = this.todos.filter(i => i.id !== item.id)
    this.setList(list)
  }
}

export default new mobxListStore()
