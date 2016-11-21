<template>
<div class="animal-info">
  <router-link
    :to="link">
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

<style scoped>
a:link {
  text-decoration: none;
}
.animal-info {
  width: 120px;
  height: 190px;
  float: left;
}

.animal-info p{
  margin-top: 10px;
  text-align: center;
  color:#FFFFFF;
  border-radius: 25px;
  box-shadow: 5px 7px 5px #888888;
  background-color:#98bf21;
}
.animal-info img{
  width: 120px;
  height: 150px;
}
</style>
