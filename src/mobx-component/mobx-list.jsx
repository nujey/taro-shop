import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { observable, computed, action, configure } from 'mobx'
import { View, Text, Checkbox } from '@tarojs/components'

import './mobx-list.scss';

configure({ enforceActions: 'observed' })
@inject('counterStore')
@inject('messageStore')
@inject('mobxListStore')
@observer
class MobxListClass extends Component {
  @action.bound
  handleInput(e) {
    this.props.mobxListStore.title = e.target.value
  }
  render() {
    const { mobxListStore : { title, addItem, unfinishedList, handleCheckBox } } = this.props
    console.log(this.props)
    return (
      <View>
        <input type="text" value={title} onChange={this.handleInput}/>
        <Checkbox onChange={handleCheckBox}/>
        <View onClick={addItem}>点击新增数组</View>
        <View>
          {
            unfinishedList.map(item => <Text className="list-item">{item.id}</Text>)
          }
        </View>
      </View>
    )
  }
}

export { MobxListClass }
