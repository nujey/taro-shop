import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components';
export interface Props {
  name: string;
  level?: number;
}

interface State {
  currentLevel: number
}

class Hello extends Component <Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { currentLevel: props.level || 1 }
  }
  onIncrement = () => this.updateLevel(this.state.currentLevel + 1);
  onDecrement = () => this.updateLevel(this.state.currentLevel - 1);

  updateLevel(level: number) {
    this.setState({
      currentLevel: level
    })
  }
  render() {
    const { name } = this.props
    return (
      <View className='hello'>
        <View className='greeting'>
          Hello! { name + getFormatNumber(this.state.currentLevel)}
        </View>
        <Button onClick={this.onDecrement}>-</Button>
        <Button onClick={this.onIncrement}>+</Button>
      </View>
    )
  }
}
function getFormatNumber(num: number) {
  return Array(num + 1).join('!')
}

export default Hello
