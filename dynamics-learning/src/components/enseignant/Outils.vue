<template>
    <div class="card">
          <v-card id="qcm" elevation="8">
            <v-card-title class="justify-center">QCM</v-card-title>
            <v-card-text class="text-center">
              <img
                src="../../assets/questionnaire.png"
                alt="Icon"
                style="max-height: 50px; max-width: 50px"
              />
              <br />
                <v-btn color="orange" @click="creerQcm()">Créer</v-btn>
            </v-card-text>
          </v-card>
          <v-card id="sondage" elevation="8">
            <v-card-title class="justify-center">Sondage</v-card-title>
            <v-card-text class="text-center">
              <img src="../../assets/sondage.png" alt="Icon" style="max-height: 50px; max-width: 50px" />
              <br />
              <v-btn disabled color="grey">A venir</v-btn>
            </v-card-text>
          </v-card>
          <v-card id = "brainstorming" elevation="8">
                <v-card-title class="justify-center">Brainstorming</v-card-title>
                <v-card-text class=text-center>
                <img src="../../assets/brainstorming.png" alt="Icon" 
                style="max-height: 50px; max-width: 50px"
                /><br>
                <v-btn disabled color="grey">A venir</v-btn>
                </v-card-text>
            </v-card>
            <v-card id="loadingbar" elevation="8">
                <v-card-title class="justify-center">Loading Bar</v-card-title>
                <v-card-text class=text-center>
                <img src="../../assets/loading.png" alt="Icon" 
                style="max-height: 50px; max-width: 50px"
                /><br>
                <v-btn disabled color="grey">A venir</v-btn>
                </v-card-text>
            </v-card>
            <v-card id="texti" elevation="8">
                <v-card-title class="justify-center">Textes à trous</v-card-title>
                <v-card-text class=text-center>
                <img src="../../assets/text.png" alt="Icon" 
                style="max-height: 50px; max-width: 50px"
                /> <br>
                <v-btn disabled color="grey">A venir</v-btn>
                </v-card-text>
            </v-card>
        </div>
</template>

<script>
export default {
  name: "Outils",
  components: {
  },
  data: () => ({}),
  methods:{
    creerQcm: function(){
      this.$emit("recupdonnees")
    }
  }
};
</script>


<style scoped>
#qcm,
#sondage,
#brainstorming,
#loadingbar,
#texti{
  width: 30%;
  background-color: rgb(224, 221, 221);
  margin: 5%;
}

</style>