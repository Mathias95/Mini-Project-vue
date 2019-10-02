<template>
  <div class="products-container products container-full">
    <div v-for="product in products" :key="product.id" class="products__view">
      <ul class="view-pricetag products__price-list">
        <li class="products__price-item">
          <strike>
            <span class="products__currency">£</span>
            {{product.productOldPrice}}
          </strike>
        </li>
        <li class="products__price-item">
          <span class="products__currency">£</span>
          {{product.productPrice}}
        </li>
      </ul>
      <picture class="products__item">
        <router-link class="products__link" :to="`/product/${product.id}`">
          <img class="product-img products__img" :src="product.productviewImg" />
        </router-link>
      </picture>
      <router-link class="products__info" :to="`/product/${product.id}`" id="info-tag">
        <i class="fas fa-info-circle products__info-icon"></i>
      </router-link>
      <div class="thumbnail products__thumbnail">
        <img :src="product.productThumbnailFront" />
        <img :src="product.productThumbnailBack" />
      </div>
      <div class="product-view-detail products__details">
        <h3 class="products__title">{{product.productTitle}}</h3>
        <p class="products__description">{{product.productDesc}}</p>
				<div class="shopping">
					<button class="product-view-button shopping__button">
						<i class="fas fa-shopping-cart shopping__button-icon"/>
					</button>
					<button class="product-view-button shopping__button">
						<i class="far fa-heart shopping__button-icon"/>
					</button>
					<button class="product-view-button shopping__button">
						<i class="fas fa-link shopping__button-icon"/>
					</button>
				</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
	data() {
    return {
      products: null
    };
  },

  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("/productlist.json")
        .then(response => (this.products = response.data.products));
    }
  }
};
</script>