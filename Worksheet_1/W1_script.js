// Get the modal
const modal = document.getElementById("modal2");

// Get the button that opens the modal
const btn = document.getElementById("modal-btn2");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
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

// When the form is submitted, store the temperature data
const form = document.getElementById("temp-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const temperature = document.getElementsByName("temperature[]");
  const location = document.getElementsByName("location[]");
  const data = new FormData();
  for (let i = 0; i < temperature.length; i++) {
    data.append("temperature[]", temperature[i].value);
    data.append("location[]", location[i].value);
  }
  fetch("W1_temp.php", {
    method: "POST",
    body: data
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  modal.style.display = "none";
});
