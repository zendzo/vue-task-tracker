<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-show="isHome"
      @btn-click="$emit('toggle-form')"
      :color="showForm ? 'red' : 'green'"
      :text="showForm ? 'Close' : 'Add Task'"
    />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  components: {
    Button,
  },
  props: {
    title: String,
    showForm: false,
  },
  computed: {
    isHome(){
      if (this.$route.path === '/') {
        return true
      }else{
        return false
      }
    }
  },
  emits: ["toggle-form"],
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
