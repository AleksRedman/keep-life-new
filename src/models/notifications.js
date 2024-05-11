export default {
  namespace: 'notifications',

  state: {
    notificationsDrawerVisible: false
  },

  reducers: {
    handleNotificationsDrawerVisible (state, { payload }) {
      return {
        ...state,
        notificationsDrawerVisible: payload
      }
    },
  }
}
