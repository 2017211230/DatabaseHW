<template>
  <div class="panel-wrapper">
    <div class="slogan-wrapper">
      <div class="slogan">
        <img src="../assets/login-bg2.svg" alt=""/>
      </div>
    </div>
    <div class="panel-content">
      <v-app class="login-con">
        <v-content>
          <v-container
            fluid
            fill-height
          >
            <v-layout
              align-center="center"
              justify-center="center"
            >
              <v-flex class="frame">
                <v-form>
                  <v-text-field
                    v-model="form.username"
                    prepend-icon="mdi-account"
                    clearable
                    @keyup.enter.native="login"
                    required
                    label="用户名"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="form.password"
                    prepend-icon="mdi-lock"
                    @keyup.enter.native="login"
                    :opened-icon="showPwd ? 'visibility off' : 'visibility'"
                    :type="showPwd ? 'text' : 'password'"
                    @click:append="showPwd = !showPwd"
                    required
                    label="密码"
                  >
                  </v-text-field>
                  <v-layout
                    column
                    wrap
                    justify-end=""
                    align-end=""
                  >

                    <v-flex>
                      <v-btn
                        @click="register"
                        large
                        color="blue-grey"
                        width="100px"
                      >
                        注册
                      </v-btn>
                      <v-btn
                        :loading="loginLoading"
                        @click="login"
                        large
                        color="primary"
                        width="100px"
                      >
                        登录
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>
<script>
  import axios from "~/plugins/axios";

  export default {
    layout: 'login',
    data() {
      return {
        form: {
          username: 'admin',
          password: '123',
        },
        loginLoading: false,
        showPwd: false,
      }
    },
    methods: {
      async login() {
        if (!this.form.password || !this.form.username) {
          return;
        }
        this.loginLoading = true;
        const response = await axios({
          method: 'post',
          url: '/login',
          data: `username=${this.form.username}&password=${this.form.password}`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        const response1 = await axios({
          url: '/posts?size=20&page=0',
          method: 'get'
        });
        console.log(response);

        this.$router.push('/');
      },
      register() {
        this.$router.push('/register')
      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/_login.scss";
</style>
