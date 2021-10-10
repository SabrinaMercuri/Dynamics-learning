<template>
  <div class="container-app">
    <div class="header">
      <!-- Compartiment Header -->
      
        <!-- Nom du QCM -->
      <h1>Nom du QCM</h1>

    <v-text-field
          
          :counter="100"
          label="Nom du QCM"
          style="background: #ffeaa7"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
          v-model="qcm.nom"
    ></v-text-field>


    </div>

    <!-- ------------------------------------------------------------------------------------------- -->
<v-form
    ref="form"
>
    <v-card 
    v-for="(question, nbQuestion) in qcm.questions" :key="nbQuestion" >

      <!-- Compartiment Main -->

        <!-- Nom de la question -->
      <h2>Question</h2>
        

        <v-text-field
          v-model="intitute"
          :counter="100"
          label="Nom de la question"
          style="background: #74b9ff"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>

        <v-card>
          <p>Difficulté de la question</p>
          <v-rating
            background-color="green lighten-2"
            label="Difficultyyy"
            color="red"
          
            length="5"
            size="64"
            value="3"
          ></v-rating>
        </v-card>

        
      <v-text-field
          v-model="trueRep"
          :counter="100"
          label="Bonne réponse"
          style="background: #00b894"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
      ></v-text-field>

      

      <v-text-field
          v-model="falseRep"
          :counter="100"
          label="Mauvaise réponse"
          style="background: #d63031"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
      ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      label="Plusieurs réponses possibles ?'"
      
    ></v-checkbox>


    



      </v-card>
      </v-form>
      <v-btn
          color="secondary"
          elevation="2"
          @click="ajouterQuestion()"
      >
      +
      </v-btn>



      


      
    <!-- --------------------------------------------------------------------------------------------- -->
    <div class="footer">
      <!-- Compartiment Footer -->
      <form class="flex flex-col" @submit.prevent="submitQCM">
        </form>

      <v-btn type="submit" class="border rounded py-3" color="primary"
        >Créer le QCM !
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
       
        @click="reset"
        >Reset Question
    </v-btn>

    </div>
  </div>
</template>


<script>
    export default {
      data: () => ({
        qcm : {
          nom:"",
          mdp:"",
          questions:[
            {
            intitute:"",
            falseRep:[""],
            trueRep:[""],
            }

          ]
        }
      }),
      methods: {
        submitQCM: function() {
          console.log("QCM envoyé")
        },
        reset () {
        this.$refs.form.reset()
      },
        ajouterQuestion(){
          this.qcm.questions[
             this.qcm.questions.length
          ] = {
            intitute:"",
            falseRep:[""],
            trueRep:[""],
          } 
          console.log(this.qcm.questions.length)
        }
      }
    }

</script>