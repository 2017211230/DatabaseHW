<template>
  <v-col
    cols="12"
    md="2"
  >
    <name-card v-bind="item"/>
    <div class="py-3"/>
    <v-card style="height: 80px;">
      <v-btn
        color="success"
        class="ma-2 white-text"
        @click="jumpToEditor"
      >
        <v-icon left dark>mdi-plus</v-icon>
        Create Article
      </v-btn>
    </v-card>
    <div class="py-3"/>
    <v-card style="height: 400px;">
      <v-card-title class="grey darken-3" style="color: white;">
        标题1
      </v-card-title>
      <v-card-text>
        1
      </v-card-text>
    </v-card>
    <div class="py-3"/>
    <v-card style="height: 400px;">
      <v-card-title class="grey darken-3" style="color: white;">
        标题2
      </v-card-title>
      <v-card-text>
        2
      </v-card-text>
    </v-card>
    <div class="py-3"/>
    <v-card style="height: 400px;">
      <v-card-title class="grey darken-3" style="color: white;">
        标题3
      </v-card-title>
      <v-card-text>
        3
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
  import NameCard from "../widget/NameCard";
  import axios from "~/plugins/axios";

  export default {
    name: 'CoreSideBar',
    data() {
      return {
        item:
          {
            jobTitle: "Web Developer",
            name: "Jim J",
            color: "teal",
            avatar: {
              src: "https://randomuser.me/api/portraits/men/10.jpg",
              size: "36"
            }
          },
      }
    },
    components: {
      NameCard,
    },
    methods: {
      jumpToEditor() {
        let response = axios.post('/posts',
          {
            title: 'test',
            content: 'content',
            publisher: "http://localhost:8091/users/admin"
          }
        );
        this.$router.push('/editor')
      }
    }
  }
</script>
