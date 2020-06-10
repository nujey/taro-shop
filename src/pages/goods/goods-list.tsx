import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import TopperTab from './topper-tab'
import './goods.scss'
import { inject, observer } from '@tarojs/mobx'
import GoodItem from './goods-item'
interface P {
  goodStore
}
interface S {
  tabs
  tabIndex
}
@inject('goodStore')
@observer
class goodsList extends Taro.Component<P, S> {
  state = {
    tabs: [{ id: 1, name: '待支付' }, { id: 2, name: '已付款' }],
    tabIndex: 1
  }
  // 切换tab的时候
  handleTabItem = (id) => {
    this.setState({
      tabIndex: id
    })
    this.props.goodStore.changeGoodType(id)
  }
  handleRemove = (i) => {
    const { goodStore } = this.props
    goodStore.removeGoodItem(i)
  }
  render() {
    const { goodStore: { currentGood, currentGoodItemOne, currentGoodItemTwo }} = this.props
    return (
      <View>
        <View className="tab-topper">
          {
            this.state.tabs.map(item => <TopperTab tab={item} key={item.id} handleTabItem={this.handleTabItem} tabIndex={this.state.tabIndex} />)
          }
        </View>
        <View className="good-list">
          {
            currentGood.map((item, index) => <GoodItem kg={item.name} idx={index} key={item.id} handleRemove={this.handleRemove} />)
          }
          {/* {
            this.state.tabIndex === 1 ?
              currentGoodItemOne.map((item, index) => <GoodItem kg={item.name} idx={index} key={item.id} handleRemove={this.handleRemove} />)
              :
              currentGoodItemTwo.map((item, index) => <GoodItem kg={item.name} idx={index} key={item.id} handleRemove={this.handleRemove} />)
          } */}
        </View>
      </View>
    )
  }
}

export default goodsList
