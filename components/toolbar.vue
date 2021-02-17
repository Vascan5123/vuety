<template>
  <div app>
    <v-toolbar absolute flat class="toolbar1 px-4 px-sm-16" width="100%" color="transparent">
      <v-toolbar-title
        class="purple1--text raleway font-weight-bold title1"
        @click="$router.push('/')"
      >Vuety</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        x-large
        color="#512da8"
        aria-label="btn_dark_theme"
        class="mr-6"
        icon
        @click="setTheme()"
      >
        <!-- @click="$vuetify.theme.dark = !$vuetify.theme.dark" -->
        <v-icon v-if="!$vuetify.theme.dark">mdi-weather-night</v-icon>
        <v-icon v-else>mdi-white-balance-sunny</v-icon>
      </v-btn>
      <v-btn color="#512da8" aria-label="open_driver_1" icon class="menusvg" @click="opendrawer()">
        <svg width="38" x="0px" y="0px" viewBox="0 0 640 480">
          <g>
            <path
              fill="#512da8"
              class="st0"
              d="M51,271.5c-16.3,0-29.5-13.2-29.5-29.5v-5c0-16.3,13.2-29.5,29.5-29.5h540c16.3,0,29.5,13.2,29.5,29.5v5c0,16.3-13.2,29.5-29.5,29.5H51z"
            />
          </g>
          <g>
            <path
              fill="#512da8"
              class="menutop"
              d="M331,98.5c-16.3,0-29.5-13.2-29.5-29.5v-5c0-16.3,13.2-29.5,29.5-29.5h260c16.3,0,29.5,13.2,29.5,29.5v5c0,16.3-13.2,29.5-29.5,29.5H331z"
            />
          </g>
          <g>
            <path
              fill="#512da8"
              class="menubottom"
              d="M51,444.5c-16.3,0-29.5-13.2-29.5-29.5v-5c0-16.3,13.2-29.5,29.5-29.5h260c16.3,0,29.5,13.2,29.5,29.5v5c0,16.3-13.2,29.5-29.5,29.5H51z"
            />
          </g>
        </svg>
      </v-btn>
    </v-toolbar>
    <v-app-bar
      v-if="app_bar"
      app
      inverted-scroll
      class="toolbar1 px-4 px-md-16"
      width="100%"
      color="primary"
    >
      <v-toolbar-title class>
        <v-btn class="ma-0 raleway font-weight-bold white--text title1" text href="#top">Vuety</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          text
          class="white--text"
          :href="item.link"
        >
          <v-icon class="mr-2">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-btn aria-label="open_driver_2" icon class="menusvg hidden-lg-and-up" @click="opendrawer()">
        <svg width="40" height="28" x="0px" y="0px" viewBox="0 0 640 480">
          <g fill="#fff">
            <path
              class="st0"
              d="M51,271.5c-16.3,0-29.5-13.2-29.5-29.5v-5c0-16.3,13.2-29.5,29.5-29.5h540c16.3,0,29.5,13.2,29.5,29.5v5c0,16.3-13.2,29.5-29.5,29.5H51z"
            />
            <path
              class="menutop"
              d="M331,98.5c-16.3,0-29.5-13.2-29.5-29.5v-5c0-16.3,13.2-29.5,29.5-29.5h260c16.3,0,29.5,13.2,29.5,29.5v5c0,16.3-13.2,29.5-29.5,29.5H331z"
            />
            <path
              class="menubottom"
              d="M51,444.5c-16.3,0-29.5-13.2-29.5-29.5v-5c0-16.3,13.2-29.5,29.5-29.5h260c16.3,0,29.5,13.2,29.5,29.5v5c0,16.3-13.2,29.5-29.5,29.5H51z"
            />
          </g>
        </svg>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" right temporary color="primary" dark>
      <v-list>
        <!-- <v-list-item>
          <v-list-item-icon>
            <v-switch v-model="$vuetify.theme.dark" inset></v-switch>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="title">Dark theme</v-list-item-title>
          </v-list-item-content>
        </v-list-item>-->
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="drawer = false, goto(item.link)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="title">
              {{
              item.title
              }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <svg viewBox="0 0 225 705" fill="none" class="svg_drawer">
        <path
          d="M134 599C134 636.003 163.997 666 201 666C208.893 666 216.468 664.635 223.5 662.128V535.872C216.468 533.365 208.893 532 201 532C163.997 532 134 561.997 134 599Z"
          fill="#EFBEBE"
        />
        <path
          d="M31 682C16.4517 682 4.171 691.708 0.28302 705H61.717C57.829 691.708 45.5483 682 31 682Z"
          fill="#EFBEBE"
        />
        <path
          d="M223.5 2C149.521 30.3612 97 102.042 97 186C97 269.958 149.521 341.649 223.5 370.01"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M151 270.5C151 289.002 136.002 304 117.5 304C98.9985 304 84 289.002 84 270.5C84 251.998 98.9985 237 117.5 237C136.002 237 151 251.998 151 270.5Z"
          fill="#B4DCE6"
        />
        <path
          d="M224 131.934C204.906 142.63 192 163.058 192 186.5C192 209.942 204.906 230.37 224 241.066V131.934Z"
          fill="#FFAD23"
        />
      </svg>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      app_bar: false,
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home", link: "/#" },
        { title: "Our services", icon: "mdi-widgets", link: "/#secondpageid" },
        { title: "Technologies", icon: "mdi-nodejs", link: "/#thirdpageid" },
        { title: "Price", icon: "mdi-cash-multiple", link: "/#priceid" },
        {
          title: "Get in Touch",
          icon: "mdi-message-text",
          link: "/#contactid",
        },
        { title: "About us", icon: "mdi-account-multiple", link: "/#aboutid" },
      ],
    };
  },
  mounted() {
    this.app_bar = true;
  },
  methods: {
    setTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    opendrawer() {
      this.drawer = true;
    },
    goto(link) {
      location.href = link;
    },
  },
};
</script>

<style scoped>
.title1 {
  cursor: pointer;
  text-transform: none;
  font-size: 1.5rem;
  letter-spacing: 0.06em
}
.svg_drawer {
  z-index: -1;
  transform: translate(2%);
  height: 70%;
  position: absolute;
  bottom: 0%;
  right: 0%;
}
.st0111 {
  fill: #512da8;
}
.main {
  background: #fff;
}
.menusvg .menutop {
  transition: 0.3s;
}
.menusvg .menubottom {
  transition: 0.3s;
}
.menusvg:hover .menutop {
  transform: translate(-45%);
}
.menusvg:hover .menubottom {
  transform: translate(45%);
}
.toolbar1 {
  z-index: 2;
}
</style>