<template>
	<div>
		<footer class="footer">
			<div class="footer__container container">
				<div class="footer__wrapper">
					<div class="footer__col">
						<ul class="footer__items">
							<h3 class="heading-4 heading-4--bold footer__title">Information</h3>
							<li class="footer__item"><router-link class="footer__link" to="/Brand">The brand</router-link></li>
							<li class="footer__item"><router-link class="footer__link" to="#">Local stores</router-link></li>
							<li class="footer__item"><router-link class="footer__link" to="#">Customer service</router-link></li>
							<li class="footer__item"><router-link class="footer__link" to="#">Privacy &#38; cookies</router-link></li>
							<li class="footer__item"><router-link class="footer__link" to="#">Site map</router-link></li>
						</ul>
						</div>
						<div class="footer__col">
							<ul class="footer__items">
								<h3 class="heading-4 heading-4--bold footer__title">Why Buy From Us</h3>
								<li class="footer__item"><router-link class="footer__link" to="#">Shipping &#38; returns</router-link></li>
								<li class="footer__item"><router-link class="footer__link" to="#">Secure shopping</router-link></li>
								<li class="footer__item"><router-link class="footer__link" to="#">Testimonials</router-link></li>
								<li class="footer__item"><router-link class="footer__link" to="/Brand">Award winning</router-link></li>
								<li class="footer__item"><router-link class="footer__link" to="/Brand">Ethical trading</router-link></li>
							</ul>
						</div>
						<div class="footer__col">
							<ul class="footer__items">
								<h3 class="heading-4 heading-4--bold footer__title">Your Account</h3>
								<li class="footer__item"><router-link class="footer__link" to="/SignUp">Sign in</router-link></li>
								<li class="footer__item"><router-link class="footer__link" to="/SignUp">Register</router-link></li>
								<li class="footer__item"><router-link class="footer__link" to="#">View cart</router-link></li>
								<li class="footer__item"><router-link class="footer__link" to="#">View your lookbook</router-link></li>
								<li class="footer__item"><router-link class="footer__link" to="#">Track an order</router-link></li>
								<li class="footer__item"><router-link class="footer__link" to="#">Update information</router-link></li>
							</ul>
						</div>
						<div class="footer__col">
							<ul class="footer__items">
								<h3 class="heading-4 heading-4--bold footer__title">Lookbook</h3>
								<li class="footer__item"><router-link class="footer__link" to="#">Latest posts</router-link></li>
								<li class="footer__item"><router-link class="footer__link" to="#">Men’s lookbook</router-link></li>
								<li class="footer__item"><router-link class="footer__link" to="#">Women’s lookbook</router-link></li>
								<li class="footer__item"><router-link class="footer__link" to="#">Lookbooks RSS feed</router-link></li>
								<li class="footer__item"><router-link class="footer__link" to="#">Delete your lookbook</router-link></li>
							</ul>
						</div>
						<div class="footer__col">
							<ul class="footer__items">
								<h3 class="heading-4 heading-4--bold footer__title">Contact Details</h3>
								<li class="footer__item">Head Office: Avenue Fashion, 180-182 Regent Street, London.</li>
								<li class="footer__item">Telephone: <a class="footer__link" href="tel:0123-456-789">0123-456-789</a></li>
								<li class="footer__item">Email: <a class="footer__link" href="mailto:support@yourwebsite.com">support@yourwebsite.com</a></li>
							</ul>
						</div>
				</div>
				<div class="footer-banner">
					<div class="footer-banner__wrapper footer-banner__wrapper--award">
						<h4 class="footer-banner__title">AWARD WINNER <span>FASHION AWARDS 2016</span></h4>
					</div>
					<ul class="footer-banner__wrapper footer-banner__wrapper--social">
						<li class="footer-banner__item"><router-link class="footer-banner__link" to="#"><i class="fab fa-facebook-f"></i></router-link></li>
						<li class="footer-banner__item"><router-link class="footer-banner__link" to="#"><i class="fab fa-twitter"></i></router-link></li>
						<li class="footer-banner__item"><router-link class="footer-banner__link" to="#"><i class="fab fa-instagram"></i></router-link></li>
						<li class="footer-banner__item"><router-link class="footer-banner__link" to="#"><i class="fab fa-pinterest"></i></router-link></li>
					</ul>
				</div>
			</div>
		</footer>
		<div class="copy">
			<div class="copy__container container">
				<span class="copy__text">&#169; 2019 Avenue Fashion&#8482;</span>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "MainFooter",
    };
</script>