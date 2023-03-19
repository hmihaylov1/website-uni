var modal = null;

function openPopup() {
	// If the modal dialog is already open, do nothing
	if (modal && modal.style.display === "block") {
		return;
	}
	// Create a new modal dialog
	modal = document.createElement("div");
	modal.style.display = "block";
	modal.style.position = "fixed";
	modal.style.zIndex = "1";
	modal.style.left = "0";
	modal.style.top = "0";
	modal.style.width = "100%";
	modal.style.height = "100%";
	modal.style.backgroundColor = "rgba(0,0,0,0.4)";

	// Create the popup form
	var popup = document.createElement("div");
	popup.style.display = "block";
  popup.style.position = "relative";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%,-50%)";
  popup.style.width = "400px";
  popup.style.height = "300px";
  popup.style.backgroundColor = "white";
  popup.style.border = "5px solid #2c3e50";
  popup.style.borderRadius = "20px";
  popup.style.padding = "20px";
  popup.style.boxShadow = "0 0 10px #2c3e50";

	// Add the form fields and submit button
  var form = document.createElement("form");
  form.style.marginTop = "30px";
  form.style.textAlign = "center";

	var temperatureLabel = document.createElement("label");
	temperatureLabel.textContent = "Enter CO2 level:";
  temperatureLabel.style.fontSize = "20px";
  temperatureLabel.style.fontWeight = "bold";
  temperatureLabel.style.color = "#2c3e50";
  temperatureLabel.style.marginRight = "10px";

	var temperatureInput = document.createElement("input");
	temperatureInput.setAttribute("type", "text");
  temperatureInput.setAttribute("id", "temperature");
  temperatureInput.style.borderRadius = "10px";
  temperatureInput.style.border = "2px solid #2c3e50";
  temperatureInput.style.fontSize = "20px";
  temperatureInput.style.padding = "5px";
  form.appendChild(temperatureLabel);
  form.appendChild(temperatureInput);

	form.appendChild(document.createElement("br"));

	var locationLabel = document.createElement("label");
	locationLabel.textContent = "Enter location of measurement:";
  locationLabel.style.fontSize = "20px";
  locationLabel.style.fontWeight = "bold";
  locationLabel.style.color = "#2c3e50";

	var locationInput = document.createElement("input");
  locationInput.setAttribute("type", "text");
  locationInput.setAttribute("id", "location");
  locationInput.style.borderRadius = "10px";
  locationInput.style.border = "2px solid #2c3e50";
  locationInput.style.fontSize = "20px";
  locationInput.style.padding = "5px";
  form.appendChild(locationLabel);
  form.appendChild(locationInput);

	form.appendChild(document.createElement("br"));

	var submitButton = document.createElement("button");
	submitButton.setAttribute("type", "button");
  submitButton.textContent = "Submit";
  submitButton.style.fontSize = "20px";
  submitButton.style.fontWeight = "bold";
  submitButton.style.borderRadius = "10px";
  submitButton.style.border = "none";
  submitButton.style.padding = "10px 20px";
  submitButton.style.backgroundColor = "#2c3e50";
  submitButton.style.color = "white";
  submitButton.style.marginRight = "10px";
	submitButton.addEventListener("click", submitData);
	form.appendChild(submitButton);

  var exitButton = document.createElement("button");
	exitButton.setAttribute("type", "button");
  exitButton.textContent = "Exit";
  exitButton.style.fontSize = "20px";
  exitButton.style.fontWeight = "bold";
  exitButton.style.borderRadius = "10px";
  exitButton.style.border = "none";
  exitButton.style.padding = "10px 20px";
  exitButton.style.backgroundColor = "#2c3e50";
  exitButton.style.color = "white";
  exitButton.style.marginRight = "10px";
	exitButton.addEventListener("click", closePopup);
	form.appendChild(exitButton);

	popup.appendChild(form);
	modal.appendChild(popup);

	// Add the modal dialog to the document
	document.body.appendChild(modal);
}

function closePopup() {
	if (modal) {
		modal.style.display = "none";
	}
}

function submitData() {
	var temperature = document.getElementById("temperature").value;
	var location = document.getElementById("location").value;

	alert("Temperature: " + temperature + "\nLocation: " + location);

	// Close the modal dialog
	closePopup();
}

// Search Bar 

const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
