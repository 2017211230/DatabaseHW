<template>
  <v-app>
    <core-app-bar/>
    <core-drawer/>
    <v-content>
      <nuxt/>
    </v-content>
    <div style="position:fixed;
            bottom:0px;
            height:100;
            width:100%">
    <v-footer
      class="justify-center"
      color="#292929"
      height="64"
    >
      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        &copy; {{ (new Date()).getFullYear() }} — Powered 💜 by BUPT Homework Team
      </div>
    </v-footer>
    </div>
  </v-app>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import axios from '~/plugins/axios'
  import CoreAppBar from '../components/core/AppBar.vue'
  import CoreDrawer from '../components/core/Drawer.vue'
  import CoreFooter from '../components/core/Footer.vue'
  import CoreView from '../components/core/View.vue'
  import CoreSideBar from '../components/core/SideBar.vue'

  export default {
    components: {
      CoreAppBar,
      CoreDrawer,
      CoreFooter,
      CoreView,
      CoreSideBar
    }
  }
</script>
<style scoped>
  .setting-fab {
    top: 50% !important;
    right: 0;
    border-radius: 0;
  }

  .page-wrapper {
    min-height: calc(100vh - 64px - 50px - 81px);
  }
</style>
