<template>
  <div class="home">
    <main-banner/>
    <main-lookbook/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from '@/components/MainBanner.vue';
import MainLookbook from '@/components/MainLookbook.vue';

export default {
    components: {
      MainBanner,
      MainLookbook
  }
}
</script>
