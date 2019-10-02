<template>
  <div id="app">
		<top-header/>
    <responsive-navigation/>
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
import TopHeader from '@/components/TopHeader.vue';
import ResponsiveNavigation from '@/components/ResponsiveNavigation.vue';
import MainFooter from '@/components/MainFooter.vue';

// Remeber to export the used components
export default {
  components: {
		TopHeader,
    ResponsiveNavigation,
    MainFooter
  }
}
</script>
