import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.map'

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history', //remove o # da rota
});

export default router;