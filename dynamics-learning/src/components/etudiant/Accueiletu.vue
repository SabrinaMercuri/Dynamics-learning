<template>
  <div class="accueil" :key="render">
    <div class="contenu">
      <v-navigation-drawer permanent width="600">
        <div class="logo">
          <v-img src="../../assets/logo.png"></v-img>
        </div>
        <v-list nav dense>
          <button class="button" x-large @click="afficheCours()">Mes cours</button>
          <button class="button" x-large @click="afficheStats()">Mes statistiques</button>
          <button class="button" x-large>Paramètres</button>
        </v-list>
        <div class="image">
          <v-img src="../../assets/image.jpg"></v-img>
        </div>
      </v-navigation-drawer>
      <div class="outils">
        <div class="haut">
            <form class="searchBar">
              <label>
                <input
                  placeholder="Search..."
                  class="form-control"
                  type="text"
                  name="name"
                  v-model="name"
                />
              </label>
            </form>
            <div class="user">
          <v-img src="../../assets/user.png"></v-img>
        </div>
        </div>
        <span class="titre" v-if="!selectione && !stats">Mes cours</span>
        <span class="titre" v-if="selectione && !stats">Repondez au QCM</span>
        <span class="titre" v-if="!selectione && stats">Statistiques</span>
        <div class="card" v-if="!selectione && !stats">
          <v-card id="qcm" elevation="8" v-for="(qcm,index) in qcms" :key="index">
            <v-card-title class="justify-center">QCM - {{ qcm.nom }}</v-card-title>
            <v-card-title v-if="qcm.resultat===undefined" class="justify-center">Résultat :</v-card-title>
            <v-card-title v-if="qcm.resultat!==undefined" class="justify-center">Résultat : {{ qcm.resultat }} / {{ qcm.questions.length }} </v-card-title>
            <v-card-text class="text-center">
              <img
                src="../../assets/questionnaire.png"
                alt="Icon"
                style="max-height: 50px; max-width: 50px"
              />
              <br />
                <v-btn flat color="orange" @click="faireQcm(qcm)">Rejoindre</v-btn>
            </v-card-text>
          </v-card>
        </div>
        <ReponseQcm v-if="selectione && !stats" @finQcm="finQcm()" :qcm="qcmSelectione"/>
        <Stats v-if="!selectione && stats"/>
      </div>
    </div>
  </div>
</template>

<script>
import ReponseQcm from "./ReponseQcm"
import Stats from "../enseignant/Stats"

export default {
  name: "accueiletu",
  components: {
    ReponseQcm,
    Stats
  },
  data: () => ({
    qcms: [],
    qcmSelectione: {},
    selectione: false,
    name: "",
    stats: false,
    render:0
  }),
  created(){
    console.log("recup qcm")
    this.$socket.emit("recupQcm")
  },
  sockets:{
    getQcm: function(qcms){
      this.qcms = qcms 
      console.log("qcm récupéré")
    }
  },
  methods:{
    faireQcm: function(qcm){
      this.qcmSelectione = qcm
      this.selectione = true
      this.stats = false
    },
    afficheStats: function(){
      this.selectione = false
      this.stats = true
    },
    afficheCours: function(){
      this.selectione = false
      this.stats = false
      this.$socket.emit("recupQcm")
    },
    finQcm: async function(){
      this.selectione = false
      this.stats = false
      this.$socket.emit("recupQcm")
      this.render++
    }
  }
};
</script>

<style scoped>
.accueil {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  /*justify-content: center;*/
  /*margin-left: 300px;*/
  min-height: 100vh;
}

.logo {
  /*background-image: url(./assets/logo.png);
  background-position: center;
  background-size: cover;*/
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 60%;
  display: flex;
  /*flex-direction: row;*/
  margin-top: 30px;
  margin-left: 20%;
  margin-bottom: 30%;
}

.image {
  width: 80%;
  height: 80%;
  margin-left: 10%;
  margin-top: 250px;
}

.contenu {
  display: flex;
  text-align: center;
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: space-between;
}

.outils {
  width: 100%;
  border-left-style: groove;
  border-width: 0.5ex;
}

.button {
  width: 300px;
  height: 70px;
  font-size: 40px;
  font-weight: 200;
  outline: 0;
  cursor: pointer;
  position: relative;
  margin-top: 50px;
}

.titre {
  text-align: center;
  height: 5%;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 100px;
  margin-top: 20px;
}

.card {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

#qcm,
#sondage,
#brainstorming,
#loadingbar,
#text {
  width: 30%;
  background-color: rgb(224, 221, 221);
  margin: 5%;
}

.haut{
  height:10%;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
}

.searchBar {
  margin-left: 40px;
  margin-top: 50px;
  font-size: 40px;
  font-weight: 200;
}

.form-control {
  border: solid 1px;
  border-radius: 10px;
}

.user {
  width:6%;
  height: 6%;
  margin-right: 60px;
  margin-top: 40px;
}

</style>
