<template>
    <div>
			<section class="subbanner">
				<div class="container" v-if="product">
						<h1 class="subbanner__title">Product <span class="subbanner__title--highlight">View</span></h1>
						<p class="subbanner__text">{{product.productCategorie}}<span class="subbanner__text--highlight">{{product.productSingleTitle}}</span></p>
				</div>
		</section>

		<section class="product">
			<div v-if="product" class="product__wrapper container">
					<div class="product__slider">
							<div class="product__slider-buttons">
								<button class="product__slider-button">
										<i class="fas fa-angle-left"></i>  
								</button>
								<button class="product__slider-button">
										<i class="fas fa-angle-right"></i>      
								</button>
							</div>
							<img class="product__slider-img" :src="product.productSliderImg" alt="">
					</div>
					
					<div class="product__detail">
						<h2 class="heading-3">{{product.productSingleTitle}}</h2>

						<div class="review">
							<ul class="review__list">
								<li class="review__icon"><i class="fas fa-star review__icon-star"></i></li>
								<li class="review__icon"><i class="fas fa-star review__icon-star"></i></li>
								<li class="review__icon"><i class="fas fa-star review__icon-star"></i></li>
								<li class="review__icon"><i class="fas fa-star review__icon-star"></i></li>
								<li class="review__icon"><i class="fas fa-star review__icon-star review__icon-star--empty"></i></li>
								<span class="review__amount">3 Review(s)</span>
								<a class="review__add" href="#">Add a review</a>
							</ul>
							<ul class="review__share">
								<span class="review__share-title">Share: </span>
								<li class="review__share-item"><a href="#" class="review__share-icon"><i class="fab fa-facebook-f"></i></a></li>
								<li class="review__share-item"><a href="#" class="review__share-icon"><i class="fab fa-twitter"></i></a></li>
								<li class="review__share-item"><a href="#" class="review__share-icon"><i class="fab fa-google-plus-g"></i></a></li>
								<li class="review__share-item"><a href="#" class="review__share-icon"><i class="fab fa-pinterest-p"></i></a></li>
								<li class="review__share-item"><a href="#" class="review__share-icon"><i class="fab fa-instagram"></i></a></li>
								<li class="review__share-item"><a href="#" class="review__share-icon"><i class="fas fa-envelope"></i></a></li>
							</ul>
						</div>

						<ul class="product__price">
							<li><strike><span>£</span>{{product.productOldPrice}}</strike></li>
							<li><span>£</span>{{product.productPrice}}</li>
						</ul>

						<ul class="product__stock">
							<li class="product__stock-item heading-5"><span class="heading-5 heading-5--bold">Availability:</span> In stock</li>
							<li class="product__stock-item heading-5"><span class="heading-5 heading-5--bold">Product code:</span> #{{product.id}}</li>
							<li class="product__stock-item heading-5"><span class="heading-5 heading-5--bold">Tags:</span> <a href="#" class="product__stock-tag">Classic,</a><a href="#" class="product__stock-tag">Casual,</a> <a href="#" class="product__stock-tag">V-neck,</a><a href="#" class="product__stock-tag">Loose</a></li>
						</ul>

						<p class="heading-5">{{product.productDesc}}</p>

						<ul class="product__details-list">
							<li class="product__details-item heading-5">Elasticated cuffs</li>
							<li class="product__details-item heading-5">Casual fit</li>
							<li class="product__details-item heading-5">100% Cotton</li>
							<li class="product__details-item heading-5">Free shipping with 4 days delivery</li>
						</ul>

						<div class="select">
							<form class="select__form" action="">
								<label for="" class="select__title heading-5 heading-5--bold">Color</label>
								<select name="" id="" class="select__options-list">
										<option class="select__color" value="" disabled selected hidden>Select Colour</option>
										<option class="select__color" value="color_black" name="color">Black</option>
										<option class="select__color" value="color_green" name="color">Green</option>
										<option class="select__color" value="color_navy" name="color">Navy</option>
										<option class="select__color" value="color_white" name="color">White</option>
										<option class="select__color" value="color_red" name="color">Red</option>
								</select>
							</form>
							<form class="select__form" action="">
								<label for="" class="select__title heading-5 heading-5--bold">Size</label>
								<select name="" id="" class="select__options-list">
									<option class="select__size" value="" disabled selected hidden>Select Size</option>
									<option class="select__size" value="size_XS" name="size">Extra Small</option>
									<option class="select__size" value="size_S" name="sizer">Small</option>
									<option class="select__size" value="size_M" name="size">Medium</option>
									<option class="select__size" value="size_L" name="size">Large</option>
									<option class="select__size" value="size_XL" name="size">Extra Large</option>
								</select>
							</form>
							<form class="select__form" action="">
								<label class="select__title heading-5 heading-5--bold" for="">Qtr</label>
								<input class="select__amount" type="number" name="quantity" min="1" max="50" value="1">
							</form>
						</div>

						<div class="add">
							<button class="btn btn-border--dark add__cart"><i class="fas fa-shopping-cart"></i> Add to cart</button>
							<button class="btn btn-border--light add__lookbook"><i class="far fa-heart"></i> Add to lookbook</button>
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
import TabNav from "@/components/TabNav.vue";

export default {
  components: {
    TabNav
  },
  props: {
    maintitle: String
  },
  data() {
    return {
      product: null
    };
  },
  mounted() {
    this.getProductById();
  },
  methods: {
    getProductById() {
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