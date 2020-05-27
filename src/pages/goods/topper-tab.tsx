/// <reference path="../../../global.d.ts"/>

import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

class PropsType {
  id: any
  name: string
}
interface P {
  tab: PropsType
}

function TopperTab(props: P): JSX.Element {
  const { tab } = props
  return <View>{ tab.name }111</View>
}

export default TopperTab
