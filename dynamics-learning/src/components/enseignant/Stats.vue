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

created(){
var socket = io.connect();
var reponse = []
socket.emit('demandeReponse');

var chart = am4core.create("chartdiv", am4charts.PieChart);
chart.data = [{
  "Réponse": "Fausse",
  "Résultat": 1
}, {
  "Réponse": "Vrai",
  "Résultat": 2,
}
];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "Résultat";
pieSeries.dataFields.category = "Réponse";
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
