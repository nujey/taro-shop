import Taro, { useState, useCallback, useRef } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './button.scss'

function useClientRect() {
  const [rect, setRect1] = useState(0)
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect())
    }
    return [rect, setRect]
  }, [])
}

function ButtonHook () {
  const [rect, setRect] = useState(0)
  const ref = useRef({})
  const query = Taro.createSelectorQuery().in(this.$scope)
  const onButtonClick = () => {
    query.select('.button').boundingClientRect(rec => {
      setRect(rec.width)
    }).exec()
  }
  return (
    <View>
      <View ref={ref} className='button'>button</View>
      <View onClick={onButtonClick}>test</View>
      {
        rect !== null && <View>The above header is {Math.round(rect)}px</View>
      }
    </View>
  )
}

export default ButtonHook