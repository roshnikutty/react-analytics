let { fromByteArray } = require('base64-js');
let { TextEncoder } = require('text-encoding');
let unirest = require('unirest');
const express = require('express');
const app = express();
const api_key = `API_KEY`;
const api_secret = `API_SECRET`;

const base64EncodingUTF8 = str => {
    const encoded = new TextEncoder('utf-8').encode(str);
    const b64Encoded = fromByteArray(encoded);
    return b64Encoded;
};
const token = base64EncodingUTF8(`${api_key}:${api_secret}`);

app.get('/', (request, clientResponse) => {
    unirest.get('https://api.localytics.com/v1/apps')
    .headers({
        'Authorization': `Basic ${token}`,
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
    .end(function (response) {
        clientResponse.json(response.body._embedded.apps);
    });
})
app.listen(process.env.PORT || 8080, () => console.log(
    `Your app is listening on port ${process.env.PORT || 8080}`));