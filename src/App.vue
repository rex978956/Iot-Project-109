<template>
  <frontend-layouts />
</template>
<script>
export default {
  name: 'App',

  components: {
    FrontendLayouts: () => import('./views/layouts/Index.vue'),
  },

};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400&display=swap');

#app {
  background-color: #968C83;
}

* {
  font-family: 'Noto Sans TC', sans-serif;
}
</style>