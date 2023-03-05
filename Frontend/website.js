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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scroll-btn").style.bottom = "0";
  } else {
    document.querySelector(".scroll-btn").style.bottom = "-50px";
  }
}

// Get the fact container and fact text elements from the DOM
const factContainer = document.getElementById("fact-container");
const factText = document.getElementById("fact-text");

// Define a function to get a random fact from the JSON data
function getRandomFact() {
  fetch("facts.json")
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomFact = data[randomIndex].fact;
      factText.innerText = randomFact;
    })
    .catch(error => console.error(error));
}

// Set the fact text to a random fact on page load
getRandomFact();

// Add an event listener to the window object to change the fact on page refresh
window.addEventListener("beforeunload", getRandomFact);

console.log(getRandomFact);

// get the form element and the modal element
var form1 = document.getElementById("modal-form");
var modal = document.getElementById("modal");

// add an event listener to the form's submit button
form1.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting normally
  
  // get the user input from the form
  var co2_level = document.getElementById("co2_level").value;
  var room_name = document.getElementById("room_name").value;
  
  // create a new XMLHttpRequest object
  var xhttp = new XMLHttpRequest();
  
  // set the callback function for when the request is complete
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      modal.style.display = "none"; // hide the modal dialog after the data has been submitted
    }
  };
  
  // send the form data to the PHP file using POST method
  xhttp.open("POST", "connection.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("co2_level=" + co2_level + "&room_name=" + room_name);
});
