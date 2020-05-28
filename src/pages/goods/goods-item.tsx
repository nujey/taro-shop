import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

const GoodItem = observer((props) => {
  const [status, setStatus ] = useState(false)
  console.log(props)
  return (
    <View>good-item111222{status}</View>
  )
})

export default GoodItem
