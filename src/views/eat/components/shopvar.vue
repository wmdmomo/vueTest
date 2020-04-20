<template>
  <div class="shop-bar">
    <div class="bar-up">
      <div class="shop-logo">
        <img :src="getPic(shopInfo.img)" />
      </div>
      <div class="shop-content">
        <div class="content-name">
          <span v-if="shopInfo.premium === 1" class="premium">品牌</span>
          <span class="name">{{ shopInfo.name }}</span>
        </div>
        <div class="content-score">
          <span>{{ shopInfo.rating }}</span>
          <span>月售{{ shopInfo.order }}单</span>
        </div>
        <div class="content-delivery content-score">
          <span>￥30起送</span>
          <span>免配送费</span>
        </div>
      </div>
    </div>
    <div class="bar-bottom">
      <div class="shop-brand">
        <span>{{ shopInfo.flavors }}</span>
      </div>
      <div class="shop-act">
        <Act :actList="shopInfo.act"></Act>
      </div>
    </div>
  </div>
</template>

<script>
import { getPic } from '@/utils/image'
import Act from './act'
export default {
  name: 'Shopbar',
  components: {
    Act
  },
  props: {
    shopInfo: Object
  },
  methods: {
    getPic
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
.premium {
  background-image: linear-gradient(-139deg, #fff100, #ffe339);
  color: #6f3f15;
  font-weight: 700;
  font-size: 0.58rem;
  padding: 2px;
  border-radius: 3px;
}
.name {
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
