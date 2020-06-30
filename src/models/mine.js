export default {
  namespace: 'mine',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id)
    }
  }
}
