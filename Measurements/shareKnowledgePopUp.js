document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("modal-dialog");
  var buttons = document.querySelectorAll("[id^='share-knowledge']");
  var span = document.getElementsByClassName("close")[0];
  var modalButtons = document.querySelectorAll(".modal-button");

  buttons.forEach(function(button) {
    button.onclick = function() {
      modal.style.display = "block";
    }
  });

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  modalButtons.forEach(function(modalButton) {
    modalButton.addEventListener('click', function() {
      var buttonId = modalButton.getAttribute("id");
      switch(buttonId) {
        case "humidity-button":
          console.log("Humidity button clicked");
          window.location.href = "humidity.html";
          break;
        case "co2-button":
          console.log("CO2 button clicked");
          window.location.href = "#";
          break;
        case "light-button":
          console.log("Light button clicked");
          window.location.href = "#";
          break;
        case "temperature-button":
          console.log("Temperature button clicked");
          window.location.href = "temperature.html";
          break;
      }
      modal.style.display = "none";
    });
  });
});
