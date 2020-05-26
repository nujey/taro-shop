import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

const GoodItem = () => {
  const [status, setStatus ] = useState(false)
  console.log(status)
  return (
    <View>good-item111222{status}</View>
  )
}

export default GoodItem
