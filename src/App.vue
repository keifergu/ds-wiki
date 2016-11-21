<template>
  <div id="app">
    <mt-header title="Don't Strave">
      <mt-button
        @click.native="changeMenu"
        icon="more"
        slot="left"></mt-button>
    </mt-header>
    <div>
      <router-link
        to="/home">
        Home
      </router-link>
      <router-link
        to="/animals">
        Animals
      </router-link>
    </div>
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
