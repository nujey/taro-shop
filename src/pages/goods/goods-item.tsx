import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

@inject('mobxListStore')
@observer
const GoodItem = (props) => {
  const [status, setStatus ] = useState(false)
  console.log(props)
  return (
    <View>good-item111222{status}</View>
  )
}

export default GoodItem
