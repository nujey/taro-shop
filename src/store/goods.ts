import { observable, computed, action } from "mobx"
import { goodsList } from './map'
class GoodItem {
  id: number | string
  name: string
  status?: number
}
class GoodStore {
  @observable goods: Array<GoodItem> = goodsList
  @observable goodType: number = 1
  @observable currentGood: Array<GoodItem> = this.goods.filter(e => e.status === this.goodType)
  @computed
  get currentGoodItemOne(): Array<GoodItem> {
    return this.goods.filter(e => e.status === 1) || []
  }
  @computed
  get currentGoodItemTwo(): Array<GoodItem> {
    return this.goods.filter(e => e.status === 2) || []
  }
  /**
   * 筛选列表
   * @param type 
   */
  @action.bound
  changeGoodType(type) {
    this.goodType = type
    this.currentGood = this.goods.filter(e => e.status === this.goodType)
  }
  /**
   * 添加商品列表
   * @param item 
   */
  @action.bound
  setgoods(item) {
    this.goods.push(item)
  }
  /**
   * 删除商品选项
   * @param index
   */
  @action.bound
  removeGoodItem(index) {
    this.goods.splice(index, 1)
    this.currentGood = this.goods.filter(e => e.status === this.goodType)
  }
}

export default new GoodStore()