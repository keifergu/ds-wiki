<template>
<div>
  <h1>{{animal.name}}</h1>
  <p>生命值：{{animal.health}}</p>
  <p>攻击力：{{animal.damage}}</p>
  <p>移动速度：{{animal.speed}}</span>
</div>
</template>

<script>
export default {
  name: 'animalInfo',
  props: {
    animal: {
      type: Object,
    },
  },
};
</script>
