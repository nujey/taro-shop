import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { observable, computed, action, configure } from 'mobx'
import { View, Text, Checkbox, Button, Input } from '@tarojs/components'
import './mobxlist.scss';
configure({ enforceActions: 'observed' })
@inject('counterStore')
// @inject('messageStore')
@inject('mobxListStore')

@observer
class MobxListClass extends Component {
  @action.bound
  handleInput(e) {
    this.props.mobxListStore.title = e.target.value
  }
  @action.bound
  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }
  addItem = () => {
    const { mobxListStore, counterStore } = this.props
    this.increment()
    mobxListStore.addItem()
  }
  clearItem = () => {
    const { mobxListStore } = this.props
    mobxListStore.clearItem()
  }
  handleCheckBox = () => {
    const { mobxListStore } = this.props
    mobxListStore.handleCheckBox()
  }
  render() {
    const { mobxListStore: { title, unfinishedList } } = this.props
    const { counterStore: { count } } = this.props
    return (
      <View>
        {count}
        <View className="add-flex">
          <Input type="text" className="list-name" value={title} onChange={this.handleInput}/>
          <Checkbox onChange={this.handleCheckBox}></Checkbox>
        </View>
        <Button onClick={this.addItem} className="add-item">点击新增数组</Button>
        <Button onClick={this.clearItem} className="add-item">清空数组</Button>
        <View>
          {
            unfinishedList.map(item => <View className="list-item">{item.id}</View>)
          }
        </View>
      </View>
    )
  }
}

export { MobxListClass }
