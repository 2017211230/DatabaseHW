import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const state = () => ({
  drawer: false,
    items: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Profile',
      href: '/profile'
    }
  ],
  username: ''
});
export const getters = {
  links: (state, getters) => {
    return state.items;
  }
};
export const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer),
};

