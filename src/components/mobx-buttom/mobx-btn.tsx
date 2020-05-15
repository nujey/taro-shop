import Taro, { Component } from '@tarojs/taro'
import { observer } from '@tarojs/mobx'
import { View, Button, Text, Input } from '@tarojs/components'
// interface ArrayOf<v> {
//   [_:string]: v
// }
interface Props {
  todoList: {
    todos: Array<any>
    unfinishedTodoCount: boolean
  }
}
@observer
// <Props, {}>
class TodoListView extends Component {
  render() {
    console.log(this.props.todoList.todos)
    return <View>
      <View>
        { this.props.todoList.todos.map(todo => <TodoView todo={todo} key={todo.id} />)}
      </View>
      Task left: { this.props.todoList.unfinishedTodoCount }
    </View>
  }
}
const TodoView = observer(({todo}) => {
  return <Text>
    <input type="checkout"
           checked={todo.finished}
           onClick={() => todo.finished = !todo.finished}/> {todo.title}
  </Text>
})


export default TodoListView