<template>
  <v-app>

    <frontend-nav-bar />

    <frontend-view />

    <frontend-footer />

  </v-app>
</template>

<script>
  export default {
    name: 'LayoutsFrontend',
    components: {
      FrontendNavBar: () => import('./Navbar'),
      FrontendFooter: () => import('./Footer'),
      FrontendView: () => import('./View'),
    },

  }
</script>

<style>
  .v-text-field .v-input__control .v-input__slot {
    min-height: auto !important;
    display: flex !important;
    align-items: center !important;
  }

  .v-divider-bold {
    border-width: 0.1px;
    color: black;
  }
</style>