<template>
  <v-app>
    <toolbar v-if="toolbar_active" />
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
      toolbar_active: false,
    };
  },
  mounted() {
    if (process.browser) {
      this.toolbar_active = true;
    }
  },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>