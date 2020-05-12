// import { Component } from 'react'
import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Footer extends Component<{renderFooter?: any}, {}> {
  constructor(props) {
    super(props)
    console.log(this.state)
  }
  render() {
    return (
      <View className="footer">
        {this.props.renderFooter}
      </View>
    )
  }
}

export default Footer
