<template>
  <v-app>
    <toolbar />
    <v-main id="mainid" class="main grey lighten-5">
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
};
</script>
<style scoped>
html {
  scroll-behavior: smooth;
}
</style>