<template>
  <v-container
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="1"
      >
      </v-col>
      <core-view/>
      <core-side-bar/>
      <v-col
        cols="12"
        md="1"
      >
      </v-col>
    </v-row>
  </v-container>
  <!--      <v-btn>{{ title }}</v-btn>-->
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import axios from '~/plugins/axios'
  import CoreAppBar from '~/components/core/AppBar.vue'
  import CoreDrawer from '~/components/core/Drawer.vue'
  import CoreFooter from '~/components/core/Footer.vue'
  import CoreView from '~/components/core/View.vue'
  import CoreSideBar from '~/components/core/SideBar.vue'

  export default {

    components: {
      CoreAppBar,
      CoreDrawer,
      CoreFooter,
      CoreView,
      CoreSideBar
    }
    // data() {
    //   return {
    //     title: '',
    //   }
    // },
    // mounted() {
    //   this.loadTitle();
    // },
    // components: {
    //   Logo
    // },
    // methods: {
    //   async loadTitle() {
    //     const data = await axios.get('/');
    //     console.log(data);
    //     this.title = data["_links"]["comments"]["templated"];
    //   }
    // }
  }
</script>

<style>
  @import "../assets/public.css";
</style>
