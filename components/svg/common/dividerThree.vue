<template>
  <v-container fluid class="container_footer my-12">
    <v-parallax :height="height" src="/image1.png">
      <svg :width="`${width}%`" viewBox="0 0 1280 140" class="svg_white">
        <g :class="{active_dark : $vuetify.theme.dark , active_light : !$vuetify.theme.dark}">
          <path d="M0 140h1280C573.08 140 0 0 0 0z" fill-opacity=".3" />
          <path d="M0 140h1280C573.08 140 0 30 0 30z" fill-opacity=".5" />
          <path d="M0 140h1280C573.08 140 0 60 0 60z" />
        </g>
      </svg>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" md="7">
          <v-card-title class="justify-center raleway font-weight-bold text_2">
            Ready To Make a Real Change? Let’s Build this Thing Together!
          </v-card-title>
        </v-col>
      </v-row>
      <svg :width="`${width}%`" viewBox="0 0 1280 140" class="svg_white2">
        <g :class="{active_dark : $vuetify.theme.dark , active_light : !$vuetify.theme.dark}">
          <path d="M0 140h1280C573.08 140 0 0 0 0z" fill-opacity=".3" />
          <path d="M0 140h1280C573.08 140 0 30 0 30z" fill-opacity=".5" />
          <path d="M0 140h1280C573.08 140 0 60 0 60z" />
        </g>
      </svg>
    </v-parallax>
  </v-container>
</template>

<script>
export default {
    computed: {
      height () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 350
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 500
          case 'xl': return 600
          default: return 0
        }
      },
      width () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 200
          case 'sm': return 130
          case 'md': return 110
          case 'lg': return 100
          case 'xl': return 100
          default: return 0
        }
      },
    },
};
</script>

<style scoped>
.active_dark {
  fill: #1e1e1e;
}
.active_light {
  fill: #fafafa;
}
.text_2 {
  line-height: 1.4em;
  word-break: keep-all !important;
}
@media (max-width: 605px) {
  .text_2 {
    font-size: 2rem !important;
  }
}
@media (min-width: 606px) {
  .text_2 {
    font-size: 3rem !important;
  }
}
.container_footer {
  background: linear-gradient(#EA54AD, #8A5CC0) !important;
  padding: 0px;
}
.svg_white {
  z-index: 1;
  position: relative;
  top: -2px;
  left: -16px;
  transform: rotateX(180deg);
  position: absolute;
}
.svg_white2 {
  z-index: 1;
  position: relative;
  bottom: -2px;
  right: -16px;
  transform: rotateY(-180deg);
  position: absolute;
}
</style>