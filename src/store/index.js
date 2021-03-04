import { createStore } from 'vuex';
import DetailsModules from './modules/details/index.js';

const store = createStore({
    modules : {
        detailshow: DetailsModules
    }
});

export default store;