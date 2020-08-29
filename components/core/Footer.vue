<template>
<!-- <div style="position:fixed;
            bottom:0px;
            height:200;
            background:#F00"> -->
  <v-footer
    class="justify-center"
    color="#292929"
    height="80"
  >
    <div class="title font-weight-light grey--text text--lighten-1 text-center">
      &copy; {{ (new Date()).getFullYear() }} — Powered 💜 by BUPT Homework Team
    </div>
  </v-footer>
<!-- </div> -->
</template>
<script>
  export default {
    name: 'CoreFooter',
  }
</script>
