<template>
  <div class="outside">
    <div :class="{ ins: sel === 0 }" @click="select(0)">11</div>
    <div :class="{ ins: sel === 1 }" @click="select(1)">22</div>
    <div :class="{ ins: sel === 2 }" @click="select(2)">33</div>
    <div :class="{ ins: sel === 3 }" @click="select(3)">44</div>
  </div>
</template>

<script>
export default {
  name: 'Testbar',
  data() {
    return {
      sel: -1
    }
  },
  methods: {
    select(val) {
      this.sel = val
    }
  }
}
</script>

<style scoped>
.outside {
  display: flex;
  justify-content: space-around;
}
.ins {
  background: blue;
}
</style>
