  // Get the dropdown button
  var dropdown = document.getElementsByClassName("dropbtn")[0];

  // Toggle the dropdown content when the dropdown button is clicked
  dropdown.onclick = function () {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }