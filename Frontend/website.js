function displayInput() {
    var input = document.getElementById("inputField").value;
    document.getElementById("output").innerHTML = "Hello, " + input + "!";
}
  
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
	popup.style.height = "200px";
	popup.style.backgroundColor = "white";
	popup.style.border = "1px solid #ccc";
	popup.style.borderRadius = "5px";
	popup.style.padding = "20px";

	// Add the form fields and submit button
	var form = document.createElement("form");

	var temperatureLabel = document.createElement("label");
	temperatureLabel.textContent = "Enter temperature:";
	var temperatureInput = document.createElement("input");
	temperatureInput.setAttribute("type", "text");
	temperatureInput.setAttribute("id", "temperature");
	form.appendChild(temperatureLabel);
	form.appendChild(temperatureInput);

	form.appendChild(document.createElement("br"));

	var locationLabel = document.createElement("label");
	locationLabel.textContent = "Enter location of measurement:";
	var locationInput = document.createElement("input");
	locationInput.setAttribute("type", "text");
	locationInput.setAttribute("id", "location");
	form.appendChild(locationLabel);
	form.appendChild(locationInput);

	form.appendChild(document.createElement("br"));

	var submitButton = document.createElement("button");
	submitButton.setAttribute("type", "button");
	submitButton.textContent = "Submit";
	submitButton.addEventListener("click", submitData);
	form.appendChild(submitButton);

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
