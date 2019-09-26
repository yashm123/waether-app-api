const request = require("request")
const getGeoCode = (address, callback) => {
    const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoieWFzaG0xOSIsImEiOiJjazB0OWczeTcwYTc0M2dwNnVkeWluemZiIn0.tQX7nns9jpo1cJQWAAoafA&limit=1`
    request({ url: geocodingUrl, json: true }, (error, { body } = response) => {
        if (error)
            callback("unable to connect", undefined)
        else if (body.features.length == 0)
            callback("enter proper address", undefined)
        else
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                place: body.features[0].place_name
            });
    });
}

module.exports = {
    getGeoCode: getGeoCode
}