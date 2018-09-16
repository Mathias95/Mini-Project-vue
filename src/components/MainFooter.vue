<template>
      <div>
            <footer class="footer">
                  <div class="footer__container">
                        <div class="footer__col">
                              <ul class="footer__col--footeritems">
                                    <h3>Information</h3>
                                    <li><router-link to="/Brand">The brand</router-link></li>
                                    <li><a href="#">Local stores</a></li>
                                    <li><a href="#">Customer service</a></li>
                                    <li><a href="#">Privacy &#38; cookies</a></li>
                                    <li><a href="#">Site map</a></li>
                              </ul>
                        </div>
                        <div class="footer__col">
                              <ul class="footer__col--footeritems">
                                    <h3>Why Buy From Us</h3>
                                    <li><a href="#">Shipping &#38; returns</a></li>
                                    <li><a href="#">Secure shopping</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><router-link to="/Brand">Award winning</router-link></li>
                                    <li><router-link to="/Brand">Ethical trading</router-link></li>
                              </ul>
                        </div>
                        <div class="footer__col">
                              <ul class="footer__col--footeritems">
                                    <h3>Your Account</h3>
                                    <li><router-link to="/SignUp">Sign in</router-link></li>
                                    <li><router-link to="/SignUp">Register</router-link></li>
                                    <li><a href="#">View cart</a></li>
                                    <li><a href="#">View your lookbook</a></li>
                                    <li><a href="#">Track an order</a></li>
                                    <li><a href="#">Update information</a></li>
                              </ul>
                        </div>
                        <div class="footer__col">
                              <ul class="footer__col--footeritems">
                                    <h3>Lookbook</h3>
                                    <li><a href="#">Latest posts</a></li>
                                    <li><a href="#">Men’s lookbook</a></li>
                                    <li><a href="#">Women’s lookbook</a></li>
                                    <li><a href="#">Lookbooks RSS feed</a></li>
                                    <li><a href="#">Delete your lookbook</a></li>
                              </ul>
                        </div>
                        <div class="footer__col">
                              <ul class="footer__col--footeritems">
                                    <h3>Contact Details</h3>
                                    <li>Head Office: Avenue Fashion, 180-182 Regent Street, London.</li>
                                    <li>Telephone: <a href="tel:0123-456-789">0123-456-789</a></li>
                                    <li>Email: <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a></li>
                              </ul>
                        </div>
                        <div class="footer__banner">
                              <div class="footer__banner--awardbanner">
                                    <h4>AWARD WINNER <span>FASHION AWARDS 2016</span></h4>
                              </div>
                              <ul class="footer__banner--socialbanner">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                              </ul>
                        </div>
                  </div>
            </footer>
            <div class="copy">
                  <div class="copy__container">
                        <span>&#169; 2016 Avenue Fashion&#8482;</span>
                  </div>
            </div>
      </div>
</template>

<script>
    export default {
        name: "MainFooter",
    };
</script>