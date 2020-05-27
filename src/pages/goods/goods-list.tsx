import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import className from 'classnames'
import GoodsItem from './goods-item'
import TopperTab from './topper-tab'
import './goods.scss'
import { inject, observer } from '@tarojs/mobx'
// @inject('')
@observer
class goodsList extends Taro.Component {
  state = {
    tabs: [{id: 1, name:'待支付'}, {id: 2, name: '已付款'}]
  }
  render() {
    return (
      <View>
        <View className="tab-topper">
          {
            this.state.tabs.map(item => <TopperTab tab={item}/>)
          }
        </View>
        {/* <GoodsItem item={item}/> */}
      </View>
    )
  }
}

export default goodsList
