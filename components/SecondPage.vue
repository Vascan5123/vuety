<template>
  <v-container id="secondpage" class="text-center px-md-10" fluid>
    <v-row>
      <v-col align-self="start" cols="12" sm="6" md="6">
        <v-card-title class="overline text-h6 blue--text">
          Features
        </v-card-title>
        <v-card class="text-left" flat color="transparent">
          <v-card-title class="display-2 font-weight-light text_top">
            Web Development
          </v-card-title>
          <v-card-subtitle class="title font-weight-regular py-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquet quam turpis, nec imperdiet sem luctus nec. Sed
            pharetra risus a turpis pulvinar rutrum.
          </v-card-subtitle>
          <v-card-actions>
            <v-row class="text-center px-lg-15">
              <v-col cols="6" md="5" class="pa-lg-5">
                <v-card
                  :color="blockNumber == 0 ? 'indigo' : undefined"
                  :dark="blockNumber == 0 ? 'dark' : undefined"
                  class="pa-5 py-lg-6 py-10 py-sm-3 rounded-xl"
                  elevation="3"
                  @click="loadBlock(0)"
                >
                  <v-img width="60%" class="mx-auto d-flex">
                    <response />
                  </v-img>
                  <v-card-title class="justify-center text_top py-0 py-sm-5"
                    >Responsive</v-card-title
                  >
                  <v-card-subtitle class="pa-1 text_top d-none d-sm-flex"
                    >A complete about-face economy Amsterdams</v-card-subtitle
                  >
                </v-card>
              </v-col>
              <v-col cols="6" md="5" class="pa-lg-5">
                <v-card
                  :color="blockNumber == 1 ? 'indigo' : undefined"
                  :dark="blockNumber == 1 ? 'dark' : undefined"
                  class="pa-5 py-lg-6 py-10 py-sm-3 rounded-xl"
                  elevation="3"
                  @click="loadBlock(1)"
                >
                  <v-img width="60%" class="mx-auto d-flex">
                    <fixing />
                  </v-img>
                  <v-card-title class="justify-center text_top py-0 py-sm-5"
                    >Fixing</v-card-title
                  >
                  <v-card-subtitle class="pa-1 text_top d-none d-sm-flex"
                    >A complete about-face economy Amsterdams</v-card-subtitle
                  >
                </v-card>
              </v-col>
              <v-col cols="6" md="5" class="pa-lg-5">
                <v-card
                  :color="blockNumber == 2 ? 'indigo' : undefined"
                  :dark="blockNumber == 2 ? 'dark' : undefined"
                  class="pa-5 py-lg-6 py-10 py-sm-3 rounded-xl"
                  elevation="3"
                  @click="loadBlock(2)"
                >
                  <v-img width="52%" class="mx-auto d-flex">
                    <testing />
                  </v-img>
                  <v-card-title class="justify-center text_top py-0 py-sm-5"
                    >Testing</v-card-title
                  >
                  <v-card-subtitle class="pa-1 text_top d-none d-sm-flex"
                    >A complete about-face economy Amsterdams</v-card-subtitle
                  >
                </v-card>
              </v-col>
              <v-col cols="6" md="5" class="pa-lg-5">
                <v-card
                  :color="blockNumber == 3 ? 'indigo' : undefined"
                  :dark="blockNumber == 3 ? 'dark' : undefined"
                  class="pa-5 py-lg-6 py-10 py-sm-3 rounded-xl"
                  elevation="3"
                  @click="loadBlock(3)"
                >
                  <v-img width="60%" class="mx-auto d-flex">
                    <manage />
                  </v-img>
                  <v-card-title class="justify-center text_top py-0 py-sm-5"
                    >Manage</v-card-title
                  >
                  <v-card-subtitle class="pa-1 text_top d-none d-sm-flex"
                    >A complete about-face economy Amsterdams</v-card-subtitle
                  >
                </v-card>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col align-self="center" cols="12" sm="6" md="6">
        <v-tabs-items v-model="tabs" class="grey lighten-5">
          <v-tab-item class="no-transition">
            <v-card class="svg_img_enable" flat color="transparent">
              <v-col cols="12" md="10" lg="8" class="mx-auto">
                <responsesvg />
              </v-col>
              <v-card-title
                class="font-weight-light text_top justify-center svg_text_subtitle"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque aliquet quam turpis, nec imperdiet sem luctus nec.
                Sed pharetra risus a turpis pulvinar rutrum. Sed pharetra risus
                a turpis pulvinar rutrum.
              </v-card-title>
            </v-card>
          </v-tab-item>
          <v-tab-item class="no-transition">
            <v-card class="svg_img_enable" flat color="transparent">
              <v-col cols="12" md="10" lg="8" class="mx-auto">
                <bugfixing />
              </v-col>
              <v-card-title
                class="font-weight-light text_top justify-center svg_text_subtitle"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque aliquet quam turpis, nec imperdiet sem luctus nec.
                Sed pharetra risus a turpis pulvinar rutrum. Sed pharetra risus
                a turpis pulvinar rutrum.
              </v-card-title>
            </v-card>
          </v-tab-item>
          <v-tab-item class="no-transition">
            <v-card class="svg_img_enable" flat color="transparent">
              <v-col cols="12" md="10" lg="8" class="mx-auto">
                <testingsvg />
              </v-col>
              <v-card-title
                class="font-weight-light text_top justify-center svg_text_subtitle"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque aliquet quam turpis, nec imperdiet sem luctus nec.
                Sed pharetra risus a turpis pulvinar rutrum. Sed pharetra risus
                a turpis pulvinar rutrum.
              </v-card-title>
            </v-card>
          </v-tab-item>
          <v-tab-item class="no-transition">
            <v-card class="svg_img_enable" flat color="transparent">
              <v-col cols="12" md="10" lg="8" class="mx-auto">
                <managesvg />
              </v-col>
              <v-card-title
                class="font-weight-light text_top justify-center svg_text_subtitle"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque aliquet quam turpis, nec imperdiet sem luctus nec.
                Sed pharetra risus a turpis pulvinar rutrum. Sed pharetra risus
                a turpis pulvinar rutrum.
              </v-card-title>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import response from "./svg/secondpage/response.vue";
