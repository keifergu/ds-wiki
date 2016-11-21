<template>
<div>
  <animal-icon
    v-for="animal in allAnimals"
    :name="animal.name"
    :src="animal.src"
    :link="animal.link"
    >
  </animal-icon>
</div>
</template>

<script>

import AnimalIcon from './AnimalIcon';

const info = [
  {
    name: '猪人',
    src: '/static/animals/pigman.png',
    link: '/animals/pigman',
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
