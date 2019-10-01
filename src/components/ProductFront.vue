<template>
  <div>
    <main>
			<section class="">
				<filter-navigation/>
				<product-card/>
			</section>
    </main>
  </div>
</template>

<script>
import FilterNavigation from '@/components/FilterNavigation.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: "ProductFront",
	components: {
		FilterNavigation,
		ProductCard
	}
};
</script>
