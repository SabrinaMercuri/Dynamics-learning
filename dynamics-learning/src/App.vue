<template>
  <div>
    <div class="accueil" v-if="!etudiant && !enseignant">
      <div class="logo">
        <v-img src="./assets/logo.png"></v-img>
      </div>
      <div class="buttons">
        <button class="button1" x-large @click="acceuilens()">Enseignant</button>
        <button class="button2" x-large @click="acceuiletu()">Etudiant</button>
      </div>
    </div>
    <div v-if="enseignant">
      <Accueilens />
    </div>
    <div v-if="etudiant">
      <Accueiletu />
    </div>
  </div>
</template>

<script>
import Accueilens from "./components/enseignant/Accueilens.vue";
import Accueiletu from "./components/etudiant/Accueiletu.vue";
export default {
  name: "App",

  components: {
    Accueilens,
    Accueiletu
  },

  data: () => ({
    etudiant: false,
    enseignant: false
  }),
  methods: {
    acceuilens: function() {
      this.enseignant = true;
    },
    acceuiletu: function() {
      this.etudiant = true;
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
  align-items: center;
  justify-content: center;
  /*margin-left: 300px;*/
}

.logo {
  /*background-image: url(./assets/logo.png);
  background-position: center;
  background-size: cover;*/
  align-items: center;
  width: 40%;
  height: 40%;
  display: flex;
  flex-direction: row;
  margin-top: 150px;
}

.buttons {
  width: 40%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

.button1 {
  width: 500px;
  height: 120px;
  margin-right: 150px;
  font-size: 30px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
}

.button2 {
  width: 500px;
  height: 120px;
  font-size: 30px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
}

.button1::after {
  content: "";
  background-color: #5dade2;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 15px;
  left: 15px;
  transition: 0.2s;
}

.button2::after {
  content: "";
  background-color: #5dade2;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 15px;
  left: 15px;
  transition: 0.2s;
}

.button1:hover::after {
  top: 0px;
  left: 0px;
}

.button2:hover::after {
  top: 0px;
  left: 0px;
}
</style>
