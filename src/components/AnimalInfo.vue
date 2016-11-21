<template>
<div>
  <h1>{{animal.name}}</h1>
  <p>生命值：{{animal.health}}</p>
  <p>攻击力：{{animal.damage}}</p>
  <p>移动速度：{{animal.speed}}</span>
</div>
</template>

<script>

const info = {
  pigman: {
    name: '猪人',
    health: 250,
    damage: 33,
    speed: 3,
  },
};

export default {
  name: 'animalInfo',
  data() {
    return {
      animal: info[this.$route.params.name],
    };
  },
};
</script>
