<template>
  <section class="lookbook padding-section">
      <div class="lookbook__container">
            <div class="lookbook__box">
              <img class="lookbook__img" src="../assets/img/menslook.png" alt="">
              <div class="lookbook__info">
                  <h2 class="lookbook__title">Men's<span>Lookbook</span></h2>
                  <p class="heading-5 lookbook__text">Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui. Elementum metus facilisis ut phasellu.</p>
                  <router-link to="/" class="btn btn-border--light">View Now</router-link>
              </div>
            </div>
            <div class="lookbook__box">
                <img class="lookbook__img" src="../assets/img/womenslook.png" alt="">
                <div class="lookbook__info">
                    <h2 class="lookbook__title">Women's<span>Lookbook</span></h2>
                    <p class="heading-5 lookbook__text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus.</p>
                    <router-link to="/" class="btn btn-border--light">View Now</router-link>
                </div>
            </div>
            <div class="lookbook__box">
                <img class="lookbook__img" src="../assets/img/youlook.png" alt="">
                <div class="lookbook__info">
                    <h2 class="lookbook__title">Your<span>Lookbook</span></h2>
                    <p class="heading-5 lookbook__text">See an item you like and click the <span><i class="far fa-heart"></i></span> button to add it to your lookbook where you can create your own perfect look. It’s like your own boutique!</p>
                    <router-link to="/" class="btn btn-border--light">View Now</router-link>
                </div>
            </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'MainLookbook',
}
</script>
