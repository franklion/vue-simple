<template>
  <div id="app">
    <nav class="app-nav">
      <router-link to="/home" class="nav-link">home</router-link>
      <router-link to="/posts" class="nav-link">posts</router-link>
      <router-link to="/bike" class="nav-link">bike</router-link>
      <router-link to="/counter" class="nav-link">counter</router-link>
      <router-link to="/todos" class="nav-link">todos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  outline: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-nav {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px 0;
}

.nav-link {
  display: inline-block;
  color: #fff;
  margin: 0 20px;
}

.router-link-active {
  color: red
}
</style>
