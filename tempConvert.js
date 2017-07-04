var cOrF = prompt("Enter f for Celcius to Fahrenheit, and enter c for Fahrenheit to Celcius").toLowerCase();
var temperature = prompt("Enter a temperature.");
console.log(convertTemp(temperature, cOrF));

function convertTemp(temp, type) {
	if (type == "f") {
		convertedTemp = (temp * 1.8) + 32;
		return convertedTemp;
	}

	else if (type == "c") {
		convertedTemp = (temp - 32) / 1.8;
		return convertedTemp;
	}

	else {
		console.log("error");
	}
}