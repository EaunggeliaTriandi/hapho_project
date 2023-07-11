import {createStore} from "vuex";
import axiosClient from "../axios.js";
const store = createStore({
    state: {
        admin: {
            data: {
              name: 'Yongs',
              email: 'yongs@example.com',
              imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            token: '123'
        }
    },
    getters: {},
    actions: {
    adminLogin({ commit }, admin)
    {
      return axiosClient.post('/admin_login', admin)
        .then(({data}) =>{
          commit('setAdmin',data)
          return data;
        })
    }
    },
    mutations: {
      logout: state => {
        state.admin.data = {};
        state.admin.token =null;
      },
      setAdmin: (state, adminData) => {
        state.admin.token = adminData.token;
        state.admin.data = adminData.admin;
        sessionStorage.setItem("TOKEN", adminData.token);
      },
    },
    modules: {}
})

export default store;
