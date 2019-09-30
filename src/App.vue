<template>
  <div id="app">
    <main-header/>
    <router-view/>
    <main-footer/>
  </div>
</template>

<style lang="sass">
//Import global scss styling
@import "./assets/scss/main.sass"
</style>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

// Remeber to export the used components
export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>
