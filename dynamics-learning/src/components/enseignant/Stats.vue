<template>
<div>
<h1>Statistiques du QCM</h1>
<div id="chartdiv"></div>
</div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
export default {
  name: "Stats",
  sockets: {
    envoieReponseStats: function (stats) {
      var chart = am4core.create("chartdiv", am4charts.PieChart);
      var rept = 0;
      var repf =0;
      for(let i =0; i<stats.length; i++) {
        for(let j = 0; j <stats[i].length; j++) {
          if(stats[i][j]) {
            rept +=1;
          }
          else {
            repf += 1;
          }
        }
      }
      chart.data = [{
        "Réponse": "Fausse",
        "Résultat": repf
      }, {
        "Réponse": "Vrai",
        "Résultat": rept,
      }
      ];

// Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "Résultat";
      pieSeries.dataFields.category = "Réponse";
    }
  },
created() {
    this.$socket.emit('demandeReponse');
  }
}
</script>


<style scoped>

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
h1 {
    text-align: center;
}
#chartdiv {
  width: 100%;
  height: 400px;
}

</style>
