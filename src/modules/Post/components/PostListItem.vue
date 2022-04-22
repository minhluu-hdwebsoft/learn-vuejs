<template>
  <div class="card">
    <h2>{{ post.title }}</h2>

    <h5>{{ post.created_at | moment("dddd, MMMM DD YYYY") }}</h5>
    <img
      src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
    />
    <p>
      {{ post.html | truncateWithEllipses(300) }}
    </p>
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: "100%";
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  transition: 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
</style>
