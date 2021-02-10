<template>
  <v-container class="text-center px-md-10 py-10" fluid>
    <v-card-title class="display-2 font-weight-light text_top justify-center">Get in Touch</v-card-title>
    <v-card-subtitle
      class="title font-weight-regular py-8"
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</v-card-subtitle>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card rounded="xl" class="pa-5" outlined>
          <v-card-title class="display-1 font-weight-light text_top justify-center">Subscribe</v-card-title>
          <v-card-subtitle
            class="subtitle-1 font-weight-regular py-4"
          >Subscribe to our newsletters and stay updated!</v-card-subtitle>
          <v-text-field solo class label="Enter your email adress" filled></v-text-field>
          <v-btn elevation="2" rounded color="primary">Subscribe</v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card rounded="xl" class="pa-5" outlined>
          <v-card-title class="display-1 font-weight-light text_top justify-center">Contact Us</v-card-title>
          <v-card-subtitle
            class="subtitle-1 font-weight-regular py-4"
          >Subscribe to our newsletters and stay updated!</v-card-subtitle>
          <v-text-field solo class label="Enter your email adress" filled></v-text-field>
          <v-text-field solo class label="Enter text" filled></v-text-field>
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
.text_top {
  word-break: keep-all;
}
</style>