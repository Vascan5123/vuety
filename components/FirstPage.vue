<template>
  <v-container class="text-center contain_1 pa-0" fluid>
    <v-row justify="center" justify-md="end" class="ma-0">
      <v-col
        align-self="center"
        cols="12"
        sm="8"
        md="5"
        lg="5"
        xl="4 "
        class="col_1"
        order="1"
        order-md="0"
        offset="0"
      >
        <v-row class="mx-4">
          <v-btn
            @click="tab = 0"
            :class="{ yelow: tab == 0 }"
            rounded
            class="font-weight-bold mx-2 px-6"
            elevation="0"
            small
          >Food</v-btn>
          <v-btn
            @click="tab = 1"
            :class="{ yelow: tab == 1 }"
            rounded
            class="font-weight-bold px-6"
            elevation="0"
            small
          >Parcel</v-btn>
        </v-row>
        <v-tabs-items v-model="tab" class="mx-4 my-3 text-left transparent">
          <v-tab-item>
            <v-card flat color="transparent">
              <v-card-title
                :class="$vuetify.theme.dark ? 'text_title_dark' : 'text_title_light'"
                class="raleway font-weight-medium"
              >That Means We Don't Just Deliver</v-card-title>
              <v-card-text class="raleway text_subtitle font-weight-medium">
                And it means this is delicious food you can enjoy everyday:
                from vibrant salads for healthy office.
              </v-card-text>
              <v-card-actions>
                <v-btn
                  outlined
                  x-large
                  rounded
                  class="pa-7"
                  :color="$vuetify.theme.dark ? '#CDCDCD' : '#8A5CC0'"
                >Learn More</v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat color="transparent">
              <v-card-title
                :class="$vuetify.theme.dark ? 'text_title_dark' : 'text_title_light'"
                class="raleway font-weight-medium"
              >That Means We Don't Just Deliver</v-card-title>
              <v-card-text class="raleway text_subtitle font-weight-medium">
                And it means this is delicious food you can enjoy everyday:
                from vibrant salads for healthy office.
              </v-card-text>
              <v-card-actions>
                <v-btn
                  outlined
                  x-large
                  rounded
                  class="pa-7"
                  :color="$vuetify.theme.dark ? '#CDCDCD' : '#8A5CC0'"
                >Learn More</v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
      <transition name="fade">
        <indexSvgRight v-if="svg_2_active" />
      </transition>
    </v-row>
    <v-btn
      id="btn_bottom_id"
      :class="$vuetify.theme.dark ? 'btn_bottom_dark' : 'btn_bottom_light'"
      class="btn_bottom d-none d-md-flex"
      href="/#secondpageid"
      icon
      x-large
      elevation="2"
      aria-label="bottom"
    >
      <v-icon>mdi-chevron-double-down</v-icon>
    </v-btn>
    <transition name="fade">
      <indexSvgRightTop v-if="svg_1_active" />
    </transition>
  </v-container>
</template>

<script>
import indexSvgRightTop from "../components/indexSvgRightTop.vue";
import indexSvgRight from "../components/indexSvgRight.vue";

export default {
  components: {
    indexSvgRightTop,
    indexSvgRight,
  },
  data() {
    return {
      tab: 0,
      svg_1_active: false,
      svg_2_active: false,
    };
  },
  mounted() {
    if (process.client) {
      this.svg_1_active = true;
      this.svg_2_active = true;

      var newHeight2 = window.innerHeight - 80;
      document.getElementById("btn_bottom_id").style.top = `${newHeight2}px`;

      window.addEventListener("resize", function () {
        newHeight2 = window.innerHeight - 80;
        document.getElementById("btn_bottom_id").style.top = `${newHeight2}px`;
      });
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.btn_bottom_light {
  color: #8a5cc0 !important;
}
.btn_bottom_dark {
  background: #cdcdcd;
  color: black !important;
}
.btn_bottom {
  z-index: 2;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  animation: fly_btn 1s infinite alternate ease-in;
}
@keyframes fly_btn {
  from {
    transform: translate(-50%, 0%);
  }
  to {
    transform: translate(-50%, 20%);
  }
}
.col_1 {
  position: relative;
  z-index: 2;
}
.theme--light.v-tabs-items {
  background: transparent !important;
}
.yelow {
  background-color: #c957b3 !important;
  color: white !important;
}
.text_top {
  word-break: keep-all;
}
.contain_1 {
  position: relative;
  z-index: 1;
  display: flex;
}
.text_subtitle {
  line-height: 1.5em;
  word-break: keep-all !important;
}
.text_title_dark,
.text_title_light {
  line-height: 1.3em;
  word-break: keep-all !important;
}
.text_title_dark {
  color: #cdcdcd;
}
.text_title_light {
  color: #512da8;
}
@media (max-width: 500px) {
  .text_title_dark,
  .text_title_light {
    font-size: 2rem !important;
  }
  .text_subtitle {
    font-size: 0.9rem !important;
  }
}
@media (min-width: 501px) {
  .text_title_dark,
  .text_title_light {
    font-size: 3rem !important;
  }
  .text_subtitle {
    font-size: 1.2rem !important;
  }
}
</style>
