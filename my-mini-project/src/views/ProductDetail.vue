<template>
    <div>
        <sub-banner maintitle="Product View" subtext="Mens - Casuals - Hoodies & Sweatshirts - AVE Classics Sweatshirt"></sub-banner>
        <product-single></product-single>
    </div>
</template>

<script>
// @ is an alias to /src
import SubBanner from '@/components/SubBanner.vue';
import ProductSingle from '@/components/ProductSingle.vue';

export default {
    name: 'productdetail',
    components: {
      SubBanner,
      ProductSingle
  }
}
</script>