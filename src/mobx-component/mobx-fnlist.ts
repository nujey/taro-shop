/**
 * 函数式组件的mobx写法
 */
import Taro from '@tarojs/taro'
import { observer } from '@tarojs/mobx'
import { observer,action, computed, observable } from 'mobx'
import { View } from '@tarojs/components'
// mobx taro版本 的暂时不支持
// const MobxListFun = observable(({ person }) => {

//   return (
//     <View>
//       2222
//     </View>
//   )
// })

const MobxListFun = ({ person }) => {
  return (
    <View>111</View>
  )
}

export default MobxListFun