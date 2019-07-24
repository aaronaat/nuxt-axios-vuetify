<template>
  <div>
    <h2>{{$route.params.id}}</h2>
    <div v-if="albumExists">

      <div v-for="(album, index) in albums">
        <Card
          :title="album.collectionCensoredName"
          :image="album.artworkUrl100"
          :artistName="album.artistName"
          :url="album.artistViewUrl"
          :color="picker(index)" />
      </div>
    </div>
    <div v-else>
      No album found
    </div>

  </div>
</template>
<script>
import Card from '~/components/Card.vue';
export default {
  asyncData({$axios, params}) {
    return $axios.get(`http://itunes.apple.com/search?term=${params.id}&entity=album`)
    .then((response) => {
      return {albums: response.data.results};
    });
  },
  components: {Card},
  middleware: 'search',
  methods: {
    picker(index) {
      return index % 2 == 0 ? 'black' : 'white';
    }
  },
  computed: {
    albumExists() {
      return this.albums.length > 0;
    }
  }

}
</script>
