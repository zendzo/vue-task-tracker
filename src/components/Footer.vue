<template>
  <footer>
    <p>Task Tracker v 1.0.0</p>
    <router-link to="/about" exact>About</router-link>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
a{
  color: #333;
}
footer{
  margin-top: 30px;
  text-align: center;
}
</style>