<template>
  <div id="app">
    <main-header/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <main-footer/>
  </div>
</template>

<style lang="scss">
//Import global scss styling

</style>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

// Remeber ro export the used components
export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>
