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
            @change="verifReponse(question,reponse,index,1)"
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
            @change="verifReponse(question,reponse,index,index3)"
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
    reponses: [],
    repEnvoyees: []
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
    for(let i = 0; i <this.qcm.questions.length; i++){
      if(this.qcm.questions[i].trueRep.length>1){
        this.reponses[i] = []
        for(let j = 0; j < this.qcm.questions[i].trueRep.length; j++){
          this.reponses[i][this.reponses[i].length] = undefined
        }
        for(let k = 0; k < this.qcm.questions[i].falseRep.length; k++){
          this.reponses[i][this.reponses[i].length] = undefined
        }
      }
    }
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
      this.verifMultiRep()
      this.$socket.emit("envoiReponse",this.repEnvoyees)
    },
    verifReponse: function(question,reponse,index,index2){
      let trueRep = false
      // verif si reponse vrai rep
      if(this.isTrueRep(question,reponse)==="success"){
       trueRep = true 
      }
      
      if(trueRep){
        if(question.trueRep.length===1){
          this.reponses[index] = true
        }
        else{
          if(this.reponses[index][index2]===undefined){
            this.reponses[index][index2]=true
          }
          else{
            this.reponses[index][index2] = undefined
          }
        }
      }
      else{
        if(question.trueRep.length===1){
          this.reponses[index] = false
        }
        else{
          if(this.reponses[index][index2]===undefined){
            this.reponses[index][index2]=false
          }
          else{
            this.reponses[index][index2] = undefined
          }
        }
      }
    },
    verifMultiRep: function(){
      for(let i=0 ; i<this.reponses.length;i++){
        if(Array.isArray(this.reponses[i])){
          let temp = this.reponses[i]
          let nbRepJuste = 0
          let nbRepFausse = 0
          for(let j = 0; j < this.reponses[i].length; j++){
            if(this.reponses[i][j]===false){
              nbRepFausse++
            }
            else if(this.reponses[i][j]===true){
              nbRepJuste++
            }
          }
          if(nbRepFausse>0 || nbRepJuste<this.qcm.questions[i].trueRep.length){
            this.repEnvoyees[i] = false
          }
          else if(nbRepJuste===this.qcm.questions[i].trueRep.length && nbRepFausse>0){
            this.repEnvoyees[i] = false
          }
          else if(nbRepFausse===0 && nbRepJuste===0){
            console.log("nik")
          }
          else{
            this.repEnvoyees[i] = true
          }
          this.reponses[i] = temp
        }
        else{
          this.repEnvoyees[i] = this.reponses[i]
        }
      }
    }
  },
};
</script>
