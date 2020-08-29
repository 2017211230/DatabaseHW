<template>
  <v-container
    style ="height:400px;
            width:2000px;
            position:static;
            top:500px"
    fluid
    tag="section"
  >
    <div style="height:400px;
              width:1000px;
              
              position:absolute;
              top:-20px">
      <v-row justify="center">
        <v-col
          cols="12"
          md="10"
        >
          <the-breadcrumb layout-class="pl-3 pb-0"/>
          <div class="py-3"/>
          <v-content>
            <v-card>
              <v-card-title class="grey darken-3" style="color: white;">
                用户信息
              </v-card-title>
            <v-card-text>
              <v-layout row>
                <v-flex xs2>
                  <v-subheader>UserName:</v-subheader>
                </v-flex>
                <v-flex xs8>
                 <span>{{user.username}}</span>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs2>
                  <v-subheader>性别：</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <span>
                    user.sex
                  </span>
                </v-flex>
              </v-layout>
              <v-flex>
                <v-btn
                  @click="jumpBack"
                  large
                  color="primary"
                  width="100px"
                >
                  返回
                </v-btn>
              </v-flex>
            </v-card-text>
          </v-card>
        </v-content>
      </v-col>
    </v-row>
  </div>
  </v-container>

</template>
<script>
  import TheBreadcrumb from "../components/TheBreadcrumb";
  export default {
    components:{
      TheBreadcrumb
    },
    data() {
      return {
        user: {
          username: "admin",
          password: "123",
          sex: "女",
        },

      }
    },
    methods: {
      jumpBack() {
        this.$router.push('/')
      }
    }
  }
</script>
<style>
  @import "../assets/public.css";
</style>
