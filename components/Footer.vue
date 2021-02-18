<template>
    <v-container fluid class="container_footer mt-12">
      <v-row no-gutters>
        <svg viewBox="0 0 845 185" class="svg_footer">
          <path
            d="M845 70.4483C845 70.4483 751.945 -19.5958 610.361 3.91591C415.746 36.2341 401.065 86.0875 246.145 119.472C72.0421 156.99 1 99.9628 1 99.9628V176H845V70.4483Z"
            :fill="$vuetify.theme.dark ? 'url(#linear_footer_top)' : '#FFD1DC'"
            fill-opacity="1"
          />
          <path
            d="M199 155C67.8971 161.085 0.5 99.5001 0.5 99.5001V185H845V168V115C845 115 742.5 -4.5 488 76.5001C391.27 107.287 317.5 149.5 199 155Z"
            :fill="$vuetify.theme.dark ? '#6F6F6F' : 'url(#paint0_linearfooter)'"
          />
          <defs>
            <linearGradient id="paint0_linearfooter" x1="0" x2="0.75" y1="0" y2="0">
              <stop offset="0%" stop-color="#FF648A" />
              <stop offset="100%" stop-color="#EA54AD" />
            </linearGradient>

            <linearGradient id="linear_footer_top" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stop-color="#FF648A" />
              <stop offset="50%" stop-color="#EA54AD" />
              <stop offset="100%" stop-color="#8A5CC0" />
            </linearGradient>
          </defs>
        </svg>
      </v-row>
      <v-row no-gutters>
        <v-card
          width="100%"
          flat
          class="pa-0 ma-0 pb-16"
          :class="$vuetify.theme.dark ? 'card_footer_dark' : 'card_footer'"
          rounded="0"
        >
          <svg class="svg_bottom" viewBox="0 0 1916 288">
            <path
              d="M953.973 175.334C675.981 283.307 351.99 145.994 0 288H1917.95V83.7932C1539.96 -103.985 1231.97 67.3614 953.973 175.334Z"
              :fill="$vuetify.theme.dark ? '#444444' : 'url(#svg_bottom_linear)'"
            />
            <defs>
              <linearGradient
                id="svg_bottom_linear"
                x1="11.9997"
                y1="287.999"
                x2="1812.24"
                y2="-259.248"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF648A" />
                <stop offset="0.177083" stop-color="#EA54AD" />
                <stop offset="1" stop-color="#8A5CC0" />
              </linearGradient>
            </defs>
          </svg>
          <v-col cols="12" md="8" class="mx-auto">
            <v-col cols="12">
              <v-card-title
                class="font-weight-light pa-0 text_top raleway white--text"
              >Get started now</v-card-title>
            </v-col>
            <v-row no-gutters class="mt-12">
              <v-col cols="6" md="3">
                <v-card-title
                  class="overline title_categories raleway white--text"
                >{{ column1.title }}</v-card-title>
                <v-list dense color="transparent" width="auto">
                  <v-list-item
                    v-for="(item, index) in column1.items"
                    :key="index"
                    link
                    :href="item.link"
                  >
                    <v-list-item-title v-text="item.name" class="raleway font-weight-light text_1"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="6" md="3">
                <v-card-title
                  class="overline title_categories raleway white--text"
                >{{ column2.title }}</v-card-title>
                <v-list dense color="transparent" width="auto">
                  <v-list-item
                    v-for="(item, index) in column2.items"
                    :key="index"
                    link
                    :href="item.link"
                  >
                    <v-list-item-title v-text="item.name" class="raleway font-weight-light text_1"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="6" md="3">
                <v-card-title
                  class="overline title_categories raleway white--text"
                >{{ column3.title }}</v-card-title>
                <v-list dense color="transparent" width="auto">
                  <v-list-item
                    v-for="(item, index) in column3.items"
                    :key="index"
                    link
                    :href="item.link"
                  >
                    <v-list-item-title v-text="item.name" class="raleway font-weight-light text_1"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="6" md="3">
                <v-card-title
                  class="overline title_categories raleway white--text"
                >{{ column4.title }}</v-card-title>
                <v-list dense color="transparent" width="auto">
                  <v-list-item
                    v-for="(item, index) in column4.items"
                    :key="index"
                    link
                    :href="item.link"
                  >
                    <v-list-item-title v-text="item.name" class="raleway font-weight-light text_1"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
            <v-row no-gutters justify="center" class="mt-12">
              <v-btn
                fab
                x-large
                target="_blank"
                class="mx-4 white--text"
                :class="$vuetify.theme.dark ? 'btn_1' : 'black'"
                href="https://www.facebook.com/vuetycom"
                aria-label="instagram-vuety"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn
                fab
                x-large
                target="_blank"
                class="mx-4 white--text"
                :class="$vuetify.theme.dark ? 'btn_2' : 'black'"
                href="https://www.facebook.com/vuetycom"
                aria-label="facebook-vuety"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                fab
                x-large
                target="_blank"
                class="mx-4 white--text"
                :class="$vuetify.theme.dark ? 'btn_3' : 'black'"
                href="https://twitter.com/vuetycom"
                aria-label="twitter-vuety"
              >
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
  font-size: 1rem !important;
  text-transform: capitalize !important;
  letter-spacing: 0.08rem !important;
  font-family: sans-serif !important;
}
.title_categories {
  word-break: keep-all;
  font-size: 1.1rem !important;
  line-height: 2.125rem;
}
.text_top {
  word-break: keep-all;
  font-size: 3rem;
  line-height: 3.125rem;
}

.svg_footer {
  width: 100%;
  position: relative;
  top: 2px;
}

.card_footer {
  background: linear-gradient(75.69deg, #ff648a 0%, #ea54ad 97.14%);
}
.card_footer_dark {
  background: #6f6f6f !important;
}
.btn_1 {
  background: #8a5cc0;
}
.btn_2 {
  background: #ea54ad;
}
.btn_3 {
  background: #ff648a;
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
