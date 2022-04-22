<template>
  <div class="pagination">
    <button v-on:click="prePage">&laquo;</button>
    <button
      v-for="page in pageArr"
      :key="page"
      v-bind:class="{ active: currentPage === page }"
      v-on:click="selectPage(page)"
    >
      {{ page }}
    </button>
    <button v-on:click="nextPage">&raquo;</button>
  </div>
</template>

<script>
export default {
  name: "CustomPagination",
  props: ["page", "limit", "onChange", "totalPage"],
  computed: {
    pageArr() {
      return Array.from({ length: this.totalPage }, (_, i) => i + 1);
    },
  },
  data() {
    return {
      currentPage: this.page,
    };
  },
  watch: {
    currentPage(currentPage) {
      this.onChange && this.onChange(currentPage, this.limit);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.currentPage++;
      }
    },
    prePage() {
      if (this.currentPage - 1 > 0) {
        this.currentPage--;
      }
    },
    selectPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="scss">
.pagination {
  display: inline-block;
  button {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    border: 1px solid #ddd;
    &.active {
      background-color: #4caf50;
      color: white;
      border: 1px solid #4caf50;
    }
    &:hover:not(.active) {
      background-color: #ddd;
    }
    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}
</style>
