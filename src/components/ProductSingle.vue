<template>
    <section class="product-detail">
        <div class="product-detail-container">
            <div class="sliderimg-col">
                <div class="button-slider-wrapper">
                        <button class="btn-slider">
                            <i class="fas fa-angle-left"></i>  
                        </button>
                        <button class="btn-slider">
                            <i class="fas fa-angle-right"></i>      
                        </button>
                </div>
                <img src="../assets/img/shirtslide.jpg" alt="">
            </div>
            <div class="detail-col">
                <h2>AVE Classic Sweatshirt</h2>
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
                    <li><strike><span>£</span>107</strike></li>
                    <li><span>£</span>89.99</li>
                </ul>
                <ul class="product-stock">
                    <li><span>Availability:</span> In stock</li>
                    <li><span>Product code:</span> #499577</li>
                    <li><span>Tags:</span> <a href="#">Classic,</a><a href="#">Casual,</a> <a href="#">V-neck,</a><a href="#">Loose</a></li>
                </ul>
                <p>Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.</p>
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
                                <option value="size_XS" name="size">Extra Small</option>
                                <option value="size_S" name="sizer">Small</option>
                                <option value="size_M" name="size">Medium</option>
                                <option value="size_L" name="size">Large</option>
                                <option value="size_XL" name="size">Extra Large</option>
                            </select>
                        </form>
                        <form class="select-product" action="">
                            <label for="">Qtr</label>
                            <input type="number" name="quantity" min="1" max="5">
                        </form>
                </div>
                <div class="product-button">
                    <button class="btn btn-dark"><i class="fas fa-shopping-cart"></i> Add to cart</button>
                    <button class="btn btn-border "><i class="far fa-heart"></i> Add to lookbook</button>
                    <button class="compare-btn"><i class="fas fa-link"></i> Add to compare</button>
                </div>
            </div>
        </div>
        <tab-nav/>
        <div class="tabs" id="tabsmobile">
            <nav class="tab-nav">
                <ul>
                    <li><a href="#">Description</a><i class="fas fa-angle-down"></i></li>
                    <li><a href="#">Video</a><i class="fas fa-angle-down"></i></li>
                    <li><a href="#">Size &#38; Specs</a><i class="fas fa-angle-down"></i></li>
                    <li><a href="#">Delivery &#38; Returns</a><i class="fas fa-angle-down"></i></li>
                    <li><a href="#">Reviews</a><i class="fas fa-angle-down"></i></li>
                </ul>
            </nav>
            <div class="tab-wrapper">
            </div>
        </div>
    </section>
</template>

<script>
    // import axios from "axios";
    import TabNav from '@/components/TabNav.vue';

    export default {
        name: 'ProductSingle',
        components: {
            TabNav
        }
        // data(){
        //     return {
        //         product: null
        //     };
        // },
        // mounted(){
        //     this.getProductById();
        // },
        // methods: {
        //     getProductById(){
        //         let productId = this.$route.params.id;
        //         console.log(typeof productId);
        //         axios
        //             .get("/productlist.json")
        //             .then(response => {
        //                 this.product = response.data.products.find(p => p.id === productId);
        //                 console.log(this.product);
        //             }) 
        //             .catch(error => console.log(error));
        //     }
        // }
    };
</script>
