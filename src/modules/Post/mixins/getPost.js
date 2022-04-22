import axiosClient from "../../../api";

export default {
  data() {
    return {
      isFetchingPosts: false,
      error: undefined,
      postList: [],
      postPagination: {},
      postFilter: {
        q: undefined,
        order: undefined,
        sort: undefined,
        _page: 1,
        _limit: 5,
      },
    };
  },
  computed: {
    totalPage() {
      return Math.floor(
        this.postPagination._totalRows / this.postPagination._limit
      );
    },
  },
  watch: {
    postFilter(newFilter) {
      this.getPost(newFilter);
    },
  },
  methods: {
    setPostPage(page) {
      this.postFilter = {
        ...this.postFilter,
        _page: page,
      };
    },
    setPostLimit(limit) {
      this.postFilter._limit = limit;
    },
    setPostSearch(searchValue) {
      this.postFilter = {
        ...this.postFilter,
        q: searchValue,
      };
    },
    async getPost(params) {
      try {
        const url = "blogs";
        this.isFetchingPosts = true;
        const response = await axiosClient.get(url, {
          params: {
            _limit: 10,
            _page: 1,
            ...params,
          },
        });
        this.postPagination = response.pagination;
        this.postList = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isFetchingPosts = false;
      }
    },
  },
  created() {
    this.getPost(this.postFilter);
  },
};
