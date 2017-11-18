// import curl from 'curl';
// import $ from 'jquery';
import { fromByteArray } from 'base64-js';
import { TextEncoder } from 'text-encoding';

const api_key = `API_KEY`;
const api_secret = `API_SECRET`;
const API_URL = `https://api.localytics.com/v1`;

const base64EncodingUTF8 = str => {
    const encoded = new TextEncoder('utf-8').encode(str);
    const b64Encoded = fromByteArray(encoded);
    return b64Encoded;
};
const token = base64EncodingUTF8(`${api_key}:${api_secret}`);
let headers = new Headers();
headers.append('Authorization', 'Basic' + token);

export const GET_ANALYTICS_SUCCESS = 'GET_ANALYTICS_SUCCESS';
export const getAnalyticsSuccess = (analytics) => ({
    type: GET_ANALYTICS_SUCCESS,
    payload: analytics
})
export const getAnalytics = () => {
    //Thunk function
    console.log(token)
    return function (dispatch) {
        return fetch("https://api.localytics.com/v1/", {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            // mode: 'cors'
        }).then(res => {
            console.log(res)
            return res.json()
        }).then((analyticsJson) => {
            console.log("HELLO")
            dispatch(getAnalyticsSuccess(analyticsJson))
        }).catch(err =>
            console.log(`Error while running getAnalytics: ${err}`)
            )
    }
}