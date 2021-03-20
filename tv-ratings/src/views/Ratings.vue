<template lang="html">
  <div>
  <h1>All Shows</h1>
  <div class="content">
    <div class="row">
    <div class="col s6 m3" v-for="show in shows" :key="show.id">
      <div class="card medium hoverable">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" :src="show.image.original">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4 truncate">{{show.name}}</span>
          <div class="valign-wrapper">
          <p><i class="material-icons small">stars</i>{{show.rating.average}}</p>
        </div>
        </div>
        <div class="card-action">
          <a v-if="!favorites.find(f_show => f_show.id === show.id)" v-on:click="addToFavorites(show.id, show.name, show.image.original, show.summary, show.rating.average)" href="#">Add to Favorites</a>
          <a v-else v-on:click="removeFromFavorites(show.id, show.name)" href="#">Remove From Favorites</a>
        </div>
        <div class="card-reveal">
          <span class="card-title activator grey-text text-darken-4">{{show.name}}<i class="material-icons right">close</i></span>
          <p>{{show.summary}}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import M from 'materialize-css'

export default {
  name: 'Ratings',
  computed: {
    shows() {
      return this.$root.$data.shows;
    },
    favorites() {
      return this.$root.$data.favorites;
    }
  },
  methods: {
    addToFavorites(id, name, img, sum, rating) {
      this.$root.$data.favorites.push({
        id: id,
        name: name,
        img: img,
        sum: sum,
        rating: rating
      });
      M.toast({html: 'You added ' + name + ' to your favorites'});
    },
    removeFromFavorites(id, name) {
      let item = this.$root.$data.favorites.find(show => show.id === id);
      const index = this.$root.$data.favorites.indexOf(item);
      if (index > -1) {
        this.$root.$data.favorites.splice(index, 1);
        M.toast({html: 'You removed ' + name + ' from your favorites'});
      }
    },
  }
}
</script>

<style lang="css">
  h1 {
    margin-left: 30px;
  }

  .content {
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .card-content p {
    font-size: 30px;
    margin-left: 10px;
  }

  .card-content i {

  }

</style>
