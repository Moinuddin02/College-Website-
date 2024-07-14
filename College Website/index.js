let navlinks = document.getElementById("navlinks");

function showmenu() {
  navlinks.style.right = "0";
}

function hidemenu() {
  navlinks.style.right = "-400px";
}

// Hide menu on page load
document.addEventListener("DOMContentLoaded", function() {
  hidemenu();
});


