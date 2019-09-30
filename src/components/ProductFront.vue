<template>
  <div>
    <main>
      <nav class="product-nav">
        <select id="filter-nav">
          <option value="Popular">Popular</option>
          <option value="Arrivals">New Arrivals</option>
          <option value="Sellers">Best Sellers</option>
          <option value="Offers">Special Offers</option>
          <option value="Soon">Coming Soon</option>
        </select>
        <label for="filter-nav"><span class="filterby">Sort by</span> <i class="fas fa-sliders-h"></i></label>
        <ul>
          <li>
            <button>Popular</button>
          </li>
          <li>
            <button>New Arrivals</button>
          </li>
          <li>
            <button>Best Sellers</button>
          </li>
          <li>
            <button>Special Offers</button>
          </li>
          <li>
            <button>Coming Soon</button>
          </li>
        </ul>
      </nav>
				<section class="products">
					<product-card/>
				</section>
    </main>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: "ProductFront",
	components: {
		ProductCard
	}
};
</script>
