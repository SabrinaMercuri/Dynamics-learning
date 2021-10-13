<template>
  <div class="accueil">
    <div class="logo">
      <v-img src="./assets/logo.png"></v-img>
    </div>
    <v-divider></v-divider>
    <div class="contenu">
      <v-navigation-drawer permanent width="600">
        <v-list class="title-menu">
          <h2>Menu</h2>
        </v-list>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item @click="mesoutils()" link class="menu-items">
            <v-list-item-title class="menu-props">Mes outils</v-list-item-title>
          </v-list-item>
          <v-list-item class="menu-items">
            <v-list-item-title class="menu-props">Mes cours</v-list-item-title>
          </v-list-item>
          <v-list-item class="menu-items">
            <v-list-item-title class="menu-props">Mes statistiques</v-list-item-title>
          </v-list-item>
          <v-list-item class="menu-items">
            <v-list-item-title class="menu-props">Paramètres</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-divider vertical></v-divider>
      <div class="outils">
        Les outils
      </div>
    </div>
  </div>
</template>

<script>
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
  width: 30%;
  height: 30%;
  display: flex;
  /*flex-direction: row;*/
  margin-top: 30px;
  margin-left: 30%;
}

.contenu {
  display: flex;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: azure;
}

.title-menu {
  text-align: center;
  /*height: 5%;*/
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-top: 4%;
  font-size: 40px;
}

.menu-props {
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 2;
  font-size: large;
}

.menu-items {
  margin-top: 15%;
  
}

.outils{
  border-left-style: groove;
  border-width:0.5ex;
}

</style>
