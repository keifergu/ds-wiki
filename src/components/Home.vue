<template>
<div>
  <news
    v-for="news in newsList"
    :title="news.title"
    :pretext="news.pretext">
  </news>
</div>
</template>

<script>

import News from './News';

const newData = [
  {
    title: 'TGP sell 500,000 Don\'t Strave',
    pretext: 'Last week, TGP begin to sell the DST.',
  },
  {
    title: 'New patch is avilable!',
    pretext: 'Keil has update the DST',
  },
];

export default {
  name: 'home',
  data() {
    return {
      newsList: newData,
    };
  },
  components: { News },
};

</script>
