<template>
  <div class="container">
    <div class="book-cover">
      <img class="cover" :src="booklist.img" />
      <span class="name">{{ booklist.name }}</span>
    </div>
    <div v-show="hoverIndex === originIndex" class="book-mask">
      {{ booklist.quote }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'book',
  props: {
    booklist: Object,
    hoverIndex: Number,
    originIndex: Number
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
