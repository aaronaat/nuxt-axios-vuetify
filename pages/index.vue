<template>
<div>
  <h2>Search</h2>

  <br/>

  <form>
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
  } 
}
</script>

<style>

</style>
