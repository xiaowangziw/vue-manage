<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
#app {
/*  一屏的高度*/
height: 100vh;
}
</style>
