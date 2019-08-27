<template>
<div>
    <section class="sub-banner">
        <div class="sub-banner-container" v-if="product">
            <h1>Product <span>View</span></h1>
            <p>{{product.productCategorie}} <span>{{product.productSingleTitle}}</span></p>
        </div>
    </section>
        <section class="product-detail">
        <div v-if="product" class="product-detail-container">
            <div class="sliderimg-col">
                <div class="button-slider-wrapper">
                        <button class="btn-slider">
                            <i class="fas fa-angle-left"></i>  
                        </button>
                        <button class="btn-slider">
                            <i class="fas fa-angle-right"></i>      
                        </button>
                </div>
                <img :src="product.productSliderImg" alt="">
            </div>
            <div class="detail-col">
                <h2>{{product.productSingleTitle}}</h2>
                <div class="info-share">
                        <ul class="reviews">
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star"></i></li>
                            <li><i class="fas fa-star"></i></li>
                            <li><span><i class="fas fa-star"></i></span></li>
                            <span class="review-amount">3 Review(s)</span>
                            <a href="#">Add a review</a>
                        </ul>
                        <ul class="social-share">
                            <span>Share: </span>
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                            <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fas fa-envelope"></i></a></li>
                        </ul>
                </div>
                <ul class="product-price">
                    <li><strike><span>£</span>{{product.productOldPrice}}</strike></li>
                    <li><span>£</span>{{product.productPrice}}</li>
                </ul>
                <ul class="product-stock">
                    <li><span>Availability:</span> In stock</li>
                    <li><span>Product code:</span> #{{product.id}}</li>
                    <li><span>Tags:</span> <a href="#">Classic,</a><a href="#">Casual,</a> <a href="#">V-neck,</a><a href="#">Loose</a></li>
                </ul>
                <p>{{product.productDesc}}</p>
                <ul class="product-details">
                    <li>Elasticated cuffs</li>
                    <li>Casual fit</li>
                    <li>100% Cotton</li>
                    <li>Free shipping with 4 days delivery</li>
                </ul>
                <div class="select-product-wrapper">
                    <form class="select-product" action="">
                        <label for="">Color</label>
                        <select name="" id="">
														<option value="" disabled selected hidden>Select Colour</option>
                            <option value="color_black" name="color">Black</option>
                            <option value="color_green" name="color">Green</option>
                            <option value="color_navy" name="color">Navy</option>
                            <option value="color_white" name="color">White</option>
                            <option value="color_red" name="color">Red</option>
                        </select>
                    </form>
                    <form class="select-product" action="">
                        <label for="">Size</label>
                        <select name="" id="">
														<option value="" disabled selected hidden>Select Size</option>
                            <option value="size_XS" name="size">Extra Small</option>
                            <option value="size_S" name="sizer">Small</option>
                            <option value="size_M" name="size">Medium</option>
                            <option value="size_L" name="size">Large</option>
                            <option value="size_XL" name="size">Extra Large</option>
                        </select>
                    </form>
                    <form class="select-product" action="">
                        <label for="">Qtr</label>
                        <input type="number" name="quantity" min="1" max="50" value="1">
                    </form>
                </div>
                <div class="product-button">
										<button class="btn btn-dark-hover add-cart"><i class="fas fa-shopping-cart"></i> Add to cart</button>
                    <button class="btn btn-border add-lookbook"><i class="far fa-heart"></i> Add to lookbook</button>
                </div>
								<button class="compare-btn"><i class="fas fa-link"></i> Add to compare</button>
            </div>
        </div>
        <tab-nav/>
    </section>
</div>
</template>

<script>
    import axios from "axios";
    import TabNav from '@/components/TabNav.vue';

    export default {
        name: 'ProductSingle',
        components: {
            TabNav
        },
        props: {
            maintitle: String
        },
         data(){
             return {
                 product: null
             };
         },
         mounted(){
             this.getProductById();
         },
         methods: {
             getProductById(){
                 let productId = this.$route.params.id;
                 console.log(typeof productId);
                 axios
                     .get("/productlist.json")
                     .then(response => {
                         this.product = response.data.products.find(p => p.id === productId);
                         console.log(this.product);
                     }) 
                     .catch(error => console.log(error));
             }
         }
    };
</script>
