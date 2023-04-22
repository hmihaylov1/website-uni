// Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
const btn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

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

// When the form is submitted, store the CO2 data
const form = document.getElementById("temp-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const co2_level = document.getElementsByName("co2_level[]");
  const location = document.getElementsByName("location[]");
  const data = new FormData();
  for (let i = 0; i < co2_level.length; i++) {
    data.append("co2_level[]", co2_level[i].value);
    data.append("location[]", location[i].value);
  }
  fetch("W2_CO2.php", {
    method: "POST",
    body: data
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  modal.style.display = "none";
});
