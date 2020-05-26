import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { observable, computed, action, configure } from 'mobx'
import { View, Button } from '@tarojs/components';
// import './mobxlist.scss';
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
@observer
class MobxListClassTs extends Component<Props, {}> {
  @observable private title:string = '1'
  @observable private todos:Array<TodoItem> = []

  @computed get unfinishedList():Array<TodoItem> {
    return this.todos.filter(todo => todo.status)
  }

  @action.bound
  handlePushTodo():void {
    this.props.person.name = 'TS组件'
    const obj = {id: this.title, status: true}
    this.todos.push(obj)
  }
  render() {
    return (
      <View>
        <Button className="add-item" onClick={this.handlePushTodo}>点击新增数组</Button>
      </View>
    )
  }
}

export { MobxListClassTs }
