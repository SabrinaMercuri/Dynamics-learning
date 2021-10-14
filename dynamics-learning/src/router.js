import VueRouter from "vue-router";
import Vue from "vue";
import App from "App.vue";
import Accueilens from "./components/enseignant/Accueilens.vue";
import Accueiletu from "./components/etudiant/Accueiletu.vue";

Vue.use(VueRouter);

const routes = [
 { path: '/', name: 'App', component: App },
 { path: '/accueilens', name: 'accueilens', component: Accueilens },
 { path: '/accueiletu', name: 'accueiletu', component: Accueiletu },
]

const router = new VueRouter({
    routes
  })

export default router;