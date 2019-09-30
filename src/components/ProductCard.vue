<template>
  <div class="products-container">
    <div v-for="product in products" :key="product.id" class="product-view">
      <ul class="view-pricetag">
        <li>
          <strike>
            <span>£</span>
            {{product.productOldPrice}}
          </strike>
        </li>
        <li>
          <span>£</span>
          {{product.productPrice}}
        </li>
      </ul>
      <picture>
        <router-link :to="`/product/${product.id}`">
          <img class="product-img" :src="product.productviewImg" />
        </router-link>
      </picture>
      <router-link :to="`/product/${product.id}`" id="info-tag">
        <i class="fas fa-info-circle"></i>
      </router-link>
      <div class="thumbnail">
        <img :src="product.productThumbnailFront" />
        <img :src="product.productThumbnailBack" />
      </div>
      <div class="product-view-detail">
        <h3>{{product.productTitle}}</h3>
        <p>{{product.productDesc}}</p>
        <button class="product-view-button">
          <i class="fas fa-shopping-cart"></i>
        </button>
        <button class="product-view-button">
          <i class="far fa-heart"></i>
        </button>
        <button class="product-view-button">
          <i class="fas fa-link"></i>
        </button>
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