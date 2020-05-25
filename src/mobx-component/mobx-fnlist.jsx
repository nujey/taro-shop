/**
 * 函数式组件的mobx写法
 */
import Taro from '@tarojs/taro'
// import { observer } from '@tarojs/mobx'
// import { observer,action, computed, observable } from 'mobx'
import { View } from '@tarojs/components'
import { observer } from '@tarojs/mobx'
// mobx taro版本 的暂时不支持
const MobxListFun = () => {
  console.log(2222)
  return (
    <View>
      <Text>2222</Text>
    </View>
  )
}

export default MobxListFun