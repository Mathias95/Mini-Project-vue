<template>
  <div class="about">
		<sub-banner maintitle="The Brand" subtext="Company Slogan Goes Here"></sub-banner>
		<section class="brand padding-section">
			<div class="brand__wrapper container">

				<div class="brand__img brand__img--design">
					<img src="../assets/img/handdesign.jpg" alt="">
				</div>		
				<div class="brand__col brand__col--design">
					<h2 class="heading-3 brand__col-title">Hand designed clothing</h2>
					<span class="heading-5 heading-5--bold brand__col-subtitle">Established in 2013, avenue fashion Sed dictum elit vel sapien luctus eras</span>
					<p class="brand__col-text">Praesent feugiat malesuada tristique maecenas rhoncus diam eget quam vestibulim consectetur, id condimentum leo porttitor. Cum sociis natoque penatibus eta magnis disut parturient montes, nascetur ridiculus mus. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.</p>
				</div>

				<div class="brand__img brand__img--vision">
					<img src="../assets/img/vision.jpg" alt="">
				</div>
				<div class="brand__col brand__col--vision">
					<h2 class="heading-3 brand__col-title">Our values, vision and strategy</h2>
					<span class="heading-5 heading-5--bold brand__col-subtitle">The above image would be a great place for an advertising video</span>
					<p class="brand__col-text">Cras maximus venenatis malesuada. Nulla sagittis elit felis, ac facilisis quam ornare aliquam. Etiam cursus odio vitae dui dignissim, sed tempus lacus tincidunt et donec sapien velit, rhoncus eu nulla a, molestie tempus mi maecenas sagittis ornare.
					Pellentesque sapien mi, <a href="#">tincidunt nec magna vitae,</a> volutpat elementum odioni lorem Aliquam tempor massa vitae augue mattis tempor id in ante ut augue erat, luctus eil.</p>
				</div>

				<div class="brand__img brand__img--trading">
					<img src="../assets/img/trading.jpg" alt="">
				</div>
				<div class="brand__col brand__col--trading">
					<h2 class="heading-3 brand__col-title">Ethical trading</h2>
					<span class="heading-5 heading-5--bold brand__col-subtitle">We oversee the working conditions of the people in the supply chain</span>
					<p class="brand__col-text">Nullam dapibus consectetur neque, faucibus porttitor purus iaculis sed. Aenean eras dapibus augue, eget dignissim dui maecenas et rhoncus mim, vel semper arcu lorem
					Pellentesque congue justo esteir pellentesque aliquet massa eget posuere tincidunt. Cras viverra ullamcorper nunc accumsan hendrerit <a href="#">A link <i class="fas fa-long-arrow-alt-right"></i></a></p>
				</div>

				<div class="brand__col--award">
					<img src="../assets/img/award1.png" alt="">
					<img src="../assets/img/award2.png" alt="">
					<img src="../assets/img/award3.png" alt="">
				</div>
			</div>
		</section>
  </div>
</template>

<script>
// @ is an alias to /src
import SubBanner from '@/components/SubBanner.vue';

export default {
    name: 'signup',
    components: {
      SubBanner
  }
}
</script>