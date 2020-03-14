<template>
  <div>
    <Tabbar></Tabbar>
    <book :bookList="bookList"></book>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/Index'
import book from '@/components/books/Index'
export default {
  name: 'Book',
  components: {
    Tabbar,
    book
  },
  data() {
    return {
      bookList: [
        {
          src: 'https://img1.doubanio.com/view/subject/s/public/s1070959.jpg',
          author: '红楼梦'
        }
      ]
    }
  }
}
</script>

<style></style>
