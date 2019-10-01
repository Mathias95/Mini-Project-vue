<template>
    <section class="subbanner">
        <div class="container">
            <h1 class="subbanner__title">{{maintitle}}</h1>
            <p class="subbanner__text">{{subtext}}</p>
        </div>
    </section>
</template>

<script>
export default {
  name: 'SubBanner',

  props: {
      maintitle: String,
      subtext: String
  }
}
</script>
