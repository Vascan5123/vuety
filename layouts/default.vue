<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <toolbar />
    <v-main id="mainid" class="main">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import toolbar from "../components/toolbar.vue";

export default {
  components: {
    toolbar,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>