export default {
  namespace: 'mine',
  state: {
    count: 1
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id)
    }
  }
}
