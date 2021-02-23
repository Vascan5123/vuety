<template>
  <v-container class="text-center px-md-10 py-10" fluid>
    <v-card-title
      class="font-weight-light text_top justify-center raleway"
      :class="$vuetify.theme.dark ? 'text_top_dark' : ''"
    >Get in Touch</v-card-title>
    <v-card-subtitle
      class="text_top_subtitle raleway font-weight-regular py-8"
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</v-card-subtitle>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card
          rounded="lg"
          class="pa-6"
          elevation="3"
          :class="$vuetify.theme.dark ? 'contact_card_dark' : ''"
        >
          <v-card-title
            class="font-weight-regular raleway text_title_cards justify-center"
          >Subscribe</v-card-title>
          <v-card-subtitle
            class="raleway text_subtitle_cards font-weight-regular py-4"
          >Subscribe to our newsletters and stay updated!</v-card-subtitle>
          <v-text-field label="Enter your email adress"></v-text-field>
          <v-btn elevation="2" rounded color="primary">Subscribe</v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card rounded="lg" class="pa-6" elevation="3" :class="$vuetify.theme.dark ? 'contact_card_dark' : ''">
          <v-card-title
            class="font-weight-regular raleway text_title_cards justify-center"
          >Contact Us</v-card-title>
          <v-card-subtitle
            class="raleway text_subtitle_cards font-weight-regular py-4"
          >Subscribe to our newsletters and stay updated!</v-card-subtitle>
          <v-text-field label="Enter your email adress"></v-text-field>
          <v-text-field label="Enter text"></v-text-field>
          <v-btn elevation="2" rounded color="primary">Send Message</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.contact_card_dark {
  background: #363636 !important;
}
.text_top_subtitle {
  font-size: 1.25rem !important;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
}
.text_subtitle_cards {
  word-break: keep-all;
  font-size: 1rem;
}
.text_title_cards {
  word-break: keep-all;
  font-size: 2rem;
  line-height: 2.125rem;
}
.text_top {
  word-break: keep-all;
  font-size: 2.5rem;
  line-height: 3.125rem;
}
.text_top_dark {
  color: #7650a1 !important;
}
</style>