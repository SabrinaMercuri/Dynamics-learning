<template>
  <v-app>
    <Qcm/>
  </v-app>
</template>

<script>

import Qcm from "./components/enseignant/Qcm";

export default {
  
  name: 'App',

  components: {
    Qcm
  },

  data: () => ({
    //
  }),
};
</script>
