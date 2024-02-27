// Creating a class saving the input from the fields
class SpeedCalculator {
	constructor(hours, minutes, seconds, kilometers) {
		this._kilometers = kilometers;
		// Finding total time in hours
		const totalTimeHours = hours + minutes / 60 + seconds / 3600;
		this.totalTimeHours = totalTimeHours;
	}
	// Getter
	get kmhpace() {
		return this.calcKmhPace();
	}
	get totalTimeHours() {
		return this._totalTimeHours;
	}
	get kilometers() {
		return this._kilometers;
	}
	// Setter
	set totalTimeHours(newTotalTimeHours) {
		this._totalTimeHours = newTotalTimeHours;
	}
	set kilometers(newKilometers) {
		this._kilometers = newKilometers;
	}
	// Method
	calcKmhPace() {
		return this._kilometers / this.totalTimeHours;
	}
}
// Creating a constant variable for the button element, then adding an event listener listening for click then running function specified.
const calculateButton = document.getElementById("calculate-btn");
calculateButton.addEventListener("click", function () {
	// Get values from input fields
	const hours = parseFloat(document.getElementById("hours").value);
	const minutes = parseFloat(document.getElementById("minutes").value);
	const seconds = parseFloat(document.getElementById("seconds").value);
	const kilometers = parseFloat(document.getElementById("kilometers").value);
	// Creating an instance from the input based on the class SpeedCalculator
	const calculator = new SpeedCalculator(hours, minutes, seconds, kilometers);
	// Calculate pace
	const pace = calculator.calcKmhPace();
	// Display pace in the HTML
	document.getElementById("pace-result").textContent = `Pace: ${ pace.toFixed(2) } km/h`;
});