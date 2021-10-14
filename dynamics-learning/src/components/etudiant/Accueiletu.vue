<template>
  <div class="accueil">
    <div class="contenu">
      <v-navigation-drawer permanent width="600">
        <div class="logo">
          <v-img src="../../assets/logo.png"></v-img>
        </div>
        <v-list nav dense>
          <button class="button" x-large>Mes cours</button>
          <button class="button" x-large>Mes statistiques</button>
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
        <span class="titre">Mes outils</span>
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
                <v-btn flat color="orange">Créer</v-btn>
            </v-card-text>
          </v-card>
          <v-card id="sondage" elevation="8">
            <v-card-title class="justify-center">Sondage</v-card-title>
            <v-card-text class="text-center">
              <img src="../../assets/sondage.png" alt="Icon" style="max-height: 50px; max-width: 50px" />
              <br />
              <v-btn flat disabled color="grey">A venir</v-btn>
            </v-card-text>
          </v-card>
          <v-card id = "brainstorming" elevation="8">
                <v-card-title class="justify-center">Brainstorming</v-card-title>
                <v-card-text class=text-center>
                <img src="../../assets/brainstorming.png" alt="Icon" 
                style="max-height: 50px; max-width: 50px"
                /><br>
                <v-btn flat disabled color="grey">A venir</v-btn>
                </v-card-text>
            </v-card>
            <v-card id="loadingbar" elevation="8">
                <v-card-title class="justify-center">Loading Bar</v-card-title>
                <v-card-text class=text-center>
                <img src="../../assets/loading.png" alt="Icon" 
                style="max-height: 50px; max-width: 50px"
                /><br>
                <v-btn flat disabled color="grey">A venir</v-btn>
                </v-card-text>
            </v-card>
            <v-card id="text" elevation="8">
                <v-card-title class="justify-center">Textes à trous</v-card-title>
                <v-card-text class=text-center>
                <img src="../../assets/text.png" alt="Icon" 
                style="max-height: 50px; max-width: 50px"
                /> <br>
                <v-btn flat disabled color="grey">A venir</v-btn>
                </v-card-text>
            </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "accueiletu",
  components: {},
  data: () => ({})
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
