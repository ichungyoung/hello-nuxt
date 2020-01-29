<template>
  <div class="nav">
    <div></div>
    <nav>
      <nuxt-link :to="`/` + locale ">{{ $t('links.home') }}</nuxt-link>&nbsp;|
      <nuxt-link :to="`/` + locale + `/classes`">{{ $t('links.classes') }}</nuxt-link>&nbsp;|
      <nuxt-link :to="`/` + locale + `/registration`">{{ $t('links.registration') }}</nuxt-link>&nbsp;|
      <nuxt-link :to="`/` + locale + `/admin`" exact>{{ $t('links.admin') }}</nuxt-link>&nbsp;|
      <nuxt-link :to="`/` + locale + `/about`" exact>{{ $t('links.about') }}</nuxt-link>&nbsp;
    </nav>
  </div>
</template>

<script>

export default  {
  computed: {
    locale () {
      return this.$store.state.locale
    }
  },
}
</script>
    
<style scoped>
  .brand {
    font-family: 'Montserrat', sans-serifArial, Helvetica, "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", sans-serif;
    font-weight: 700;
    font-size: 1.5em;
    color: #39b982;
    text-decoration: none;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
  .nav .nav-item {
    box-sizing: border-box;
    margin: 0 5px;
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
  }
  .nav .nav-item.router-link-exact-active {
    color: #39b982;
    border-bottom: solid 2px #39b982;
  }
  .nav a {
    display: inline-block;
  }
</style>