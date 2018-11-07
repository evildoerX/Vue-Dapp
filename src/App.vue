<template>
  <div>
    <MetamaskState />
    <TodoList />
  </div>
</template>


<script>
  import MetamaskState from './components/MetamaskState.vue'
  import TodoList from './components/TodoList'
  export default {
    name: 'App',
    components: {
      MetamaskState,
      TodoList
    },
    data () {
      return {
      }
    },
    beforeCreate () {
      this.$store.dispatch('registerWeb3')
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
