import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
// import Footer  from '../../components/footer/footer'
// import ButtonHook from '../../components/button/button'
import './index.scss'
// import Hello from '../../components/statefulBtn/statefulbtn'
// import TodoListView from '../../components/mobx-buttom/mobx-btn'
import { MobxListClass } from '../../mobx-component/mobx-list'
import MobxListFun from '../../mobx-component/mobx-fnlist'
import { observable } from 'mobx'

type PageStateProps = {
  counterStore: {
    counter: number
    increment: Function
    decrement: Function
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps
}
const person = observable({ name: 'name' })
@inject('counterStore')
@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {
    const { counterStore: { counter } } = this.props
    console.log(counter)
    return (
      <View className='index'>
        <MobxListClass person={person}/>
        <MobxListFun person={person}/>
      </View>
    )
  }
}

export default Index  as ComponentType
