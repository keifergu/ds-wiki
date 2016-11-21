<template>
<div>
  <h3>{{title}}</h3>
  <span>{{pretext}}</span>
</div>
</template>

<script>
export default {
  name: 'news',
  props: {
    title: String,
    pretext: String,
  },
  data() {
    return {
    };
  },
};
</script>
