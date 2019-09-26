const request = require('request')

const getForeCast = ( latitude,longitude, callback) => {
    const url = `https://api.darksky.net/forecast/c6cc9948056a60deced089e3edc8db7b/${latitude},${longitude}`;
    request({ url: url, json: true }, (error, { body:foreCastData } = response) => {
        // console.log(response.body.currently);
        if (error)
            callback('unable to connect', undefined)
        else if (foreCastData.error)
            callback('unable to find location', undefined)
        else
            callback(undefined, foreCastData.daily.summary)
    });
}

module.exports = {
    getForeCast: getForeCast
}