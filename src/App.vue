<template>
  <div id="app">
    <mt-header title="Don't Strave">
      <mt-button
        @click.native="changeMenu"
        icon="more"
        slot="left"></mt-button>
    </mt-header>
    <mt-popup
      v-model="menuStatus"
      position="left"
      >
      <router-link
        @click.native="changeMenu"
        to="/home">
        Home
      </router-link>
      <br>
      <router-link
        @click.native="changeMenu"
        to="/animals">
        Animals
      </router-link>
    </mt-popup>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      menuStatus: false,
    };
  },
  methods: {
    changeMenu() {
      this.menuStatus = !this.menuStatus;
    },
  },
};
</script>
