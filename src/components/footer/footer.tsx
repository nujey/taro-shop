// import { Component } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ReactNode } from 'react'

export interface Props {
  name: string,
  readonly renderFooter?:  ReactNode
}
class Footer extends Component<Props, object> {
  render() {
    const { name } = this.props
    return (
      <View className='footer'>
       {name} ~ {this.props.renderFooter}
      </View>
    )
  }
}

export default Footer
