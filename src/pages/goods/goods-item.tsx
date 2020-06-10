import Taro from '@tarojs/taro'
import { View, Icon } from '@tarojs/components'
import './goods.scss'

interface P {
  kg: string,
  idx: number,
  handleRemove(i:number):void
}
function GoodItem(props: P):JSX.Element {
  const { kg, idx } = props
  return <View className="item-good">
      <View className="good-name">{kg}</View>
      <Icon size='20' type='clear' onClick={() => props.handleRemove(idx)}/>
    </View>
}

export default GoodItem
