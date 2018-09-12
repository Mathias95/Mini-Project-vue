<template>
    <section class="sub-banner">
        <div class="sub-banner-container">
            <h1>{{maintitle}}</h1>
            <p>{{subtext}}</p>
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
