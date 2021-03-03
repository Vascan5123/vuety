<template>
  <div>
    <firstpage id="firstpageid" />
    <DividerOne id="dividerOneid" />
    <secondpage id="secondpageid" />
    <dividerTwo id="dividerTwoid" />
    <thirdpage id="thirdpageid" />
    <dividerThree id="dividerThreeid" />
    <price id="priceid" />
    <dividerFour id="dividerFourid" />
    <contact id="contactid" />
    <dividerFive id="dividerFiveid" />
    <about id="aboutid" />
    <footer1 id="footerid" />
    <v-btn
      :class="{ btn_scroll_open: scrollTop > 300 }"
      class="btn_top pa-7 white--text"
      @click="goto()"
      icon
      elevation="8"
      aria-label="top"
    >
      <v-icon>mdi-arrow-up-thick</v-icon>
    </v-btn>
  </div>
</template>

<script>
import firstpage from "../components/FirstPage.vue";
import secondpage from "../components/SecondPage.vue";
import thirdpage from "../components/ThirdPage.vue";
import about from "../components/about.vue";
import footer1 from "../components/Footer.vue";
import dividerOne from "../components/svg/common/dividerOne.vue";
import dividerTwo from "../components/svg/common/dividerTwo.vue";
import dividerThree from "../components/svg/common/dividerThree.vue";
import dividerFour from "../components/svg/common/dividerFour.vue";
import dividerFive from "../components/svg/common/dividerFive.vue";
import price from "../components/price.vue";
import contact from "../components/contact.vue";

export default {
  components: {
    firstpage,
    secondpage,
    thirdpage,
    about,
    footer1,
    dividerOne,
    dividerTwo,
    dividerThree,
    price,
    dividerFour,
    contact,
    dividerFive,
  },
  data() {
    return {
      tab: 0,
      scrollTop: 0,
    };
  },
  methods: {
    goto() {
      /* location.href = link; */
      window.scroll({
        top: -document.getElementsByTagName("html")[0].offsetHeight,
        behavior: "smooth",
      });
    },
    onScroll(e) {
      /* console.log(this.scrollTop) */
      /* history.pushState({page: 1}) */
      this.scrollTop = e.target.documentElement.scrollTop;
    },
  },
  mounted() {
    if (process.browser) {
      window.location.href = '/#';

      var newHeight = window.innerHeight;
      var newWidth = window.innerWidth;
      if (newHeight < 700 && newWidth < 600) {
        newHeight = 700;
        document.getElementById(
          "firstpageid"
        ).style.minHeight = `${newHeight}px`;
      } else {
        document.getElementById(
          "firstpageid"
        ).style.minHeight = `${newHeight}px`;
      }
      window.addEventListener("scroll", this.onScroll);

      window.addEventListener("resize", function () {
        newHeight = window.innerHeight;
        newWidth = window.innerWidth;
        if (newHeight < 700 && newWidth < 600) {
          newHeight = 700;

          document.getElementById(
            "firstpageid"
          ).style.minHeight = `${newHeight}px`;
        } else {
          document.getElementById(
            "firstpageid"
          ).style.minHeight = `${newHeight}px`;
        }
      });
    }
  },
};
</script>
<style scoped>
#firstpageid {
  width: 100vw;
}
.main {
  position: relative;
  width: 100%;
}
.btn_scroll_open {
  bottom: 5% !important;
}
.btn_top {
  transition: 0.5s;
  z-index: 2;
  position: fixed;
  bottom: -80px;
  right: 5%;
  background: #8a5cc0 !important;
}
</style>
