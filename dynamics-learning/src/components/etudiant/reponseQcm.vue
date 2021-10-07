<template>
  <v-app>
    <h1>{{ qcm.nom }}</h1>
    <v-card v-for="(question,index) in qcm.questions" :key="index">
        <h2>question.intitule</h2>

    </v-card>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    qcm : {
        nom:"sossur",
        mdp:"",
        questions:[
            {
                intitule:"sossur 1 ?",
                falseRep:[
                    "1",
                    "2"
                ],
                trueRep:[
                    "3",
                    "4"
                ]
            },
            {
                intitule:"sossur 2 ?",
                falseRep:[
                    "1",
                    "2"
                ],
                trueRep:[
                    "3",
                    "4"
                ]
            },
            {
                intitule:"sossur 3 ?",
                falseRep:[
                    "1",
                    "2"
                ],
                trueRep:[
                    "3",
                    "4"
                ]
            },
        ]
    }
  }),
};
</script>
