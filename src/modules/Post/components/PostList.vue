<template>
  <div>
    <post-list-item v-for="post in postList" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostListItem from "./PostListItem.vue";

export default {
  components: { PostListItem },
  name: "PostList",

  props: {
    postList: {
      type: Array,
      required: true,
    },
  },
  created() {
    console.log(this.postList);
  },
};
</script>
