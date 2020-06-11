import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import TopperTab from './topper-tab'
import './goods.scss'
import { inject, observer } from '@tarojs/mobx'
import { autorun, when } from 'mobx'
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
    // autorun(() => {
    //   console.log(goodStore.currentGood.length)
    // })
  }
  render() {
    const { goodStore: { currentGood, txt }} = this.props
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
        </View>
        <View>
          {txt}
        </View>
      </View>
    )
  }
}

export default goodsList
