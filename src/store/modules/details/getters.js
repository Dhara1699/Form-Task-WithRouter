export default {
    details(state) {
        return state.details;
    },
    hasDetails(state) {
        return state.details && state.details.length > 0;
    }
};