import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { observable, computed, action, configure } from 'mobx'
import { View, Text } from '@tarojs/components'

import './mobx-list.scss';

configure({ enforceActions: 'observed' })
@inject('counterStore')
@inject('messageStore')
@observer
class MobxListClass extends Component {
  @observable title = '1'
  @observable todos = []

  @computed get unfinishedList() {
    return this.todos.filter(todo => todo.status)
  }

  @action.bound
  handlePushTodo() {
    this.props.person.name = 'JS组件'
    const obj = {id: this.title, status: true}
    this.todos.push(obj)
  }
  @action.bound
  handleInput(e) {
    this.title = e.target.value
  }
  render() {
    return (
      <View>
        <input type="text" value={this.title} onChange={this.handleInput}/>
        <View onClick={this.handlePushTodo}>点击新增数组</View>
        <View>
          {
            this.unfinishedList.map(item => <Text className="list-item">{item.id}</Text>)
          }
        </View>
      </View>
    )
  }
}

export { MobxListClass }
