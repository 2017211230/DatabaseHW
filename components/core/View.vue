<template>
  <v-col
    cols="12"
    md="8"
  >
    <v-tabs
      v-model="active"
      background-color="grey darken-4"
      dark
      style="border-radius: 5px"
    >
      <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" ripple>
        {{tab.name}}
      </v-tab>
      <!--    如果想要保存tabs切换的效果-->
      <!--      <v-tab-item id="/articles">-->
      <!--        <router-view v-if="active === '/articles'" />-->
      <!--      </v-tab-item>-->
      <!--      <v-tab-item id="/essence">-->
      <!--        <router-view v-if="active === '/essence'" />-->
      <!--      </v-tab-item>-->
      <!--      <v-tab-item id="/school">-->
      <!--        <router-view v-if="active === '/school'" />-->
      <!--      </v-tab-item>-->
    </v-tabs>
    <router-view/>
  </v-col>
</template>
<script>
  export default {
    name: 'CoreView',
    data() {
      return {
        active: null,
        text: 'hahahahha',
        tabs: [{
          id: 1,
          name: "全部",
          route: '/articles'
        },
          {
            id: 2,
            name: "精华",
            route: '/essence'
          },
          {
            id: 3,
            name: "校园生活",
            route: '/school'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  a {
    text-decoration: none;
    color: #F5F5F5;
  }
</style>
