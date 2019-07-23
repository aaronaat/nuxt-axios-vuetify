<template>
 <v-toolbar dark color="green">
    <v-toolbar-title class="white--text">
      <nuxt-link class="title" to="/">
        My Nuxt App
      </nuxt-link>
    </v-toolbar-title>
    <v-btn to="/" icon>
      <v-icon>refresh</v-icon>
    </v-btn>
</v-toolbar>
</template>

<script>
</script>

<style scoped>
.title {text-decoration: none !important;}
.title:visited{color:white;}
</style>