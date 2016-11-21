<template>
  <router-link :to="link">
    <img :src="src">
    <p>{{name}}</p>
  </router-link>
</template>

<script>
export default {
  name: 'animalIcon',
  props: {
    src: String,
    name: String,
    link: String,
  },
};
</script>
