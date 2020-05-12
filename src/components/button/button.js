import { useState, useCallback } from '@tarojs/taro'

function MeasureExample () {
  const [rect, ref] = useClientRect()
  return (
    <div>
      <h1 ref={ref}>111</h1>
      {
        rect !== null && <h2>The above header is {Math.round(rect.height)}px</h2>
      }
    </div>
  )
}

function useClientRect() {
  const [rect, setRect] = useState(null)
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect())
    }
    return [rect, ref]
  }, [])
}

export default MeasureExample