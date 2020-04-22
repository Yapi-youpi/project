import firebase from '@firebase/app'

export default {
  actions: {
    async login({dispatch, commit}, {email, password}) // eslint-disable-line no-unused-vars
    {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
      // continue regardless of error
      }
    }
  }
}