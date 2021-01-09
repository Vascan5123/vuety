<template>
  <v-container fluid class="container_footer my-12">
    <v-parallax dark :height="height" src="/image1.png">
      <svg :width="`${width}%`" viewBox="0 0 1280 140" class="svg_white">
        <g fill="#FAFAFA">
          <path d="M0 140h1280C573.08 140 0 0 0 0z" fill-opacity=".3" />
          <path d="M0 140h1280C573.08 140 0 30 0 30z" fill-opacity=".5" />
          <path d="M0 140h1280C573.08 140 0 60 0 60z" />
        </g>
      </svg>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" md="7">
          <v-card-title class="justify-center text-h4 text-sm-h3 text_2">
            Ready To Make a Real Change? Let’s Build this Thing Together!
          </v-card-title>
        </v-col>
      </v-row>
      <svg :width="`${width}%`" viewBox="0 0 1280 140" class="svg_white2">
        <g fill="#FAFAFA">
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
.text_2 {
  font-family: "Roboto", Helvetica, Arial, Lucida, sans-serif;
  font-weight: 600;
  line-height: 1.4em;
  word-break: keep-all !important;
}
.container_footer {
  background-image: linear-gradient(
    130deg,
    #8624e1 25%,
    #3607a6 100%
  ) !important;
  padding: 0px;
}
.svg_white {
  z-index: 1;
  position: relative;
  top: -1px;
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