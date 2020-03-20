<template>
  <div class="page">
    <ul class="page-list">
      <li class="page-item" :class="{ unactive: cur === 1 }" @click="gopre">
        prev
      </li>
      <li
        class="page-item"
        :class="{ active: cur === n }"
        v-for="(n, index) in pageNum"
        :key="index"
        @click="goPage(n)"
      >
        {{ n }}
      </li>
      <li
        class="page-item"
        :class="{ unactive: cur === pageNum }"
        @click="gonext"
      >
        next
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    pageNum: Number
  },
  data() {
    return {
      cur: 1
    }
  },
  methods: {
    goPage(val) {
      console.log(val)

      this.cur = val
      this.$emit('gotoPage', val)
    },
    gopre() {
      if (this.cur !== 1) {
        this.goPage(this.cur - 1)
      }
    },
    gonext() {
      if (this.cur !== this.pageNum) {
        this.goPage(this.cur + 1)
      }
    }
  }
}
</script>

<style scoped>
.page-list {
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin: 0;
  padding: 5px 20px;
  height: 20px;
}
.page-item {
  color: #3377aa;
}
.active {
  background: #02b388;
}
.unactive {
  color: #669;
}
</style>
