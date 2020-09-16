import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router'


Vue.use(Vuex)


let baseUrl = location.host.includes('localhost')
  ? "https://localhost:3000/"
  : "/"

  let api = Axios.create({
    baseURL: baseUrl + 'api',
    timeout: 3000,
    withCredentials: true
  })

  export default new Vuex.Store({
    state: {
      profile: {},
      posts: []
    },
    mutations: {
      setProfile(state, profile) {
        state.profile = profile
      },
      setPosts(state, data) {
        state.posts = data
      },
      addPost(state, data) {
        state.posts.push(data)
      }
    },
    actions: {
      setBearer({}, bearer) {
        api.defaults.headers.authorization = bearer
      },
      resetBearer() {
        api.defaults.headers.authorization = ''
      },
      async getProfile({ commit }) {
        try {
          let res = await api.get('profile')
          commit('setProfile', res.data)
        } catch (error) {
          console.error(error)
        }
      },
      async getAllPosts({ commit, dispatch }) {
        try {
          let res = await api.get('posts')
          commit('setPosts', res.data)
        } catch (error) {
          console.error(error)
        }
      }, 
      async newPost({ commit, dispatch } post) {
        let res = await api.post('posts', post)
        dispatch('getAlPosts')
      }
    }
  })