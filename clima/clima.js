const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=61bec212b86ef21d4de0509bbd96ac78&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}