<template>
  <div class="container">
    <div class="book-cover">
      <img class="cover" :src="bookList[0].src" />
      <span class="name">{{ bookList[0].author }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'book',
  props: {
    bookList: Array
  }
}
</script>

<style scoped>
.container {
  width: 70px;
  padding: 5px;
}
.book-cover {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.cover {
  height: 100px;
}
.book-cover span {
  text-align: center;
}
</style>
