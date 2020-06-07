import { observable, computed, action } from "mobx"
import { goodsList } from './map'
class GoodItem {
  id: number | string
  name: string
  status?: number
}
class GoodStore {
  @observable goodList: Array<GoodItem> = goodsList
  @observable goodType: number = 1
  @computed
  get currentGoodItemOne(): Array<GoodItem> {
    return this.goodList.filter(e => e.status === 1) || []
  }
  get currentGoodItemTwo(): Array<GoodItem> {
    return this.goodList.filter(e => e.status === 2) || []
  }
  /**
   * 筛选列表
   * @param type 
   */
  @action.bound
  changeGoodType(type) {
    this.goodType = type
    console.log(this.goodList.length, this.currentGoodItemTwo.length)
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
  @action.bound
  removeGoodItem(index) {
    console.log(index)
    this.goodList = this.goodList.filter(item => item.id !== index)
  }
}

export default new GoodStore()