<template>
  <div class="food">
    <div v-for="(food, index) in barList.foodList" :key="index">
      {{ food.name }}
      <!-- {{ food.img }} -->
      <div class="food-img">
        <img :src="getFoodImg(food.img)" />
      </div>
    </div>
  </div>
</template>

<script>
import { getFoodImg } from '@/utils/image'
export default {
  name: 'Food',
  props: {
    barList: Object
  },
  data() {
    return {
      foodList: []
    }
  },
  methods: {
    getFoodImg
  }
}
</script>

<style></style>
