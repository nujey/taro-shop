import { observable, action } from 'mobx'

/**
 * sebastien
 * work:
 *  @observable 使用此标签监控要检测的数据
 *  @action 监控数据改变的自定义方法
 */
class messageStore {
  @observable msgCount = 0
  @observable msgList:Array<any> = []

  @action
  setMsgList = (list: Array<object>) => {
    this.msgList = list
  }

  @action.bound
  addMsgItem = (item) => {
    this.msgList.push(item)
  }
  
  @action
  removeMsgItem = (item) => {
    const list = this.msgList.filter(i => i.id !== item.id)
    this.setMsgList(list)
  }

  @action
  getMsgCount = () => {
    return this.msgCount
  }
}
// const messageStore = observable({
//   message: 111
// })

export default messageStore