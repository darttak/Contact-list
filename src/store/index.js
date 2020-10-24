import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)


export default new Vuex.Store({
state: {
  newContactArray: [],
},
mutations: {
  addContact(state, newContact) {
    state.newContactArray.unshift(newContact)
  },
  deleteContact(state, index){
      state.newContactArray.splice(index, 1);
  },
  addUserDetails(state, userInfo){
    var item = state.newContactArray.find(user => user.id == userInfo.id)
    if (item != undefined){
      var index = state.newContactArray.indexOf(userInfo)
      state.newContactArray[index] = userInfo
    }else {
      state.newContactArray.unshift(userInfo)
    }
  }
},
getters: {
  allContacts(state){
    return state.newContactArray
  }
},
actions: {},
plugins: [createPersistedState({key: 'vuexStore'})]
})

