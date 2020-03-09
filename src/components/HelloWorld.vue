<template>
  <div>
    <div v-for="(item, index) in lists" :key="index">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import { getStudent } from '../service/api'
export default {
  name: 'HelloWorld',
  data() {
    return {
      lists: ''
    }
  },
  created() {
    this.fetchStudent()
  },
  methods: {
    async fetchStudent() {
      try {
        const res = await getStudent()
        this.lists = res.data.student
        console.log(this.lists)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
