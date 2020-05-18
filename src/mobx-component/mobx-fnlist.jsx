/**
 * 函数式组件的mobx写法
 */
import Taro from '@tarojs/taro'
import { observer } from '@tarojs/mobx'
import { action, computed, observable } from 'mobx'
import { View } from '@tarojs/components'

const MobxListFun = observer(({person}) => {
  return (
    <View>
      111
      {/* list{this.title} ~ {this.unfinishedList.length} */}
      {/* <View onClick={handlePushTodo}>点击新增数组函数式</View> */}
    </View>
  )
})

export default MobxListFun