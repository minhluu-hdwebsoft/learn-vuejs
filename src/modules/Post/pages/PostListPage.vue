<template>
  <div>
    <h1>Post List</h1>
    <input v-model.lazy="search" v-debounce class="form-input input-lg" />
    <custom-pagination
      :page="postFilter._page"
      :limit="postFilter._limit"
      :onChange="handlePaginationChange"
      :totalPage="totalPage"
    />
    <div>
      {{ isFetchingPosts ? "Loading ..." : "Done" }}
    </div>
    <post-list :postList="postList" />
  </div>
</template>

<script>
import CustomPagination from "@/components/CustomPagination.vue";
import PostList from "../components/PostList.vue";
import getPost from "../mixins/getPost";

export default {
  components: { PostList, CustomPagination },
  name: "PostListPage",
  mixins: [getPost],
  data() {
    return {
      search: "",
    };
  },
  methods: {
    handlePaginationChange(page) {
      this.setPostPage(page);
    },
  },
  watch: {
    filter() {
      this.getPost(this.filter);
    },
    search() {
      this.setPostSearch(this.search);
    },
  },
};
</script>
