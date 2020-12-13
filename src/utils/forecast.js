const request = require("request");

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9fbdb30d273afd0d0d10933a261c1025&units=metric`;

	request(
		{
			url,
			json: true,
		},
		(error, { body }) => {
			if (error) {
				callback("Unable to connect to weather services!", undefined);
			} else if (body.message) {
				callback("Unable to find location!", undefined);
			} else {
				callback(
					undefined,
					`The temperature is ${body.main.temp} degrees celsius.`,
				);
			}
		},
	);
};

module.exports = forecast;
