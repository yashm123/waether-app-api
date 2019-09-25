const geoCodeController = require("./utility/geoCode")
const ForeCastController = require("./utility/foreCast")
const location = process.argv[2]
if (location) {
    geoCodeController.getGeoCode(location, (error, { latitude, longitude, place:location } = geoCodeData) => {
        if (error)
            return console.log(error);

        ForeCastController.getForeCast(latitude, longitude, (error, foreCastData) => {
            if (error)
                return console.log(error);
            else {
                console.log(location);
                console.log(foreCastData)
            }
        });
    });
} else {
    console.log("please enter location");
}

//forecast api for getting climate



