<template>
  <div class="post col-3">
    <div class="card">
      <img class="card-img-top" :src="post.imgUrl" alt />
      <div class="card-body">
        <h4 class="card-title">{{post.title}}</h4>
        <p class="card-text">
          <img :src="post.creator.picture" alt />
          {{post.creator.name}}
        </p>
        <button type="button" class="btn btn-outline-danger" v-if="isCreator">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post"],
  computed: {
    isCreator() {
      return this.$store.state.profile.email == this.post.creatorEmail
    }
  }
}
</script>

<style>

</style>