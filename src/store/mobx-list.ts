import { observable, action, computed, runInAction } from 'mobx'
import { fetchSomeThing, fetchList } from '../api/api'
class OrderItem {
  id: number | string
  status: boolean
}
interface obj {
  data: Array<any>
  error: string
}
class mobxListStore {
  @observable title:string = ''
  @observable status:boolean = false
  @observable todos:Array<OrderItem> = []

  @computed
  get unfinishedList():Array<OrderItem> {
    return this.todos.filter(item => !item.status) || []
  }

  @action
  handleCheckBox = (e) => {
    console.log(e)
    this.status = e.target.checked
  }
  @action
  setList = (list) => {
    this.todos = list
  }

  @action
  addItem = () => {
    this.todos.push({id: this.title, status: this.status})
  }
  
  @action.bound
  removeItem(item) {
    const list = this.todos.filter(i => i.id !== item.id)
    this.setList(list)
  }

  @action.bound
  clearItem1() {
    fetchSomeThing().then(
      action('success', res => {
        this.todos = res
      }),
      action('error', error => {
        console.log(error)
      })
    )
  }

  @action
  clearItem2() {
    fetchSomeThing().then(
      res => {
        const filterRes = []
        runInAction(() => {
          this.todos = filterRes || res
        })
      },
      error => {
        runInAction(() => {
          this.title = error
        })
      }
    )
  }
  @action.bound
  async clearItem() {
    try {
      const res = await fetchSomeThing()
      runInAction(() => {
        this.todos = res.data
      })
    } catch(error) {
      this.title = error
    }
  }
}

export default new mobxListStore()
