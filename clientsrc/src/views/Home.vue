<template>
  <div class="home container-fluid">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome to Insta-Ham</h1>
    <div class="row" v-if="$auth.isAuthenticated">
      <div class="col">
        <form class="form-inline" @submit.prevent="newPost">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Title" v-model="post.title" />
            <input type="text" class="form-control" placeholder="ImgUrl" v-model="post.imgUrl" />
          </div>
          <button type="submit" class="btn btn-outline-success">Submit</button>
        </form>
      </div>
    </div>
    <div class="row">
      <post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import Post from "@/components/PostComponent.vue"
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllPosts")
  },
  data() {
    return {
      post: {
        title: '',
        imgUrl: ''
      }
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  methods: {
    newPost() {
      this.$store.dispatch("newPost", this.post)
    }
  },
  components: {
    Post
  }
};
</script>
