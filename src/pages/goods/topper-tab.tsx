// / <reference path="../../../global.d.ts"/>

import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import className from 'classnames'
import './goods.scss'
// 类
class PropsType {
  id: number
  name: string
}
// 泛型接口
interface P {
  tab: PropsType,
  tabIndex: number
  handleTabItem(id: number): void
}

// interface itemInteface<T> {
//   (arg: T): void
// }
function TopperTab(props: P): JSX.Element {
  const { tab, tabIndex, handleTabItem } = props
  // const [tabIndex, setTabIndex] = useState(1)

  // 泛型类型的函数
  // const handleTabItem: <T>(arg: T) => void = () => {
  //   console.log(tabIndex)
  // }

  // const handleTabItem1: itemInteface = (id) => {
  //   console.log(id)
  // }
  // 'tab-active-item': tabIndex == tab.id
  return <View className={className({ 'tab-item': true })} onClick={() => handleTabItem(tab.id)}>{tab.name}</View>
}

export default TopperTab
