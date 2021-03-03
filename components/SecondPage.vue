<template>
  <v-container id="secondpage" class="text-center px-md-10 pt-15" fluid>
    <v-row>
      <v-col align-self="start" cols="12" sm="6" md="6">
        <v-card class="text-left" flat color="transparent">
          <v-card-title
            class="text_top raleway font-weight-light"
            :class="$vuetify.theme.dark ? 'text_top_dark' : ''"
          >Web Development</v-card-title>
          <!-- <v-card-subtitle
            class="text_top_subtitle raleway font-weight-regular py-8"
            :class="$vuetify.theme.dark ? 'text_top_subtitle_dark' : ''"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquet quam turpis, nec imperdiet sem luctus nec. Sed
            pharetra risus a turpis pulvinar rutrum.
          </v-card-subtitle> -->
          <v-card-actions>
            <v-row class="text-center px-xl-15" v-if="$vuetify.theme.dark">
              <v-col cols="6" lg="5" class="pa-lg-5">
                <v-card
                  :color="blockNumber == 0 ? '#444444' : '#9C9C9C'"
                  :class="blockNumber == 0 ? 'cards_dark_active' : 'cards_dark'"
                  class="pa-5 py-lg-6 py-10 py-sm-3 rounded-lg cards"
                  elevation="3"
                  @click="loadBlock(0)"
                >
                  <v-img width="60%" class="mx-auto d-flex">
                    <response />
                  </v-img>
                  <v-card-title
                    class="justify-center text_title_cards raleway py-0 py-sm-5"
                  >Responsive</v-card-title>
                  <v-card-subtitle
                    class="pa-1 text_subtitle_cards raleway d-none d-md-flex"
                  >A complete about-face economy Amsterdams</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="6" lg="5" class="pa-lg-5">
                <v-card
                  :color="blockNumber == 1 ? '#444444' : '#9C9C9C'"
                  :class="blockNumber == 1 ? 'cards_dark_active' : 'cards_dark'"
                  class="pa-5 py-lg-6 py-10 py-sm-3 rounded-lg cards"
                  elevation="3"
                  @click="loadBlock(1)"
                >
                  <v-img width="60%" class="mx-auto d-flex">
                    <fixing />
                  </v-img>
                  <v-card-title class="justify-center text_title_cards raleway py-0 py-sm-5">Fixing</v-card-title>
                  <v-card-subtitle
                    class="pa-1 text_subtitle_cards raleway d-none d-md-flex"
                  >A complete about-face economy Amsterdams</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="6" lg="5" class="pa-lg-5">
                <v-card
                  :color="blockNumber == 2 ? '#444444' : '#9C9C9C'"
                  :class="blockNumber == 2 ? 'cards_dark_active' : 'cards_dark'"
                  class="pa-5 py-lg-6 py-10 py-sm-3 rounded-lg cards"
                  elevation="3"
                  @click="loadBlock(2)"
                >
                  <v-img width="52%" class="mx-auto d-flex">
                    <testing />
                  </v-img>
                  <v-card-title class="justify-center text_title_cards raleway py-0 py-sm-5">Testing</v-card-title>
                  <v-card-subtitle
                    class="pa-1 text_subtitle_cards raleway d-none d-md-flex"
                  >A complete about-face economy Amsterdams</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="6" lg="5" class="pa-lg-5">
                <v-card
                  :color="blockNumber == 3 ? '#444444' : '#9C9C9C'"
                  :class="blockNumber == 3 ? 'cards_dark_active' : 'cards_dark'"
                  class="pa-5 py-lg-6 py-10 py-sm-3 rounded-lg cards"
                  elevation="3"
                  @click="loadBlock(3)"
                >
                  <v-img width="60%" class="mx-auto d-flex">
                    <manage />
                  </v-img>
                  <v-card-title class="justify-center text_title_cards raleway py-0 py-sm-5">Manage</v-card-title>
                  <v-card-subtitle
                    class="pa-1 text_subtitle_cards raleway d-none d-md-flex"
                  >A complete about-face economy Amsterdams</v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="text-center px-xl-15" v-if="!$vuetify.theme.dark">
              <v-col cols="6" lg="5" class="pa-lg-5">
                <!-- :color="blockNumber == 0 ? '#EF58A4' : undefined"
                :dark="blockNumber == 0 ? 'dark' : undefined"-->
                <v-card
                  :color="blockNumber == 0 ? '#EF58A4' : undefined"
                  :dark="blockNumber == 0 ? 'dark' : undefined"
                  class="pa-5 py-lg-6 py-10 py-sm-3 rounded-lg cards"
                  elevation="3"
                  @click="loadBlock(0)"
                >
                  <v-img width="60%" class="mx-auto d-flex">
                    <response />
                  </v-img>
                  <v-card-title
                    class="justify-center text_title_cards raleway py-0 py-sm-5"
                  >Responsive</v-card-title>
                  <v-card-subtitle
                    class="pa-1 text_subtitle_cards raleway d-none d-md-flex"
                  >A complete about-face economy Amsterdams</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="6" lg="5" class="pa-lg-5">
                <v-card
                  :color="blockNumber == 1 ? '#EF58A4' : undefined"
                  :dark="blockNumber == 1 ? 'dark' : undefined"
                  class="pa-5 py-lg-6 py-10 py-sm-3 rounded-lg cards"
                  elevation="3"
                  @click="loadBlock(1)"
                >
                  <v-img width="60%" class="mx-auto d-flex">
                    <fixing />
                  </v-img>
                  <v-card-title class="justify-center text_title_cards raleway py-0 py-sm-5">Fixing</v-card-title>
                  <v-card-subtitle
                    class="pa-1 text_subtitle_cards raleway d-none d-md-flex"
                  >A complete about-face economy Amsterdams</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="6" lg="5" class="pa-lg-5">
                <v-card
                  :color="blockNumber == 2 ? '#EF58A4' : undefined"
                  :dark="blockNumber == 2 ? 'dark' : undefined"
                  class="pa-5 py-lg-6 py-10 py-sm-3 rounded-lg cards"
                  elevation="3"
                  @click="loadBlock(2)"
                >
                  <v-img width="52%" class="mx-auto d-flex">
                    <testing />
                  </v-img>
                  <v-card-title class="justify-center text_title_cards raleway py-0 py-sm-5">Testing</v-card-title>
                  <v-card-subtitle
                    class="pa-1 text_subtitle_cards raleway d-none d-md-flex"
                  >A complete about-face economy Amsterdams</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="6" lg="5" class="pa-lg-5">
                <v-card
                  :color="blockNumber == 3 ? '#EF58A4' : undefined"
                  :dark="blockNumber == 3 ? 'dark' : undefined"
                  class="pa-5 py-lg-6 py-10 py-sm-3 rounded-lg cards"
                  elevation="3"
                  @click="loadBlock(3)"
                >
                  <v-img width="60%" class="mx-auto d-flex">
                    <manage />
                  </v-img>
                  <v-card-title class="justify-center text_title_cards raleway py-0 py-sm-5">Manage</v-card-title>
                  <v-card-subtitle
                    class="pa-1 text_subtitle_cards raleway d-none d-md-flex"
                  >A complete about-face economy Amsterdams</v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col align-self="center" cols="12" sm="6" md="6">
        <v-tabs-items v-model="tabs" class="transparent">
          <v-tab-item class="no-transition">
            <v-card class="svg_img_enable" flat color="transparent">
              <v-col cols="12" md="10" lg="8" class="mx-auto">
                <responsesvg />
              </v-col>
              <v-card-title
                class="font-weight-light text_content_card raleway justify-center"
                :class="$vuetify.theme.dark ? 'text_content_card_dark' : ''"
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
                class="font-weight-light text_content_card raleway justify-center"
                :class="$vuetify.theme.dark ? 'text_content_card_dark' : ''"
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
                class="font-weight-light text_content_card raleway justify-center"
                :class="$vuetify.theme.dark ? 'text_content_card_dark' : ''"
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
                class="font-weight-light text_content_card raleway justify-center"
                :class="$vuetify.theme.dark ? 'text_content_card_dark' : ''"
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
.cards:hover {
  transform: translate(0px, -20px);
}
.cards:hover > div {
  opacity: 0.9;
}
.cards {
  transition: 0.2s;
}
.cards_dark_active {
  border: 3px solid #ea54ad !important;
}
.cards_dark {
  border: 3px solid #9c9c9c !important;
}
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

@keyframes text_content_card_anim {
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
.text_content_card_dark {
  color: #ff648a !important;
}
.text_content_card {
  word-break: keep-all;
  opacity: 0;
  animation: text_content_card_anim 0.6s alternate forwards;
  animation-delay: 0.3s;
}
.text_subtitle_cards {
  word-break: keep-all;
  font-weight: 400;
}
.text_title_cards {
  word-break: keep-all;
  font-weight: 400;
}
.text_top_subtitle_dark {
  color: #ff648a !important;
}
.text_top_subtitle {
  font-size: 1.25rem !important;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
}
.text_top_dark {
  color: #ea54ad !important;
}
.text_top {
  word-break: keep-all;
  font-size: 2.6rem;
  line-height: 3.125rem;
}
</style>
