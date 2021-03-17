<template>
  <v-container class="text-center px-md-10 py-10" fluid>
    <v-card flat color="transparent" class="mb-10">
      <v-card-title
        class="justify-center text-center text_top raleway font-weight-light"
        :class="$vuetify.theme.dark ? 'text_top_dark' : ''"
      >Unlock Full Power Of sApp</v-card-title>
      <v-col cols="11" md="8" class="mx-auto text-center pa-0">
        <v-card-subtitle class="justify-center text_top_subtitle raleway font-weight-regular pa-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
        </v-card-subtitle>
      </v-col>
    </v-card>
    <v-row justify="center" class="ma-0">
      <v-col
        cols="10"
        sm="4"
        md="4"
        lg="3"
        class="px-xl-8"
        :class="$vuetify.theme.dark ? 'price_cards_dark' : 'price_cards'"
      >
        <v-card class="rounded-lg py-4 py-md-8" color="price_card" elevation="3">
          <!-- <v-row class="ma-0" justify="center"> -->
          <!-- <img width="50%" src="../static/icons/bike.png" alt="bike" /> -->
          <v-img eager class="mx-auto" contain width="60%" :src="img_bike"></v-img>
          <!-- </v-row> -->
          <div class="price_content">
            <v-card-title
              class="headline font-weight-regular text-uppercase text_name_categories_price justify-center"
              :class="$vuetify.theme.dark ? 'text_name_categories_price_dark' : ''"
            >Basic</v-card-title>
            <v-card-title
              class="headline font-weight-black text-uppercase text_price justify-center secondary--text"
            >
              $
              <span class="display-2">49</span>
            </v-card-title>
            <v-list class="px-3 px-md-8" color="transparent">
              <v-list-item>
                <v-list-item-title
                  class="text_categories_price font-weight-regular raleway"
                >5 gb Linux</v-list-item-title>
              </v-list-item>
              <hr style="opacity: 35%" />
              <v-list-item>
                <v-list-item-title
                  class="text_categories_price font-weight-regular raleway"
                >text text text</v-list-item-title>
              </v-list-item>
              <hr style="opacity: 35%" />
              <v-list-item>
                <v-list-item-title
                  class="text_categories_price font-weight-regular raleway"
                >text text text</v-list-item-title>
              </v-list-item>
              <hr style="opacity: 35%" />
              <v-list-item>
                <v-list-item-title
                  class="text_categories_price font-weight-regular raleway"
                >text text text</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-card>
      </v-col>
      <v-col
        cols="10"
        sm="4"
        md="4"
        lg="3"
        class="px-xl-8"
        :class="$vuetify.theme.dark ? 'price_cards_dark' : 'price_cards'"
      >
        <v-card class="rounded-lg py-4 py-md-8" color="price_card" elevation="3">
          <v-img eager class="mx-auto" contain width="60%" :src="img_scooter"></v-img>
          <div class="price_content">
            <v-card-title
              class="headline font-weight-regular text-uppercase text_name_categories_price justify-center"
              :class="$vuetify.theme.dark ? 'text_name_categories_price_dark' : ''"
            >Pro</v-card-title>
            <v-card-title
              class="headline font-weight-black text-uppercase text_price justify-center secondary--text"
            >
              $
              <span class="display-2">99</span>
            </v-card-title>
            <v-list class="px-3 px-md-8" color="transparent">
              <v-list-item>
                <v-list-item-title
                  class="text_categories_price font-weight-regular raleway"
                >5 gb Linux</v-list-item-title>
              </v-list-item>
              <hr style="opacity: 35%" />
              <v-list-item>
                <v-list-item-title
                  class="text_categories_price font-weight-regular raleway"
                >text text text</v-list-item-title>
              </v-list-item>
              <hr style="opacity: 35%" />
              <v-list-item>
                <v-list-item-title
                  class="text_categories_price font-weight-regular raleway"
                >text text text</v-list-item-title>
              </v-list-item>
              <hr style="opacity: 35%" />
              <v-list-item>
                <v-list-item-title
                  class="text_categories_price font-weight-regular raleway"
                >text text text</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-card>
      </v-col>
      <v-col
        cols="10"
        sm="4"
        md="4"
        lg="3"
        class="px-xl-8"
        :class="$vuetify.theme.dark ? 'price_cards_dark' : 'price_cards'"
      >
        <v-card class="rounded-lg py-4 py-md-8" color="price_card" elevation="3">
          <v-img eager class="mx-auto" contain width="60%" :src="img_car"></v-img>
          <div class="price_content">
            <v-card-title
              class="headline font-weight-regular text-uppercase text_name_categories_price justify-center"
              :class="$vuetify.theme.dark ? 'text_name_categories_price_dark' : ''"
            >Gold</v-card-title>
            <v-card-title
              class="headline font-weight-black text-uppercase text_price justify-center secondary--text"
            >
              $
              <span class="display-2">199</span>
            </v-card-title>
            <v-list class="px-3 px-md-8" color="transparent">
              <v-list-item>
                <v-list-item-title
                  class="text_categories_price font-weight-regular raleway"
                >5 gb Linux</v-list-item-title>
              </v-list-item>
              <hr style="opacity: 35%" />
              <v-list-item>
                <v-list-item-title
                  class="text_categories_price font-weight-regular raleway"
                >text text text</v-list-item-title>
              </v-list-item>
              <hr style="opacity: 35%" />
              <v-list-item>
                <v-list-item-title
                  class="text_categories_price font-weight-regular raleway"
                >text text text</v-list-item-title>
              </v-list-item>
              <hr style="opacity: 35%" />
              <v-list-item>
                <v-list-item-title
                  class="text_categories_price font-weight-regular raleway"
                >text text text</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      img_bike: require("../static/icons/bike.png"),
      img_scooter: require("../static/icons/scooter.png"),
      img_car: require("../static/icons/car.png"),
    };
  },
};
</script>

<style scoped>
@media (max-width: 500px) {
  .price_cards,
  .price_cards_dark {
    zoom: 0.85;
  }
}
.price_cards {
  transition: 0.2s;
}
.price_cards:hover {
  transform: translate(0px, -20px);
}
.price_cards:hover > div {
  background: #f5f5f5;
}
.price_cards_dark {
  transition: 0.2s;
}
.price_cards_dark > div {
  background: #363636;
}
.price_cards_dark:hover {
  transform: translate(0px, -20px);
}
.price_cards_dark:hover > div {
  background: #333333;
}
.text_top_subtitle {
  font-size: 1.25rem !important;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
}
.text_top {
  word-break: keep-all;
  font-size: 2.5rem;
  line-height: 3.125rem;
}
@media (max-width: 500px) {
  .text_top {
    font-size: 1.7rem !important;
  }
  .text_top_subtitle {
    font-size: 1rem !important;
  }
}
.text_top_dark {
  color: #7650a1 !important;
}
.text_price {
  align-items: flex-end !important;
  letter-spacing: 0.25rem !important;
}
.text_categories_price {
  /* color: rgb(116, 116, 116) !important; */
  letter-spacing: 0.1rem !important;
}
.text_name_categories_price {
  /* color: rgb(83, 83, 83) !important; */
  letter-spacing: 0.3rem !important;
  font-size: 1.5rem;
}
.text_name_categories_price_dark {
  color: #7650a1 !important;
}
</style>