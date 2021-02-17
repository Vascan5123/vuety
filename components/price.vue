<template>
  <v-container class="text-center px-md-10 py-10" fluid>
    <v-row justify="center" class="my-5">
      <v-card-title class="font-weight-light text_top raleway">Unlock Full Power Of sApp</v-card-title>
      <v-card-subtitle
        class="font-weight-regular py-8 raleway text_top_subtitle"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</v-card-subtitle>
    </v-row>
    <v-row justify="center" class="ma-0">
      <v-col cols="12" sm="4" md="4" lg="3" class="px-md-8 price_cards">
        <v-card class="rounded-lg py-4 py-md-8" color="price_card" elevation="3">
          <v-row class="ma-0" justify="center">
            <img width="50%" height="auto" src="../static/icons/bike.png" alt="bike" />
          </v-row>
          <div class="price_content">
            <v-card-title
              class="headline font-weight-regular text-uppercase text_name_categories_price justify-center"
            >Basic</v-card-title>
            <v-card-title
              class="headline font-weight-black text-uppercase text_price justify-center primary--text"
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
      <v-col cols="12" sm="4" md="4" lg="3" class="px-md-8 price_cards">
        <v-card class="rounded-lg py-4 py-md-8" color="price_card" elevation="3">
          <v-row class="ma-0" justify="center">
            <img width="50%" height="auto" src="../static/icons/scooter.png" alt="scooter" />
          </v-row>
          <div class="price_content">
            <v-card-title
              class="headline font-weight-regular text-uppercase text_name_categories_price justify-center"
            >Pro</v-card-title>
            <v-card-title
              class="headline font-weight-black text-uppercase text_price justify-center primary--text"
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
      <v-col cols="12" sm="4" md="4" lg="3" class="px-md-8 price_cards">
        <v-card class="rounded-lg py-4 py-md-8" color="price_card" elevation="3">
          <v-row class="ma-0" justify="center">
            <img width="50%" height="auto" src="../static/icons/car.png" alt="car" />
          </v-row>
          <div class="price_content">
            <v-card-title
              class="headline font-weight-regular text-uppercase text_name_categories_price justify-center"
            >Gold</v-card-title>
            <v-card-title
              class="headline font-weight-black text-uppercase text_price justify-center primary--text"
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
export default {};
</script>

<style scoped>
.price_cards {
  transition: 0.2s;
}
.price_cards:hover {
  transform: translate(0px, -20px);
}
.price_cards:hover > div {
  background: #f5f5f5;
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
</style>