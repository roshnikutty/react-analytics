let {fromByteArray} = require('base64-js');
let {TextEncoder} = require('text-encoding');

let unirest = require('unirest');
const api_key = `API_KEY`;
const api_secret = `API_SECRET`;

const base64EncodingUTF8 = str => {
    const encoded = new TextEncoder('utf-8').encode(str);
    const b64Encoded = fromByteArray(encoded);
    return b64Encoded;
};
const token = base64EncodingUTF8(`${api_key}:${api_secret}`);
// let headers = new Headers();

// headers.append('Authorization', 'Basic' + token);
unirest.get('https://api.localytics.com/v1/apps')
    .headers({
        'Authorization': `Basic ${token}`,
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
    .end(function (response) {
        console.log(response.body._embedded.apps);
    });


