<template>
  <div>
    <firstpage id="firstpage" />
    <dividerOne v-if="dividerOne" id="dividerOneid" />
    <secondpage v-if="secondpage" id="secondpageid" />
    <dividerTwo v-if="dividerTwo" id="dividerTwoid" />
    <thirdpage v-if="thirdpage" id="thirdpageid" />
    <dividerThree v-if="dividerThree" id="dividerThreeid" />
    <about v-if="about" id="aboutid" />
    <footer1 v-if="footer1" id="footerid" />
    <v-btn
      :class="{ btn_scroll_open: scrollTop > 300 }"
      class="btn_top pa-7 white--text"
      href="#mainid"
      icon
      elevation="8"
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
  },
  data() {
    return {
      tab: 0,
      scrollTop: 0,
      secondpage: false,
      thirdpage: false,
      about: false,
      footer1: false,
      dividerOne: false,
      dividerTwo: false,
      dividerThree: false,
    };
  },
  methods: {
    onScroll(e) {
      /* console.log(this.scrollTop) */
      this.scrollTop = e.target.documentElement.scrollTop;
    },
  },
  mounted() {
    if (process.browser) {
      this.secondpage = true;
      this.thirdpage = true;
      this.about = true;
      this.dividerOne = true;
      this.dividerTwo = true;
      this.dividerThree = true;
      this.footer1 = true;
      var newHeight = window.innerHeight;
      if (newHeight < 700) {
        newHeight = 700;
      }
      document.getElementById("firstpage").style.height = `${newHeight}px`;
    }
    window.addEventListener("scroll", this.onScroll);

    window.addEventListener("resize", function () {
      newHeight = window.innerHeight;
      if (newHeight < 700) {
        newHeight = 700;
      } else if (newHeight > 701 && newHeight < 850) {
        newHeight = window.outerHeight;
      }
      document.getElementById("firstpage").style.height = `${newHeight}px`;
    });
  },
};
</script>
<style scoped>
#firstpage {
  width: 100vw;
  height: 100vh;
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
  background: #3f51b5 !important;
}
</style>
