<template>
  <div class="tab-bar">
    <div class="bar-inside">
      <router-link to="/note">
        <svgicon name="note"></svgicon>
        <span>计划</span>
      </router-link>
      <router-link to="/book">
        <svgicon name="book"></svgicon>
        <span>图书馆</span>
      </router-link>
      <router-link to="/eat">
        <svgicon name="eat"></svgicon>
        <span>美食</span>
      </router-link>
      <router-link to="/me">
        <svgicon name="mine"></svgicon>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import '@/assets/icons/note'
import '@/assets/icons/eat'
import '@/assets/icons/book'
import '@/assets/icons/mine'

export default {
  name: 'Tabbar',
  data() {
    return {
      focus: -1
    }
  },
  methods: {
    selectTab(val) {
      this.focus = val
    }
  }
}
</script>

<style scoped>
.tab-bar {
  margin-top: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0px -1px 1px #e6e6e6;
  background-color: #fff;
}
.bar-inside {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
a {
  color: #828282;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}
a svg {
  width: 25px;
  height: 25px;
  margin: 5px;
}
.router-link-active {
  color: #02b388;
}
</style>
