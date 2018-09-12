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
                  <div class="product-col">
                        <div class="product-view one">
                            <ul class="view-pricetag">
                                <li><span>£</span>89.99</li>
                            </ul>
                            <picture>
                                <source media="(min-width: 1200px)" srcset="../assets/img/blackshirt.jpg"> 
                                <source media="(min-width: 768px)" srcset="../assets/img/blackshirt-tablet.jpg">
                                <img src="../assets/img/blackshirt.jpg" alt="">
                            </picture>
                        </div>
                        <div class="product-view two">
                            <ul class="view-pricetag">
                                <li><span>£</span>47.50</li>
                            </ul>
                            <picture>
                                <source media="(min-width: 1200px)" srcset="../assets/img/whiteshirt.jpg"> 
                                <source media="(min-width: 768px)" srcset="../assets/img/whiteshirt-tablet.jpg">
                                <img src="../assets/img/whiteshirt.jpg" alt="">
                            </picture>
                        </div>
                        <div class="product-view four">
                            <ul class="view-pricetag">
                                <li><span>£</span>69.95</li>
                            </ul>
                            <picture>
                                <source media="(min-width: 768px)" srcset="../assets/img/blueshirt.jpg">
                                <img src="../assets/img/blueshirt-mobile.jpg" alt="">
                            </picture>
                        </div>
                  </div>
                  <div class="product-col">
                        <div class="product-view three">
                              <ul class="view-pricetag">
                                    <li><strike><span>£</span>107</strike></li>
                                    <li><span>£</span>89.99</li>
                              </ul>
                              <picture>
                              <source media="(min-width: 768px)" srcset="../assets/img/blacksweater.jpg">
                              <img src="../assets/img/blacksweater-mobile.jpg" alt="">
                              </picture>
                        </div>
                        <div class="product-view five">
                              <ul class="view-pricetag">
                                    <li><span>£</span>29.95</li>
                              </ul>
                              <picture>
                                    <source media="(min-width: 1200px)" srcset="../assets/img/orangeshirt.jpg">  
                                    <source media="(min-width: 768px)" srcset="../assets/img/orangeshirt-tablet.jpg">
                                    <img src="../assets/img/orangeshirt.jpg" alt="">
                              </picture>
                              <a id="info-tag" href="#"><i class="fas fa-info-circle"></i></a>
                              <div class="thumbnail">
                                    <img src="../assets/img/thumb-front.jpg" alt="">
                                    <img src="../assets/img/thumb-back.jpg" alt="">
                              </div>
                              <div class="product-view-detail">
                                    <h3>WOMENS BURNT ORANGE CASUAL TEE  £29.95</h3>
                                    <p>Classic casual t-shirt for women on the move. 100% cotton.</p>
                                    <button class=""><i class="fas fa-shopping-cart"></i></button>
                                    <button class=""><i class="far fa-heart"></i></button>
                                    <button class=""><i class="fas fa-link"></i></button>
                              </div>
                        </div>
                        <div class="product-view">
                              <ul class="view-pricetag">
                                    <li><span>£</span>34.79</li>
                              </ul>
                              <picture>
                                    <source media="(min-width: 1200px)" srcset="../assets/img/blacktshirt.jpg">  
                                    <source media="(min-width: 768px)" srcset="../assets/img/blacktshirt-tablet.jpg">  
                                    <img src="../assets/img/blacktshirt.jpg" alt="">
                              </picture>
                        </div>
                  </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
    name: 'ProductFront',
    }
</script>
