// Get the modal
var modal = document.querySelector(".modal");

// Get the button that opens the modal
var button = document.querySelector("#open-modal");

// Get the <span> element that closes the modal
var close = document.querySelector(".close");

// When the user clicks on the button, open the modal
button.addEventListener("click", function() {
  modal.style.display = "block";
});

// When the user clicks on the close button, close the modal
close.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
