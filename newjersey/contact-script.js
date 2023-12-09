function showNav() {
  const toogleContainer = document.querySelector(".main-container");
  toogleContainer.classList.toggle("main-container-expanded");
  const toogleNav = document.querySelector("nav");
  toogleNav.classList.toggle("hide-nav");
}

function validateForm() {
  var email1 = document.getElementById("email1").value;
  var email2 = document.getElementById("email2").value;

  if (email1 !== email2) {
    alert("Emails do not match!");
    return false;
  }

  // Continue with form submission
  return true;
}
