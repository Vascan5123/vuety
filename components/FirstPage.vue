<template>
  <v-container class="text-center contain_1" fluid>
    <v-col class="align-self-center align-self-lg-center">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="6" lg="5" xl="4" class="col_1">
          <v-row class="mx-4">
            <v-btn
              @click="tab = 0"
              :class="{ yelow: tab == 0 }"
              rounded
              class="font-weight-bold mx-2 px-6"
              elevation="0"
              small
            >
              Food
            </v-btn>
            <v-btn
              @click="tab = 1"
              :class="{ yelow: tab == 1 }"
              rounded
              class="font-weight-bold px-6"
              elevation="0"
              small
            >
              Parcel
            </v-btn>
          </v-row>
          <v-tabs-items v-model="tab" class="mx-4 my-3 text-left">
            <v-tab-item>
              <v-card flat color="transparent">
                <v-card-title
                  class="purple1--text text-h4 text-sm-h3 text_top font-weight-bold"
                >
                  That Means We Don't Just Deliver
                </v-card-title>
                <v-card-text class="text-body-1 font-weight-regular">
                  And it means this is delicious food you can enjoy everyday:
                  from vibrant salads for healthy office.
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    outlined
                    x-large
                    rounded
                    class="pa-7"
                    color="yellow darken-3"
                  >
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat color="transparent">
                <v-card-title
                  class="purple1--text text-h4 text-sm-h3 text_top font-weight-bold"
                >
                  That Means We Don't Just Deliver
                </v-card-title>
                <v-card-text class="text-body-1 font-weight-regular">
                  And it means this is delicious food you can enjoy everyday:
                  from vibrant salads for healthy office.
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    outlined
                    x-large
                    rounded
                    class="pa-7"
                    color="yellow darken-3"
                  >
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
        <v-col md="3" lg="6" class="d-none d-md-flex"></v-col>
      </v-row>
      <v-btn
        class="btn_bottom d-none d-md-flex"
        href="#secondpageid"
        icon
        x-large
        color="#685f99"
        elevation="2"
      >
        <v-icon>mdi-chevron-double-down</v-icon>
      </v-btn>
    </v-col>
    <indexSvgRightTop v-if="svg_1_active" />
    <indexSvgRight v-if="svg_2_active" />
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
    }
  },
};
</script>

<style scoped>
.btn_bottom {
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, 0%);
  animation: fly_btn 1s infinite alternate ease-in;
}
@keyframes fly_btn {
  from {
    transform: translate(-50%, 0%);
  }
  to {
    transform: translate(-50%, 30%);
  }
}
.col_1 {
  position: relative;
  z-index: 2;
}
@media (max-width: 760px) {
  .col_1 {
    top: 150px;
  }
}
@media (min-width: 761px) and (max-width: 1200px) {
  .col_1 {
    top: 230px;
  }
}
.theme--light.v-tabs-items {
  background: transparent !important;
}
.yelow {
  background-color: #ffad23 !important;
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
</style>
