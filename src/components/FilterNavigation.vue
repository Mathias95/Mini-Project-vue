<template>
	<div class="container-full">
		<nav class="filter">
			<select id="filter-nav" class="filter__select">
				<option class="filter__option" value="Popular">Popular</option>
				<option class="filter__option" value="Arrivals">New Arrivals</option>
				<option class="filter__option" value="Sellers">Best Sellers</option>
				<option class="filter__option" value="Offers">Special Offers</option>
				<option class="filter__option" value="Soon">Coming Soon</option>
			</select>
			
			<label for="filter-nav" class="filter__by"><span class="filter__by-text">Sort by</span> <i class="fas fa-sliders-h filter__by-icon"></i></label>
			<ul class="filter__list">
				<li class="filter__items"><button class="filter__button">Popular</button></li>
				<li class="filter__items"><button class="filter__button">New Arrivals</button></li>
				<li class="filter__items"><button class="filter__button">Best Sellers</button></li>
				<li class="filter__items"><button class="filter__button">Special Offers</button></li>
				<li class="filter__items"><button class="filter__button">Coming Soon</button></li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	
}
</script>