<template>
  <v-container fluid class="container_footer mt-12">
    <v-row no-gutters>
      <svg viewBox="0 0 845 185" class="svg_footer">
        <path
          d="M845 70.4483C845 70.4483 751.945 -19.5958 610.361 3.91591C415.746 36.2341 401.065 86.0875 246.145 119.472C72.0421 156.99 1 99.9628 1 99.9628V176H845V70.4483Z"
          fill="#55A1FA"
          fill-opacity="0.15"
        />
        <path
          d="M199 155C67.8971 161.085 0.5 99.5001 0.5 99.5001V185H845V168V115C845 115 742.5 -4.5 488 76.5001C391.27 107.287 317.5 149.5 199 155Z"
          fill="url(#paint0_linearfooter)"
        />
        <defs>
          <linearGradient
            id="paint0_linearfooter"
            x1="8.94307e-09"
            y1="185"
            x2="845"
            y2="185"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#51B5F7" />
            <stop offset="1" stop-color="#5291FB" />
          </linearGradient>
        </defs>
      </svg>
    </v-row>
    <v-row no-gutters>
      <v-card
        width="100%"
        flat
        class="card_footer pa-0 ma-0 pb-16"
        dark
        rounded="0"
      >
        <svg class="svg_bottom" viewBox="0 0 845 212">
          <path
            d="M845 212V57C845 57 812.266 19.7411 750.5 5.00003C705.397 -5.76432 635.41 1.72064 594 19.5C495.881 61.6271 479.5 98 418 129C346.333 165.125 319.5 161.5 202.5 156.5C85.5 151.5 0 212 0 212H133H845Z"
            fill="white"
            fill-opacity="0.1"
          />
        </svg>
        <v-col cols="12" md="8" class="mx-auto">
          <v-col cols="12">
            <v-card-title class="display-2 font-weight-light pa-0 text_top">
              Get started now
            </v-card-title>
          </v-col>
          <v-row no-gutters class="mt-12">
            <v-col cols="6" md="3">
              <v-card-title class="overline text-h6">
                {{ column1.title }}
              </v-card-title>
              <v-list dense color="transparent" width="auto">
                <v-list-item
                  v-for="(item, index) in column1.items"
                  :key="index"
                  link
                  :href="item.link"
                >
                  <v-list-item-title
                    v-text="item.name"
                    class="text-subtitle-1 font-weight-light text_1"
                  ></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="6" md="3">
              <v-card-title class="overline text-h6">
                {{ column2.title }}
              </v-card-title>
              <v-list dense color="transparent" width="auto">
                <v-list-item
                  v-for="(item, index) in column2.items"
                  :key="index"
                  link
                  :href="item.link"
                >
                  <v-list-item-title
                    v-text="item.name"
                    class="text-body-1 font-weight-light text_1"
                  ></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="6" md="3">
              <v-card-title class="overline text-h6">
                {{ column3.title }}
              </v-card-title>
              <v-list dense color="transparent" width="auto">
                <v-list-item
                  v-for="(item, index) in column3.items"
                  :key="index"
                  link
                  :href="item.link"
                >
                  <v-list-item-title
                    v-text="item.name"
                    class="text-subtitle-1 font-weight-light text_1"
                  ></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="6" md="3">
              <v-card-title class="overline text-h6">
                {{ column4.title }}
              </v-card-title>
              <v-list dense color="transparent" width="auto">
                <v-list-item
                  v-for="(item, index) in column4.items"
                  :key="index"
                  link
                  :href="item.link"
                >
                  <v-list-item-title
                    v-text="item.name"
                    class="text-subtitle-1 font-weight-light text_1"
                  ></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <v-row no-gutters justify="center" class="mt-12">
            <v-btn fab x-large class="mx-4" href="#">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn fab x-large class="mx-4" href="https://www.facebook.com/vuetycom">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn fab x-large class="mx-4" href="#">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      column1: {
        title: "Categories",
        items: [
          {
            name: "Accountants",
            link: "",
          },
          {
            name: "Auditors",
            link: "",
          },
          {
            name: "Actuarial",
            link: "",
          },
          {
            name: "Advisors",
            link: "",
          },
          {
            name: "Secretrail",
            link: "",
          },
        ],
      },
      column2: {
        title: "Community",
        items: [
          {
            name: "Accountants",
            link: "",
          },
          {
            name: "Auditors",
            link: "",
          },
          {
            name: "Actuarial",
            link: "",
          },
          {
            name: "Advisors",
            link: "",
          },
          {
            name: "Secretrail",
            link: "",
          },
        ],
      },
      column3: {
        title: "About",
        items: [
          {
            name: "Accountants",
            link: "",
          },
          {
            name: "Auditors",
            link: "",
          },
          {
            name: "Actuarial",
            link: "",
          },
          {
            name: "Advisors",
            link: "",
          },
          {
            name: "Secretrail",
            link: "",
          },
        ],
      },
      column4: {
        title: "Contact",
        items: [
          {
            name: "Accountants",
            link: "",
          },
          {
            name: "Auditors",
            link: "",
          },
          {
            name: "Actuarial",
            link: "",
          },
          {
            name: "Advisors",
            link: "",
          },
          {
            name: "Secretrail",
            link: "",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.svg_bottom {
  position: absolute;
  width: 100%;
  left: 0%;
  bottom: 0%;
}

.text_1 {
  text-transform: capitalize !important;
  letter-spacing: 0.08rem !important;
  font-family: sans-serif !important;
}

.text_top {
  word-break: keep-all;
}

.svg_footer {
  width: 100%;
  position: relative;
  top: 2px;
}

.card_footer {
  background: linear-gradient(90deg, #51b5f7 -0.06%, #5291fb 100%);
}

.btn_1 {
  background: linear-gradient(90deg, #f92c8b 0%, #b02cd6 100%);
}

.text_2 {
  font-family: "Roboto", Helvetica, Arial, Lucida, sans-serif;
  font-weight: 700;
  line-height: 1.4em;
  word-break: keep-all !important;
}

.text_1 {
  font-family: "Roboto", Helvetica, Arial, Lucida, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff !important;
  letter-spacing: 5px;
  line-height: 2em;
}

.container_footer {
  /* background-image: linear-gradient(
    130deg,
    #8624e1 25%,
    #3607a6 100%
  ) !important; */
  padding: 0px;
}

.svg_white {
  z-index: 1;
  position: relative;
  top: -1px;
  left: -16px;
  transform: rotateX(180deg);
}

.svg_white2 {
  z-index: 1;
  position: relative;
  top: -1px;
  right: -16px;
  transform: rotateY(-180deg);
}
</style>
