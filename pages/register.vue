<template>

  <v-container fluid
               style ="height:600px;
                      width:2000px;
                      top:10">
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
              注册
            </v-card-title>
            <v-card-text>
              <v-layout row>
                <v-flex xs2>
                  <v-subheader>UserName:</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    label="请输入用户名"
                    v-model="username"
                    :counter="10"
                    single-line
                    required
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs2>
                  <v-subheader>PassWord:</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    label="请输入密码"
                    v-model="password"
                    single-line
                    required
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs2>
                  <v-subheader>性别：</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-select
                    v-model="sex"
                    :items="sexes"
                    :rules="[v=>!!v || '请选择性别']"
                    required
                  >
                  </v-select>
                </v-flex>
              </v-layout>
              <v-flex>
                <v-btn
                  @click="register"
                  large
                  color="primary"
                  width="100px"
                >
                  注册
                </v-btn>
              </v-flex>
            </v-card-text>
          </v-card>
        </v-content>
      </v-col>
    </v-row>
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
        username: "",
        password: "",
        sex: "",
        sexes: [
          '男',
          '女'
        ]
      }
    },
    methods: {
      register() {

      }
    }
  }
</script>
<style>

</style>
