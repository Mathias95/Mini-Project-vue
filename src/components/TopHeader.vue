<template>
	<header class="header">
		<div class="header-container header__wrapper container">
			<div class="currency">
				<span class="currency__title">Currency :</span>
				<select class="currency-picker currency__select">
						<option class="currency__option" value="GPR">GPR</option>
						<option class="currency__option" value="DKK">DKK</option>
						<option class="currency__option" value="SEK">SEK</option>
						<option class="currency__option" value="EUR">EUR</option>
				</select>
			</div>
			<div class="header-info header__info">
				<ul class="member-dekstop header__login">
					<li class="header__login-item"><router-link to="/SignUp" class="header__login-link">Register</router-link></li>
					<li class="header__login-item"><router-link to="/SignUp" class="header__login-link">Sign in</router-link></li>
				</ul>
				<button class="basket header__basket"><i id="cart-icon" class="fas fa-shopping-cart header__basket-icon header__basket-icon--1"></i>empty<i id="arrow-icon" class="fas fa-angle-down header__basket-icon header__basket-icon--2"></i></button>  
			</div>
		</div>
	</header>
</template>

<script>
export default {
	
}
</script>