document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("modal-dialog");
  
    // Get the button that opens the modal
    var btn = document.getElementById("share-knowledge");
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    // Get the buttons inside the modal
    var humidityButton = document.getElementById("humidity-button");
    var co2Button = document.getElementById("co2-button");
    var lightButton = document.getElementById("light-button");
    var temperatureButton = document.getElementById("temperature-button");
  
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    // Add click listeners to the buttons inside the modal
    humidityButton.addEventListener('click', function() {
      console.log("Humidity button clicked");
      modal.style.display = "none";
    });

    // When the user clicks the humidity button, go to humidity.html
	humidityButton.onclick = function() {
		window.location.href = "humidity.html";
	}
  
    co2Button.addEventListener('click', function() {
      console.log("CO2 button clicked");
      modal.style.display = "none";
    });

    // When the user clicks the CO2 level button, go to CO2_level.html
	co2Button.onclick = function() {
		window.location.href = "#";
	}
  
    lightButton.addEventListener('click', function() {
      console.log("Light button clicked");
      modal.style.display = "none";
    });
    
    // When the user clicks the light button, go to light.html
	lightButton.onclick = function() {
		window.location.href = "#";
	}
  
    temperatureButton.addEventListener('click', function() {
      console.log("Temperature button clicked");
      modal.style.display = "none";
    });
    
    // When the user clicks the temperature button, go to temperature.html
	temperatureButton.onclick = function() {
		window.location.href = "temperature.html";
	}
  });
  