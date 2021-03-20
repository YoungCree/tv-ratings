<template>
<div id="app">
  <div class="body-div">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">TV Catelog</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li id="tab1"  class="active" v-on:click="tabHighlight('tab1')">
            <router-link to="/">All Shows</router-link>
          </li>
          <li id="tab2" v-on:click="tabHighlight('tab2')">
            <router-link to="/top-ten">Highly Rated</router-link>
          </li>
          <li id="tab3" v-on:click="tabHighlight('tab3')">
            <router-link to="/my-favorites">My Favorites</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
      <li id="tab1" v-on:click="tabHighlight(1)" class="active">
        <router-link to="/">All Shows</router-link>
      </li>
      <li id="tab2" v-on:click="tabHighlight(2)">
        <router-link to="/top-ten">Highly Rated</router-link>
      </li>
      <li id="tab3" v-on:click="tabHighlight(3)">
        <router-link to="/my-favorites">My Favorites</router-link>
      </li>
    </ul>
    <router-view />
  </div>
  <div class="footer" id="footer">
    <a href="https://github.com/YoungCree/tv-ratings">
      <img class="footer-img" src="/images/github.png" alt="">
    </a>
  </div>
</div>
</template>

<script>
import M from 'materialize-css'

export default {
  name: 'App',
  mounted() {
    M.AutoInit()
  },
  data() {
    return {
      lastTab: "tab1"
    }
  },
  methods: {
    tabHighlight(tab) {
      let element = document.getElementById(tab);
      element.classList.add("active");
      let oldEl = document.getElementById(this.lastTab);
      oldEl.classList.remove("active");
      this.lastTab = tab;
    }
  }
}
</script>

<style>
.brand-logo {
  margin-left: 20px;
}

@media only screen and (min-width: 993px) {
  nav a.button-collapse {
    display: block;
  }
}

.footer {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 30px;
  margin-top: 50px;
  position: relative;
  bottom: 0;
  background-color: #e6e6e6;
}

.footer-img-link {
  width: 30px;
}

.footer-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30px;
  height: 30px;
}
</style>
