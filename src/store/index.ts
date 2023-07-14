import { createStore } from 'vuex';

interface State {
  isLoggedIn: boolean;
  user: object;
}

export default createStore<State>({
  state(): State {
    return {
      isLoggedIn: false,
      user: {},
    };
  },
  actions: {
    login(context, user) {
      context.commit('setAuth', true);
      context.commit('setUser', user);
    },
    logout(context) {
      context.commit('setAuth', false);
      context.commit('setUser', {});
    },
    setUserData(context, user) {
      context.commit('setUser', user);
    },
  },
  mutations: {
    setAuth(state, loginStatus) {
      state.isLoggedIn = loginStatus;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    userAuthCheck(state) {
      return state.isLoggedIn;
    },
    getUser(state) {
      return state.user;
    },
  },
});
