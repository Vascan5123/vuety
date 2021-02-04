<template>
  <v-container class="pt-15">
    <v-card flat color="transparent" class="mb-10">
      <v-card-title class="justify-center text-center title1 display-2 font-weight-light">
        Our Team Members
      </v-card-title>
      <v-col cols="11" md="8" class="mx-auto text-center pa-0">
        <v-card-subtitle class="justify-center title font-weight-regular pa-0">
          Authoritatively mesh intuitive paradigms vis-a-vis goal-oriented
          partnerships. Continually extend open-source outside the box thinking
          after focused catalysts.
        </v-card-subtitle>
      </v-col>
    </v-card>
    <v-row justify="center">
      <v-col cols="6" sm="5" md="4" lg="3" xl="2">
        <v-card elevation="3" class="text-center cards_about">
          <firstPerson />
          <v-card class="ma-2" flat>
            <v-card-title class="justify-center text_cards pt-0">
              Robert Statham
            </v-card-title>
            <v-card-subtitle class="text-subtitle-2 text_cards">
              Web Developer
            </v-card-subtitle>
            <v-card-text class="text-subtitle-2 text_cards pb-0">
              Authoritatively engage leading-edge processes tactical capital
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn href="#" icon aria-label="facebook"><v-icon>mdi-facebook</v-icon></v-btn>
              <v-btn href="#" icon aria-label="twitter"><v-icon>mdi-twitter</v-icon></v-btn>
              <v-btn href="#" icon aria-label="github"><v-icon>mdi-github</v-icon></v-btn>
              <v-btn href="#" icon aria-label="linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="6" sm="5" md="4" lg="3" xl="2">
        <v-card elevation="3" class="text-center cards_about">
          <secondPerson />
          <v-card class="ma-2" flat>
            <v-card-title class="justify-center text_cards pt-0">
              Robert Statham
            </v-card-title>
            <v-card-subtitle class="text-subtitle-2 text_cards">
              Web Developer
            </v-card-subtitle>
            <v-card-text class="text-subtitle-2 text_cards pb-0">
              Authoritatively engage leading-edge processes tactical capital
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn href="#" icon aria-label="facebook"><v-icon>mdi-facebook</v-icon></v-btn>
              <v-btn href="#" icon aria-label="twitter"><v-icon>mdi-twitter</v-icon></v-btn>
              <v-btn href="#" icon aria-label="github"><v-icon>mdi-github</v-icon></v-btn>
              <v-btn href="#" icon aria-label="linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="6" sm="5" md="4" lg="3" xl="2">
        <v-card elevation="3" class="text-center cards_about">
          <thirdPerson />
          <v-card class="ma-2" flat>
            <v-card-title class="justify-center text_cards pt-0">
              Robert Statham
            </v-card-title>
            <v-card-subtitle class="text-subtitle-2 text_cards">
              Web Developer
            </v-card-subtitle>
            <v-card-text class="text-subtitle-2 text_cards pb-0">
              Authoritatively engage leading-edge processes tactical capital
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn href="#" icon aria-label="facebook"><v-icon>mdi-facebook</v-icon></v-btn>
              <v-btn href="#" icon aria-label="twitter"><v-icon>mdi-twitter</v-icon></v-btn>
              <v-btn href="#" icon aria-label="github"><v-icon>mdi-github</v-icon></v-btn>
              <v-btn href="#" icon aria-label="linkedin"><v-icon>mdi-linkedin</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="6" sm="5" md="4" lg="3" xl="2">
        <v-card elevation="3" class="text-center cards_about">
          <fourPerson />
          <v-card class="ma-2" flat>
            <v-card-title class="justify-center text_cards pt-0">
              Robert Statham
            </v-card-title>
            <v-card-subtitle class="text-subtitle-2 text_cards">
              Web Developer
            </v-card-subtitle>
            <v-card-text class="text-subtitle-2 text_cards pb-0">
              Authoritatively engage leading-edge processes tactical capital
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn href="#" icon aria-label="facebook"><v-icon>mdi-facebook</v-icon></v-btn>
              <v-btn href="#" icon aria-label="facebook"><v-icon>mdi-twitter</v-icon></v-btn>
              <v-btn href="#" icon aria-label="facebook"><v-icon>mdi-github</v-icon></v-btn>
              <v-btn href="#" icon aria-label="facebook"><v-icon>mdi-linkedin</v-icon></v-btn>
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
.cards_about {
  overflow: hidden;
}
@media (max-width: 500px) {
  .cards_about {
    zoom: 0.8;
  }
}
.title1 {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: normal;
  line-break: strict;
  hyphens: none;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  color: #0c1a35;
}
.title2 {
  color: #696969;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: normal;
  line-break: strict;
  hyphens: none;
  -webkit-hyphens: none;
  -moz-hyphens: none;
}
.text_cards {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>