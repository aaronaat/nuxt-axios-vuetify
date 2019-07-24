<template>
<div>
  <h2>Search</h2>

  <br/>

  <form @submit.prevent="submit">
    <input placeholder="Search" v-model="search" autofocus />
  </form>

</div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submit(event) {
      this.$router.push(`results/${this.search}`);
    }
  }
}
</script>

<style>
* {
  text-align: center;
}

h1 {
  padding: 20px;
}
</style>
