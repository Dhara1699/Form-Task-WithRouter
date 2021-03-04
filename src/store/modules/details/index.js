import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
    namespaced: true,
    state() {
        return {
            details: [
                {
                    id: 'c1',
                    firstName : 'Dhara',
                    lastName : 'Patel',
                    location : 'Ahmedabad',
                    contact : '9909050506',
                    emailId : 'dhara1.patel@bacacy.com',
                },
                {
                    id: 'c2',
                    firstName : 'Mann',
                    lastName : 'Patel',
                    location : 'Surat',
                    contact : '1234567890',
                    emailId : 'mann.patel@gmail.com'
                }
            ]
        };
    },
    mutations,
    getters,
    actions
};
