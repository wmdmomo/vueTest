<template>
  <div class="side">
    <div v-for="(item, index) in menu" :key="index">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Side',
  props: {
    menu: Array
  }
}
</script>

<style></style>
