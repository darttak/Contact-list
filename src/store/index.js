import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import VuexUndoRedo from 'vuex-undo-redo';

Vue.use(Vuex)
Vue.use(VuexUndoRedo);


export default new Vuex.Store({
state: {
  newContactArray: [],
  userInfo: {}
},
mutations: {
  addContact(state, newContact) {
    state.newContactArray.unshift(newContact)
  },
  deleteContact(state, index){
      state.newContactArray.splice(index, 1);
  },
  addUserDetails(state, userInfo){
    state.userInfo = userInfo
  },
  undoDraw() {
    this.undo()
  },
  emptyState() { 
    this.replaceState({ newContactArray: [], userInfo: {} }) }
},
getters: {
  allContacts(state){
    return state.newContactArray
  }
},
actions: {},
plugins: [createPersistedState({key: 'vuexStore'})]
})

