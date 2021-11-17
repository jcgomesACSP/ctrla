import LandingPage from '../layouts/LandingPage';
import AboutService from '../layouts/AboutService';

const routes = [
    {
        path: '/',
        component: LandingPage,
        name: 'landing'
    },
    {
        path:'/about',
        component: AboutService,
        name: 'about'
    }
]

export default routes;