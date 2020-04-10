<template>
  <div class="shop-bar">
    <div class="bar-up">
      <div class="shop-logo">
        <img
          src="https://cube.elemecdn.com/9/cb/1ff422fe852cb9f5d00876d89e61ajpeg.jpeg?x-oss-process=image/format,webp/resize,w_65,h_65,m_fixed"
        />
      </div>
      <div class="shop-content">
        <div class="content-name">
          <span>品牌</span>
          <span>麦克斯汉堡炸鸡（小林点）</span>
        </div>
        <div class="content-score">
          <span>4.9</span>
          <span>月售1035单</span>
        </div>
        <div class="content-delivery content-score">
          <span>￥30起送</span>
          <span>免配送费</span>
        </div>
      </div>
    </div>
    <div class="bar-bottom">
      <div class="shop-brand">
        <span>汉堡薯条</span>
      </div>
      <div class="shop-act">
        <Act></Act>
      </div>
    </div>
  </div>
</template>

<script>
import Act from './act'
export default {
  name: 'Shopbar',
  components: {
    Act
  }
}
</script>

<style scoped>
.shop-bar {
  padding: 10px 0;
}
.bar-up {
  display: flex;
  flex-direction: row;
  padding: 0 5px;
}
/* .shop-logo {
  width: 65px;
  height: 65px;
} */
.shop-content {
  margin-left: 5px;
}
.content-name span:nth-child(1) {
  background-image: linear-gradient(-139deg, #fff100, #ffe339);
  color: #6f3f15;
  font-weight: 700;
  font-size: 0.58rem;
  padding: 2px;
  border-radius: 3px;
}
.content-name span:nth-child(2) {
  color: #333;
  font-weight: 700;
  /* font-size: 0.4rem; */
}
.content-score span {
  font-size: 0.4rem;
  color: #666;
}
.bar-bottom {
  padding-left: 75px;
}
.shop-brand span {
  border: 1px solid rgb(221, 221, 221);
  color: rgb(102, 102, 102);
  font-size: 0.35rem;
  padding: 1px;
  border-radius: 3px;
}
</style>
