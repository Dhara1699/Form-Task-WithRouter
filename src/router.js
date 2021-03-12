import { createRouter , createWebHistory } from 'vue-router';

import RegistrationDetails from './pages/RegistrationDetails.vue';
import PersonalDetails from './pages/PersonalDetails.vue';
import ContactDetails from './pages/ContactDetails.vue';
import JobDetails from './pages/JobDetails.vue';
import ShowDetails from './pages/showDetails/ShowDetails.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/' , redirect: '/registraion' },
        { path: '/registraion' , component: RegistrationDetails },
        { path: '/personal' , component: PersonalDetails },
        { path: '/contact' , component: ContactDetails },
        { path: '/job' , component: JobDetails },
        { path: '/showdetails' , component: ShowDetails },
        { path: '/:notFound(.*)' , component: NotFound }
    ],
});

export default  router;