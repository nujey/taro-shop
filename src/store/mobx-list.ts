import { observable, action, computed } from 'mobx'

class OrderItem {
  id: number | string
  status: boolean
}
class mobxListStore {
  @observable title:string = ''
  @observable status:boolean = false
  @observable todos:Array<OrderItem> = []

  @computed
  get unfinishedList():Array<OrderItem> {
    return this.todos.filter(item => !item.status) || []
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
    this.todos.push({id: this.title, status: this.status})
  }
  
  @action.bound
  removeItem = (item) => {
    const list = this.todos.filter(i => i.id !== item.id)
    this.setList(list)
  }

  @action.bound
  clearItem = (item) => {
    // const list = await getList()
    this.setList(item)
  }
}

export default new mobxListStore()
