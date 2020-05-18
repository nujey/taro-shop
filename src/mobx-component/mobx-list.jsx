import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { observable, computed, action, configure } from 'mobx'
import { View } from '@tarojs/components'
// import { computed } from 'mobx'
configure({ enforceActions: 'observed' })
@inject('counterStore')
@observer
class MobxListClass extends Component {
  @observable title = '1'
  @observable todos = [{id: 1, status: false}, {id: 2, status: true}]

  @computed get unfinishedList() {
    return this.todos.filter(todo => todo.status)
  }

  @action.bound
  handlePushTodo() {
    const obj = {id: this.title, status: true}
    this.todos.push(obj)
  }
  render() {
    return (
      <View>
        list{this.title} ~ {this.unfinishedList.length}
        <View onClick={this.handlePushTodo}>点击新增数组</View>
      </View>
    )
  }
}

export { MobxListClass }
