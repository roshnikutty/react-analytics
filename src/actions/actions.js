// import curl from 'curl';
// import $ from 'jquery';
// import fetchJsonp from 'fetch-jsonp';
// import unirest from 'unirest';
import { fromByteArray } from 'base64-js';
import { TextEncoder } from 'text-encoding';

// global.fetchJsonp = fetchJsonp;
// const API_URL = `https://api.localytics.com/v1`;
const api_key = `API_KEY`;
const api_secret = `API_SECRET`;

//get current date;
let currentDate = new Date().toISOString().substring(0, 10);

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
        return fetch("http://localhost:8080/", {
            method: 'GET',
            headers: {
            //     'Authorization': `Basic ${token}`,
                // 'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept':'application/json'
            },
            // mode: 'no-cors'
        }).then(res => {
            console.log(res)
            return res.json()
        })
        .then((analyticsJson) => {
            console.log(analyticsJson)
            dispatch(getAnalyticsSuccess(analyticsJson))
        })
        .catch(err =>
            console.log(`Error while running getAnalytics: ${err}`)
            )
        //=====================    
        // .catch(err =>
        //     console.log(`Error while running getAnalytics: ${err}`)
        //     )
        //---------------
        // return global.fetchJsonp(`${API_URL}`, {
        //         method: 'GET',
        //         headers: {
        //             'Authorization': `Basic ${token}`,
        //             'Access-Control-Allow-Origin': '*',
        //             'Content-Type': 'application/json',
        //             'Accept':'application/vnd.localytics.v1+hal+json'
        //         },
        //         mode: 'no-cors'
        // })
        // .then(data => {
        //     if (!data.ok) {
        //         return Promise.reject(data.statusText);
        //     }
        //     return data.json()
        // }).then((analyticsJson) => {
        //     console.log(analyticsJson)
        //     dispatch(getAnalyticsSuccess(analyticsJson))
        // }).catch(err =>
        //     console.log(`Error while running getLandingPageJobs(): ${err}`)
        // )
        //--------
        // return $.ajax({
        //     url: API_URL,
        //     method: 'GET',
        //     headers: {
        //         'Authorization': `Basic ${token}`,
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/vnd.localytics.v1+hal+json'
        //     },
        //     mode: 'no-cors'
        // })
        // return $.ajax({  
        //     url: API_URL,
        //     username : api_key,
        //     password :api_secret,
        //     type: 'GET',
        //     contentType: 'application/x-www-form-urlencoded',
        //     // dataType: "text",
        //     xhrFields: 
        //     {
        //         withCredentials: true
        //     },
        //     beforeSend: function (xhr) { 
        //         xhr.setRequestHeader('Authorization', 'Basic ' + btoa(api_key + ":" + api_secret));             
        //     }
        // })
        // .done((analyticsJson) => {
        //     console.log(analyticsJson)
        //     dispatch(getAnalyticsSuccess(analyticsJson))
        // }).fail(err =>
        //     console.log(`Error while running getLandingArcles: ${err}`)
        //     )
        //=========
        // var settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "https://api.localytics.com/v1/apps?api_key=API_KEY&api_secret=API_SECRET",
        //     "method": "GET",
        //     "headers": {
        //       "authorization": "Basic QVBJX0tFWTpBUElfU0VDUkVU",
        //       "cache-control": "no-cache"
        //     //   "postman-token": "ddf094dd-1ccc-ad64-a857-451ec187d0fa"
        //     }
        //   }

        //   $.ajax(settings).done(function (response) {
        //     console.log(response);
        //   });
    }
}