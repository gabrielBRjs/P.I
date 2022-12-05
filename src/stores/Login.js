import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      logged: false
    }
  },
  getters: {
    login(state) { return state.logged = true }
  },
})
