import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

interface P {}
interface S {}
class Mine extends Taro.Component<P, S> {
  componentWillMount() {
    Taro.setNavigationBarTitle({title: '个人中心'})
  }
  render() {
    return (
      <View>个人中心</View>
    )
  }
}

export default Mine
