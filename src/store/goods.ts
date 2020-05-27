import { observable, computed, action } from "mobx"
class GoodItem {
  id: number | string
  name: string
  status?: boolean
}
class GoodStore {
  @observable goodList:Array<GoodItem> = [{id: 1, name: 'zhangfeng', status: false}, {id: 2, name: 'CC', status: false}]
  @computed
  get goodItem():boolean {
    return false
  }
  /**
   * 添加商品列表
   * @param item 
   */
  @action.bound
  setGoodList(item) {
    this.goodList.push(item)
  }
  /**
   * 删除商品选项
   * @param index
   */
  @action
  removeGoodItem(index) {
    this.goodList.splice(index, 1)
  }
}

export default new GoodStore()