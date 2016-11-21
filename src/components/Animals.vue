<template>
<div class="animals">
  <animal-icon
    v-for="animal in allAnimals"
    :src="animal.src"
    :name="animal.name"
    :link="animal.link"
    >
  </animal-icon>
</div>
</template>

<script>

import AnimalIcon from './AnimalIcon';

const animalsUri = '/static/animals/';
const animalsLink = '/animals/';

const info = [
  {
    name: '猪人',
    src: animalsUri.concat('pigman.png'),
    link: animalsLink.concat('pigman'),
  },
  {
    name: '猪人守卫',
    src: animalsUri.concat('pigguard.png'),
    link: animalsLink.concat('pigguard'),
  },
];

export default {
  name: 'animals',
  data() {
    return {
      allAnimals: info,
    };
  },
  components: { AnimalIcon },
};
</script>

<style scoped>
.animals {
}
</style>
