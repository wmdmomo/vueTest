<template>
  <div class="book">
    <Tabbar></Tabbar>
    <div class="book-title">
      <span>豆瓣精选图书</span>
    </div>
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
    <Page :pageNum="pageNum" @gotoPage="gotoPage"></Page>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/Index'
import book from '@/components/books/Index'
import Page from '@/components/page/Index'
import { getBook } from '@/service/api'
export default {
  name: 'Book',
  components: {
    Tabbar,
    book,
    Page
  },
  data() {
    return {
      bookList: [],
      page: 1,
      hoverIndex: -1,
      pageNum: 10
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
    },
    gotoPage(val) {
      this.page = val
      this.fetchBook()
    }
  }
}
</script>

<style scoped>
.book {
  margin-bottom: 100px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
}
.book-title {
  padding: 10px;
  font-size: 25px;
}
.book-title span {
  display: flex;
  justify-content: center;
}
</style>
