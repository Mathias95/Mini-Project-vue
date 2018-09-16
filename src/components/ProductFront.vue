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
                <label for="filter-nav">Sort</label>
                <ul>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">New Arrivals</a></li> 
                    <li><a href="#">Best Sellers</a></li> 
                    <li><a href="#">Special Offers</a></li> 
                    <li><a href="#">Coming Soon</a></li> 
                </ul>
            </nav>
            <div class="products-container">
                <div v-for="product in products" :key="product.id" class="product-view">
                        <ul class="view-pricetag">
                            <li><strike><span>£</span>{{product.productOldPrice}}</strike></li>
                            <li><span>£</span>{{product.productPrice}}</li>
                        </ul>
                        <picture>
                            <router-link :to="`/product/${product.id}`"><img :src="product.productviewImg"></router-link>
                        </picture>
                        <router-link :to="`/product/${product.id}`" id="info-tag"><i class="fas fa-info-circle"></i></router-link>
                        <div class="thumbnail">
                            <img :src="product.productThumbnailFront">
                            <img :src="product.productThumbnailBack">
                        </div>
                        <div class="product-view-detail">
                            <h3>{{product.productTitle}}</h3>
                            <p>{{product.productDesc}}</p>
                            <button class=""><i class="fas fa-shopping-cart"></i></button>
                            <button class=""><i class="far fa-heart"></i></button>
                            <button class=""><i class="fas fa-link"></i></button>
                        </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import axios from "axios";
    
    export default {
    name: 'ProductFront',

        data() {
            return {
            products: null
            };
        },

        mounted() {
            this.getData();
        },
        methods: {
            getData(){
                axios 
                .get("/productlist.json")
                .then(response => (this.products = response.data.products))
            }
        }
    };
</script>
