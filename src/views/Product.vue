<template>
    <div>
        <product-single/>
    </div>
</template>

<script>
// @ is an alias to /src
import ProductSingle from '@/components/ProductSingle.vue';

export default {
    name: 'productpage',
    components: {
      ProductSingle
  }
};
</script>