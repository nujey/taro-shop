import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import className from 'classnames'
import GoodsItem from './goods-item.tsx'
class goodsList extends Taro.Component {
  render() {
    return (
      <View>
        <GoodsItem />
      </View>
    )
  }
}

export default goodsList
