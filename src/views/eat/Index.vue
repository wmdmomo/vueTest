<template>
  <div>
    <Tabbar></Tabbar>
    <div class="shop">
      <div v-for="(shop, index) in shopList" :key="index">
        <Shopbar :shopInfo="shop"></Shopbar>
      </div>
    </div>
  </div>
</template>

<script>
import { getShop } from '@/service/api'
import Tabbar from '@/components/tabbar/Index'
import Shopbar from './components/shopvar'
export default {
  name: 'Eat',
  components: {
    Tabbar,
    Shopbar
  },
  data() {
    return {
      shopList: []
    }
  },
  mounted() {
    this.getShopIn()
  },
  methods: {
    async getShopIn() {
      const res = await getShop()
      this.shopList = res.data.restaurant
      console.log(this.shopList)
    }
  }
}
</script>

<style scoped>
.shop {
  padding: 5px;
  margin-bottom: 60px;
}
</style>
