<template>
  <div class="act">
    <div class="act-info">
      <div
        v-for="(item, index) in actList"
        :key="index"
        class="shop-act"
        :class="{ active: index >= 2, all: isShow }"
      >
        <span class="icon" :style="{ 'background-color': '#' + item.color }">{{
          item.icon
        }}</span>
        <span class="action">{{ item.action }}</span>
      </div>
    </div>
    <div class="act-more" @click="showMore">{{ actList.length }}个活动</div>
  </div>
</template>

<script>
export default {
  name: 'Act',
  props: {
    actList: Array
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    showMore() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
.act {
  display: flex;
  padding: 8px;
}
.act-info {
  flex: 1;
  overflow: hidden;
}
.shop-act {
  display: flex;
  margin-bottom: 3px;
}
.icon {
  padding: 1px;
  font-size: 12px;
  color: #ffffff;
  margin-right: 2px;
}
.action {
  flex: 1;
  font-size: 12px;
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.act-more {
  color: #999;
  font-size: 12px;
}
.active {
  display: none;
}
.all {
  display: flex;
}
</style>
