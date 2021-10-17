<template>
  <div class="all">
    <v-card class="top" elevation="12">
      <!-- Nom du Qcm -->
      <h1>Nom du QCM :</h1>
      <v-text-field id="text2"
        v-model="qcm.nom"
        label="Nom du QCM"
        required
      ></v-text-field>
      <!-- Mdp du Qcm -->
      <h1>Mot de passe du QCM :</h1>
      <v-text-field id="text2"
        v-model="qcm.mdp"
        label="Mdp du QCM"
        required
      ></v-text-field>
    </v-card>
    <!-- Questions -->
    <v-form ref="form">
      <div :key="render">
        <v-card
          v-for="(question, index) in qcm.questions"
          :key="index"
          class="question"
          elevation="8"
        >
          <!-- Intitule de la question -->
          <br />
          <br />
          <h2>Intitule de la question :</h2>
          <v-text-field id="text2"
            v-model="qcm.questions[index].intitule"
            label="Intitule de la question"
            required
            style="background: #74b9ff"
          ></v-text-field>
          <!-- Mauvaises réponse de la question -->
          <h2>Mauvaise réponses :</h2>
          <v-text-field id="text2"
            v-for="(fausseRep, index2) in qcm.questions[index].falseRep"
            :key="index2"
            v-model="qcm.questions[index].falseRep[index2]"
            label="Mauvaise reponse"
            required
            style="background: #d63031"
          ></v-text-field>
          <br />
          <v-btn @click="addMauvaiseRep(index)" style="background: #d63031"
            >ajout mauvaise reponse</v-btn
          >
          <!-- Bonne(s) réponse de la question -->
          <br />
          -------------------------------
          <br />
          <h2>Bonnes réponses :</h2>
          <v-text-field id="text"
            v-for="(vraiRep, index3) in qcm.questions[index].trueRep"
            :key="index3"
            v-model="qcm.questions[index].trueRep[index3]"
            label="Bonne reponse"
            required
            style="background: #00b894"
          ></v-text-field>
          <v-btn @click="addBonneRep(index)" style="background: #00b894"
            >ajout bonne reponse</v-btn
          >
        </v-card>
        <br />
        <br />
        <v-btn id="button" @click="addQuestion()">
          ajouter une question</v-btn
        >
        <v-btn id="button" @click="removeQuestion()">
          supprimer une question</v-btn
        >
        <br />
        <br />
        <br />
      </div>
      <!-- // Bouton envoyer le QCM 
            // Reste a faire : 
                // - Envoyer le QCM -->

      <v-btn id="button" @click="envoyerQcm()"> envoyer le qcm</v-btn>

      <!-- // Bouton reinitialiser lee formulaire -->
      <v-btn id="button" class="mr-4" @click="reset"
        >Réinitialiser le formulaire</v-btn
      >
    </v-form>
  </div>
</template>


<script>
export default {
  data: () => ({
    qcm: {
      nom: "",
      mdp: "",
      questions: [
        {
          intitule: "",
          falseRep: [],
          trueRep: [],
        },
      ],
    },
    render: 0,
  }),
  methods: {
    addMauvaiseRep: function (index) {
      this.qcm.questions[index].falseRep[
        this.qcm.questions[index].falseRep.length
      ] = "";
      this.render++;
    },
    addBonneRep: function (index) {
      this.qcm.questions[index].trueRep[
        this.qcm.questions[index].trueRep.length
      ] = "";
      this.render++;
    },
    addQuestion: function () {
      this.qcm.questions[this.qcm.questions.length] = {
        intitule: "",
        falseRep: [],
        trueRep: [],
      };
      this.render++;
    },
    removeQuestion: function () {
      // supprimer une question
    },
    envoyerQcm: function () {
      console.log(this.qcm);
      this.$emit("sendQcm")
      this.$socket.emit("sendQcm", this.qcm);
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>



<style>
.top {
  margin-bottom: 2%;
  padding: 2%;
  text-align: center;
  background-color: #f6e58d;
}

.all {
  width: 65%;
  margin: 10%;

  margin: 0 auto;
  margin-top: 150px;
}

.question {
  padding: 2%;
  text-align: center;
}

#button {
  font-size: 20px;
  margin-right: 30px;
  margin-left: 20px;
}

#text2 {
  height: 70px;
  font-size: 30px;
}

</style>
