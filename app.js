//hamburger menu toggle
const btnHamburger = document.getElementById("btnHamburger");
const navLinks = document.getElementById("nav_links");
const overly = document.getElementById("overly");

btnHamburger.addEventListener("click", function () {
  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
    overly.classList.remove("overly");
    navLinks.classList.remove("show");
  } else {
    btnHamburger.classList.add("open");
    overly.classList.add("overly");
    navLinks.classList.add("show");
  }
});
/* Navbar completed ============================*/
