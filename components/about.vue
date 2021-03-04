<template>
  <v-container class="pt-15" fluid>
    <v-card flat color="transparent" class="mb-10">
      <v-card-title
        class="justify-center text-center text_top raleway font-weight-light"
      >Our Team Members</v-card-title>
      <v-col cols="11" md="8" class="mx-auto text-center pa-0">
        <v-card-subtitle class="justify-center text_top_subtitle raleway font-weight-regular pa-0">
          Authoritatively mesh intuitive paradigms vis-a-vis goal-oriented
          partnerships. Continually extend open-source outside the box thinking
          after focused catalysts.
        </v-card-subtitle>
      </v-col>
    </v-card>
    <v-row justify="center" class="px-md-15">
      <v-col cols="6" sm="5" md="3" lg="3" xl="2">
        <v-card
          elevation="3"
          class="text-center cards_about"
          rounded="lg"
          :class="$vuetify.theme.dark ? 'about_card_dark' : ''"
        >
          <firstPerson />
          <v-card class="pa-2" flat color="transparent">
            <v-card-title class="justify-center text_cards pt-0 raleway">Robert Statham</v-card-title>
            <v-card-subtitle class="text_cards raleway">Web Developer</v-card-subtitle>
            <v-card-text
              class="text_cards pb-0 raleway"
            >Authoritatively engage leading-edge processes tactical capital</v-card-text>
            <v-card-actions class="justify-center">
              <v-btn href="#" icon aria-label="facebook">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn href="#" icon aria-label="twitter">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn href="#" icon aria-label="github">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn href="#" icon aria-label="linkedin">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="6" sm="5" md="3" lg="3" xl="2">
        <v-card
          elevation="3"
          class="text-center cards_about"
          rounded="lg"
          :class="$vuetify.theme.dark ? 'about_card_dark' : ''"
        >
          <secondPerson />
          <v-card class="pa-2" flat color="transparent">
            <v-card-title class="justify-center text_cards pt-0 raleway">Robert Statham</v-card-title>
            <v-card-subtitle class="text_cards raleway">Web Developer</v-card-subtitle>
            <v-card-text
              class="text_cards pb-0 raleway"
            >Authoritatively engage leading-edge processes tactical capital</v-card-text>
            <v-card-actions class="justify-center">
              <v-btn href="#" icon aria-label="facebook">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn href="#" icon aria-label="twitter">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn href="#" icon aria-label="github">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn href="#" icon aria-label="linkedin">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="6" sm="5" md="3" lg="3" xl="2">
        <v-card
          elevation="3"
          class="text-center cards_about"
          rounded="lg"
          :class="$vuetify.theme.dark ? 'about_card_dark' : ''"
        >
          <thirdPerson />
          <v-card class="pa-2" flat color="transparent">
            <v-card-title class="justify-center text_cards pt-0 raleway">Robert Statham</v-card-title>
            <v-card-subtitle class="text_cards raleway">Web Developer</v-card-subtitle>
            <v-card-text
              class="text_cards pb-0 raleway"
            >Authoritatively engage leading-edge processes tactical capital</v-card-text>
            <v-card-actions class="justify-center">
              <v-btn href="#" icon aria-label="facebook">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn href="#" icon aria-label="twitter">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn href="#" icon aria-label="github">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn href="#" icon aria-label="linkedin">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="6" sm="5" md="3" lg="3" xl="2">
        <v-card
          elevation="3"
          class="text-center cards_about"
          rounded="lg"
          :class="$vuetify.theme.dark ? 'about_card_dark' : ''"
        >
          <fourPerson />
          <v-card class="pa-2" flat color="transparent">
            <v-card-title class="justify-center text_cards pt-0 raleway">Robert Statham</v-card-title>
            <v-card-subtitle class="text_cards raleway">Web Developer</v-card-subtitle>
            <v-card-text
              class="text_cards pb-0 raleway"
            >Authoritatively engage leading-edge processes tactical capital</v-card-text>
            <v-card-actions class="justify-center">
              <v-btn href="#" icon aria-label="facebook">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn href="#" icon aria-label="facebook">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn href="#" icon aria-label="facebook">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn href="#" icon aria-label="facebook">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import firstPerson from "../components/svg/about/firstPerson.vue";
import secondPerson from "../components/svg/about/secondPerson.vue";
import thirdPerson from "../components/svg/about/thirdPerson.vue";
import fourPerson from "../components/svg/about/fourPerson.vue";

export default {
  components: {
    firstPerson,
    secondPerson,
    thirdPerson,
    fourPerson,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.about_card_dark {
  background: #363636 !important;
}
.cards_about:hover {
  transform: translate(0px, -20px);
}
.cards_about:hover > div {
  opacity: 0.9;
}
.cards_about {
  overflow: hidden;
  transition: 0.2s;
}
@media (max-width: 500px) {
  .cards_about {
    zoom: 0.8;
  }
}
.text_cards {
  font-weight: 600;
  /* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
}
.text_top_subtitle {
  font-size: 1.25rem !important;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
}
.text_top {
  word-break: keep-all;
  font-size: 3rem;
  line-height: 3.125rem;
}
@media (max-width: 500px) {
  .text_top {
    font-size: 2rem !important;
  }
  .text_top_subtitle {
    font-size: 1.1rem !important;
  }
}
</style>