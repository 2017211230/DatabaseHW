<template>
  <v-card>
    <v-card-text>
      全部
      foobar:{{foobar}}
      <v-btn
        color="info"
        class="ma-2 white-text"
        @click="jumpToEditor"
      >
        <v-icon left dark>mdi-plus</v-icon>
        Comment
      </v-btn>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    props: ['foobar'],
    methods:{
      jumpToEditor(){
        this.$router.push('/login')
      }
    }
  }
</script>
