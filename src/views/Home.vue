<template>
  <div class="home">
    <main-banner/>
    <product-front/>
    <main-lookbook/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from '@/components/MainBanner.vue';
import ProductFront from '@/components/ProductFront.vue';
import MainLookbook from '@/components/MainLookbook.vue';

export default {
  name: 'home',
    components: {
      MainBanner,
      ProductFront,
      MainLookbook
  }
}
</script>
