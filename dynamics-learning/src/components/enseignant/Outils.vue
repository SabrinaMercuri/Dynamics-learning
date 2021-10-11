<template>
    <div class="container">
        <div class="header">
            <h1>Outils</h1>
        </div>

        <div class = "outils">
            <v-card id="qcm" elevation="8">
                <v-card-title>QCM</v-card-title>
                <img src="../../assets/questionnaire.png" alt="Icon" 
                style="max-height: 50px; max-width: 50px"
                />
                <b-button size="lg">Créer</b-button>
            </v-card>
            <v-card id="sondage" elevation="8">
                <v-card-title>Sondage</v-card-title>
                <img src="../../assets/sondage.png" alt="Icon" 
                style="max-height: 50px; max-width: 50px"
                />
                <b-button disabled size="lg">A venir</b-button>
            </v-card>
            <v-card id = "brainstorming" elevation="8">
                <v-card-title>Brainstorming</v-card-title>
                <img src="../../assets/brainstorming.png" alt="Icon" 
                style="max-height: 50px; max-width: 50px"
                />
                <b-button disabled size="lg">A venir</b-button>
            </v-card>
            <v-card id="loadingbar" elevation="8">
                <v-card-title>Loading Bar</v-card-title>
                <img src="../../assets/loading.png" alt="Icon" 
                style="max-height: 50px; max-width: 50px"
                />
                <b-button disabled size="lg">A venir</b-button>
            </v-card>
            <v-card id="text" elevation="8">
                <v-card-title>Textes à trous</v-card-title>
                <img :src="selectedImage" alt="Icon" 
                style="max-height: 300px; max-width: 400px; border: 1px solid black"
                />
                <b-button disabled size="lg">A venir</b-button>
            </v-card>
        </div>
    </div>
</template>

<style scoped>

#qcm, #sondage, #brainstorming, #loadingbar, #text{
    width : 40%;
    background-color : rgb(224, 221, 221);
    margin: 5%;
    
}
</style>