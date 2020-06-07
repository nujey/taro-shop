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
  componentWillReceiveProps() {
    // console.log(111)
  }
  componentWillMount() {
    console.log(222)
  }
  handleRemove = (i) => {
    const { goodStore } = this.props
    goodStore.removeGoodItem(i)
  }
  currentGoodList = () => {
    const { goodStore: { currentGoodItemOne, currentGoodItemTwo } } = this.props
    if (this.state.tabIndex === 1) {
      return currentGoodItemOne.map(item => <GoodItem kg={item.name} key={item.id} handleRemove={this.handleRemove} />)
    } else {
      currentGoodItemTwo.map(item => <GoodItem kg={item.name} key={item.id} handleRemove={this.handleRemove} />)
    }
  }
  render() {
    // let currentGoodList;
    const { goodStore: { currentGoodItemOne, currentGoodItemTwo } } = this.props
    // if (this.state.tabIndex === 1) {
    //   currentGoodList =  currentGoodItemOne.map(item => <GoodItem kg={item.name} key={item.id} handleRemove={this.handleRemove} />)
    // } else {
    //   currentGoodList = currentGoodItemTwo.map(item => <GoodItem kg={item.name} key={item.id} handleRemove={this.handleRemove} />)
    // }
    return (
      <View>
        <View className="tab-topper">
          {
            this.state.tabs.map(item => <TopperTab tab={item} key={item.id} handleTabItem={this.handleTabItem} tabIndex={this.state.tabIndex} />)
          }
        </View>
        <View className="good-list">
          {
            currentGoodItemOne.map(item => <TopperTab tab={item} key={item.id} />)
          }
          {
            currentGoodItemOne.map(item => <GoodItem kg={item.name} key={item.id} handleRemove={this.handleRemove} />)
          }
          {/* {currentGoodList} */}
        </View>
      </View>
    )
  }
}

export default goodsList
