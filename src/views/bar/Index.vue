<template>
  <div>
    <Side :menu="menuName"></Side>
    <div v-for="menulist in menu" :key="menulist.id">
      <Food :barList="menulist"></Food>
    </div>
  </div>
</template>

<script>
import Food from './components/food'
import Side from './components/side'
import { getBar } from '@/service/api'
export default {
  name: 'Bar',
  components: {
    Food,
    Side
  },
  data() {
    return {
      menu: [],
      menuName: []
    }
  },
  created() {
    this.getAll()
  },
  methods: {
    async getAll() {
      const res = await getBar(this.$route.params.id)
      this.menu = res.data.menu
      this.menu.forEach(obj => this.menuName.push(obj.name))
    }
  }
}
</script>

<style></style>
