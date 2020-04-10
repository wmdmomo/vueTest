<template>
  <div>
    <Tabbar></Tabbar>
    <Shopbar></Shopbar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/Index'
import Shopbar from './components/shopvar'
export default {
  name: 'Eat',
  components: {
    Tabbar,
    Shopbar
  }
}
</script>

<style></style>
