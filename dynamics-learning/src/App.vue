<template>
  <v-app>
    <!-- A afficher quand le qcm aura été selectionné et que l'étudiant aura entré le bon mdp -->
    <ReponseQcm :qcm="qcmSelectione"/>
    <!--qcmSelectione est le qcm choisi par l'utilisateur qui sera affiché si celui-ci met le bon mdp-->
  </v-app>
</template>

<script>
import ReponseQcm from "./components/etudiant/ReponseQcm"

export default {
  name: 'App',

  components: {
    ReponseQcm
  },

  data: () => ({
    qcmSelectione:{
      nom:"Pokemon",
      mdp:"",
      questions:[
        {
          intitule:"Quel est le premier pokemon de Sacha ?",
          falseRep:[
            "Dracaufeu",
            "Carapuce"
          ],
          trueRep:[
            "pikachu"
          ]
        },
        {
          intitule:"Quel sont les types de Dracaufeu ?",
          falseRep:[
            "eau",
            "electrik"
          ],
          trueRep:[
            "feu",
            "vol"
          ]
        },
        {
          intitule:"Combien de badges d'arènes il y a par région ?",
          falseRep:[
            "'4",
            "7",
            "2"
          ],
          trueRep:[
            "8"
          ]
        }
      ]
    }
  }),
};
</script>
