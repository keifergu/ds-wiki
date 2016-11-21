<template>
<div>
  <animal-info
    v-for="animal in allAnimals"
    :animal="animal"
    >
  </animal-info>
</div>
</template>

<script>

import AnimalInfo from './AnimalInfo';

const info = [
  {
    name: '猪人',
    health: 250,
    damage: 33,
    speed: 3,
  },
];

export default {
  name: 'animals',
  data() {
    return {
      allAnimals: info,
    };
  },
  components: { AnimalInfo },
};
</script>
