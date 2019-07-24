import axios from 'axios';

export default function( {params, store} ) {
  return axios.get(`http://itunes.apple.com/search?term=${params.id}&entity=album`)
    .then((response) => {
      store.commit('results/add', response.data.results);
    });
}