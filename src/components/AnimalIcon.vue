<template>
<div>
  <router-link :to="link">
    <img :src="src">
    <p>{{name}}</p>
  </router-link>
</div>
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
