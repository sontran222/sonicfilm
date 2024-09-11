document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.querySelector(".navbar").innerHTML = data;
      const curentPage = window.location.pathname.split("/").pop();
      console.log(curentPage);
      const navLinks = document.querySelectorAll("a");
      navLinks.forEach((link) => {
        if (link.getAttribute("href") == curentPage) {
          link.classList.add("active");
        }
      });
    });
});
