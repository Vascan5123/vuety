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
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>