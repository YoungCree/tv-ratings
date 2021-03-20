<template lang="html">
  <div>
  <h1>Favorites</h1>
  <div class="content">
    <div class="row">
    <div class="col s6 m3" v-for="show in shows" :key="show.id">
      <div class="card medium hoverable">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" :src="show.img">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4 truncate">{{show.name}}</span>
          <div class="valign-wrapper">
          <p><i class="material-icons small">stars</i>{{show.rating}}</p>
        </div>
        </div>
        <div class="card-action">
          <a v-on:click="removeFromFavorites(show.id, show.name)" href="#">Remove from Favorites</a>
        </div>
        <div class="card-reveal">
          <span class="card-title activator grey-text text-darken-4">{{show.name}}<i class="material-icons right">close</i></span>
          <p>{{show.sum}}</p>
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
  name: 'MyFavorites',
  computed: {
    shows() {
      return this.$root.$data.favorites;
    }
  },
  methods: {
    removeFromFavorites(id, name) {
      let item = this.$root.$data.favorites.find(show => show.id === id);
      const index = this.$root.$data.favorites.indexOf(item);
      if (index > -1) {
        this.$root.$data.favorites.splice(index, 1);
        M.toast({html: 'You removed ' + name + ' from your favorites'});
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
