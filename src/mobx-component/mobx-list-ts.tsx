import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { observable, computed, action, configure } from 'mobx'
import { View } from '@tarojs/components'
interface Props {
  person: {
    name: string
  }
}
class TodoItem {
  id: number | string
  status: boolean
}
configure({ enforceActions: 'observed' })
@inject('counterStore')
@inject('messageStore')
@observer
class MobxListClassTs extends Component<Props, {}> {
  @observable private title:string = '1'
  @observable private todos:Array<TodoItem> = []

  @computed get unfinishedList():Array<TodoItem> {
    return this.todos.filter(todo => todo.status)
  }

  @action.bound
  handlePushTodo():void {
    console.log(this.props)
    this.props.person.name = 'TS组件'
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

export { MobxListClassTs }
