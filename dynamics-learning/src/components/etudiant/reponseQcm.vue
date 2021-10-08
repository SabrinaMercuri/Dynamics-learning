<template>
  <v-app>
    <h1>QCM - {{ qcm2.nom }}</h1>
    <v-card v-for="(question, index) in qcm2.questions" :key="index">
      <div v-if="question.trueRep.length == 1">
        <h2>{{ index + 1 }} - {{ question.intitule }}</h2>
        <p>1 réponse</p>
        <v-radio-group>
          <v-radio
            v-for="(reponse, index2) in getAnswer(question)"
            :key="index2"
            :label="reponse"
            :color="isTrueRep(question, reponse)"
          ></v-radio>
        </v-radio-group>
      </div>
      <div v-if="question.trueRep.length !== 1">
        <h2>{{ index + 1 }} - {{ question.intitule }}</h2>
        <p>plusieurs réponses</p>
        <div v-for="(reponse, index3) in getAnswer(question)" :key="index3">
          <v-checkbox
            :label="reponse"
            :color="isTrueRep(question, reponse)"
          ></v-checkbox>
        </div>
      </div>
    </v-card>
    <v-btn @click="envoiReponse()">Terminer</v-btn>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},
  props:{
    // le qcm afficher sera dans les props
    qcm : Object
  },
  data: () => ({
    reponses: []
  }),
  created(){
    this.qcm = {
      
      nom: "Pokemon",
      mdp: "",
      questions: [
        {
          intitule: "Combien d'évolution à évoli ?",
          falseRep: ["1", "5", "7"],
          trueRep: ["8"],
        },
        {
          intitule: "Quel type est éfficace contre le type dragon ?",
          falseRep: ["acier", "feu"],
          trueRep: ["dragon", "glace", "sol"],
        },
        {
          intitule:
            "Comment s'appellent les protagonistes de la team rocket les plus connus ?",
          falseRep: ["Boule et Bill", "Azur et Asmar"],
          trueRep: ["Jessie et James"],
        },
      ],
    }
    this.qcm2 = this.qcm
  },
  methods: {
    getAnswer: function (question) {
      let tabRep = question.falseRep;
      for (let q of question.trueRep) {
        tabRep[tabRep.length] = q;
      }
      return this.shuffleArray(tabRep);
    },
    shuffleArray: function (array) {
      for (var i = array.length - 1; i > 0; i--) {
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },
    isTrueRep: function (question, reponse) {
      for (let q of question.trueRep) {
        if (q === reponse) {
          return "success";
        }
      }
      return "error";
    },
    envoiReponse: function(){
      this.$socket.emit("envoiReponse",this.reponses)
    }
  },
};
</script>
