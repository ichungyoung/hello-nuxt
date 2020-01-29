<template>
  <header>
      <div class="nav">
      <div>{{ $t('global.schoolName')}}</div>
      <nav>
      <NuxtLink v-for="entry in languages" :key="entry.language"
        :to="`/`+ entry.language + $route.fullPath.replace(/^\/[^\/]+/, ``)" active-class="none" exact>
      {{ entry.title }}<country-flag :country="entry.flag" size="small" />
      </NuxtLink>
      </nav>
      </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default  {
  computed: {
    locale () {
      return this.$store.state.locale
    }
  },
  data() {
    return {
      name: 'world',
      languages: [
          { flag: 'us', language: 'en', title: 'English' },
          { flag: 'tw', language: 'zh', title: '中文' },
          //{ flag: 'es', language: 'es', title: 'Español' },
          //{ flag: 'fr', language: 'fr', title: 'Français' }
      ],
    }
  }
}
</script>

<style scoped>
  header{
    background-color: #000060;
    color: #f5d800;
    font-size: 20px;
    text-align: center;
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
  .nav a {
    display: inline-block;
  }
</style>