import fixing from "./svg/secondpage/fixing.vue";
import testing from "./svg/secondpage/testing.vue";
import manage from "./svg/secondpage/manage.vue";
import bugfixing from "./svg/secondpage/bugfixing.vue";
import managesvg from "./svg/secondpage/managesvg.vue";
import responsesvg from "./svg/secondpage/responsesvg.vue";
import testingsvg from "./svg/secondpage/testingsvg.vue";

export default {
  components: {
    response,
    fixing,
    testing,
    manage,
    bugfixing,
    managesvg,
    responsesvg,
    testingsvg,
  },
  data() {
    return {
      blockNumber: 0,
      tabs: 0,
    };
  },
  methods: {
    loadBlock(num) {
      this.blockNumber = num;
      this.tabs = num;
    },
  },
};
</script>

<style scoped>
.svg_img_enable {
  opacity: 0;
  animation: svg_img_enable_anim 1.3s alternate forwards;
}
@keyframes svg_img_enable_anim {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.svg_text_title {
  opacity: 0;
  animation: svg_text_title_anim 1s alternate forwards;
  animation-delay: 0.5s;
}
@keyframes svg_text_title_anim {
  from {
    opacity: 0;
    transform: translate(0px, -100px);
  }

  to {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
.svg_text_subtitle {
  opacity: 0;
  animation: svg_text_subtitle_anim 1s alternate forwards;
  animation-delay: 0.5s;
}
@keyframes svg_text_subtitle_anim {
  from {
    opacity: 0;
    transform: translate(0px, 100px);
  }

  to {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
.no-transition {
  transition: none;
}
.text_top {
  word-break: keep-all;
}
</style>
