import { GET_ANALYTICS_SUCCESS } from '../actions/actions'

let initialState = {
    app_id: ""
};

export const analyticsReducer = (state = initialState, action) => {
    // let app_id;
    // if (action.type === GET_ANALYTICS_SUCCESS) {
    //     let appsResponse = action.payload;
    //     if (appsResponse._embedded.apps.length) {
    //         let appStopShop = appsResponse._embedded.apps.filter((app) => {
    //             return app.name === `1 Stop Shop`;
    //         })
    //         app_id = appStopShop.app_id;
    //     }
    //     return Object.assign({}, state, { app_id });
    // }
    return state;
}