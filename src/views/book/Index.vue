<template>
  <div>
    <Tabbar></Tabbar>
    <div class="container">
      <div
        v-for="(item, index) in bookList"
        :key="index"
        @mouseenter="getid(index)"
      >
        <book
          :booklist="item"
          :hoverIndex="hoverIndex"
          :originIndex="index"
        ></book>
      </div>
    </div>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/Index'
import book from '@/components/books/Index'
import { getBook } from '@/service/api'
export default {
  name: 'Book',
  components: {
    Tabbar,
    book
  },
  data() {
    return {
      bookList: [],
      page: 1,
      hoverIndex: -1
    }
  },
  mounted() {
    this.fetchBook()
  },
  methods: {
    async fetchBook() {
      const res = await getBook(this.page)
      this.bookList = res.data.books
    },
    getid(val) {
      this.hoverIndex = val
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
}
</style>
