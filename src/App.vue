<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msa: 'shicdi'
    }
  }
}
</script>

<style>
body {
  margin: 0px;
}
input {
  border: none;
  outline: none;
}
button {
  border: none;
  outline: none;
  font-family: inherit;
}
input::placeholder {
  color: #d2d2d2;
}
.svg-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  color: inherit;
  vertical-align: middle;
  fill: none;
  stroke: currentColor;
}

.svg-fill {
  fill: currentColor;
  stroke: none;
}

.svg-up {
  /*default*/
  transform: rotate(0deg);
}

.svg-right {
  transform: rotate(90deg);
}

.svg-down {
  transform: rotate(180deg);
}

.svg-left {
  transform: rotate(-90deg);
}
</style>
