<template>
    <div>
        <nav class="mainnav">
            <div class="nav-container">
                <div id="MobileMenu">
									<Logo/>
									<button class="burger-menu">
											<span class="burger-icon"></span>
											<span class="burger-icon"></span>
											<span class="burger-icon"></span>    
									</button>
                </div>
                <div id="nav-elements">
                    <ul class="nav-items">
                        <li class="megamenu-trigger">
                            <a href="#">MENS<i id="arrow-icon" class="fas fa-angle-down"></i></a>
                            <div class="megamenu-content">
                                <div class="megamenu-wrapper">
                                    <div class="megamenu-col">
                                        <ul>
                                            <h3>Casuals <i id="arrow-icon" class="fas fa-angle-down"></i></h3>
                                            <li><a href="#">Jackets</a></li>
                                            <li><a href="#">Hoodies &#38; Sweatshirts</a></li>
                                            <li><a href="#">Polo Shirts</a></li>
                                            <li><a href="#">Sportwear</a></li>
                                            <li><a href="#">T-shirt</a></li>
                                        </ul>
                                    </div>
                                    <div class="megamenu-col">
                                        <ul>
                                            <h3>Formal <i id="arrow-icon" class="fas fa-angle-down"></i></h3>
                                            <li><a href="#">Jackets</a></li>
                                            <li><a href="#">Shirts</a></li>
                                            <li><a href="#">Suits</a></li>
                                            <li><a href="#">Trousers</a></li>
                                        </ul>
                                    </div>
                                    <div class="sale-offer">
                                        <h2>Autumn Sale!<span>Up to 50% Off</span></h2>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="#">WOMENS<i id="arrow-icon" class="fas fa-angle-down"></i></a></li>
                        <li><router-link to="/Brand">THE BRAND <i id="arrow-icon" class="fas fa-angle-down"></i></router-link></li>
                        <li><a href="#">LOCAL STORES<i id="arrow-icon" class="fas fa-angle-down"></i></a></li>
                        <li><a href="#">LOOK BOOK<i id="arrow-icon" class="fas fa-angle-down"></i></a></li>
                    </ul>
                    <div class="search-container">
                        <input type="text" placeholder="Search.." name="search">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                    <ul class="member-mobile">
                        <li><a href="#"><i class="fas fa-clipboard-list"></i> Register</a></li>
                        <li><a href="#"><i class="fas fa-user"></i> Sign in</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
	name: 'MainHeader',
	components: {
		Logo
	}
};
</script>
