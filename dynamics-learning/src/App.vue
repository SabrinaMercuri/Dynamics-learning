<template>
  <v-app>
    <!-- A afficher quand le qcm aura été selectionné et que l'étudiant aura entré le bon mdp -->
    <!--<ReponseQcm :qcm="qcmSelectione"/>-->
    <!--qcmSelectione est le qcm choisi par l'utilisateur qui sera affiché si celui-ci met le bon mdp-->
    <stats />
  </v-app>
</template>

<script>
//import ReponseQcm from "./components/etudiant/ReponseQcm"
import Stats from './components/enseignant/Stats.vue';


export default {
  name: 'App',

  components: {
   //ReponseQcm,
    Stats
  },

  data: () => ({
    qcmSelectione:{}
  }),
};
</script>
