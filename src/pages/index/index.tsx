import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'
import { MobxListClass } from '../../mobx-component/mobx-list'
import {  MobxListClassTs } from '../../mobx-component/mobx-list-ts'
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
  handleGoodsList() {
    Taro.navigateTo({
      url: '../goods/goods-list?from=首页'
    })
  }
  render () {
    const { counterStore: { counter } } = this.props
    console.log(counter)
    return (
      <View className='index'>
        <MobxListClass person={person}/>
        <View className="goods-list" onClick={this.handleGoodsList}>商品列表</View>
      </View>
    )
  }
}

export default Index  as ComponentType
