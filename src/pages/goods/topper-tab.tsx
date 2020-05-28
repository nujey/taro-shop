/// <reference path="../../../global.d.ts"/>

import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

class PropsType {
  id: any
  name: string
}
interface P {
  tab: PropsType
}

function TopperTab(props: P): JSX.Element {
  const { tab } = props
  return <View>{ tab.name }</View>
}

export default TopperTab



// interface ClockConstructor {
//   new (hour:number, min:number): ClockInterface
// }
// interface ClockInterface {
//   tick()
// }

// function createClock(ctor: ClockConstructor, hour:number, minute:number): ClockInterface {
//   return new ctor(hour, minute)
// }

// class DigitalClock implements ClockInterface {
//   constructor(h:number, m:number) {}
//   tick() {}
// }

// let digital = createClock(DigitalClock, 12, 17)

// class A implements ClockInterface {
//   constructor(h:number, m: number) {}
// }

// interfaceA extends interfaceB