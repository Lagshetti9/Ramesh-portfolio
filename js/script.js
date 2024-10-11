document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  }
});


const navbar = document.getElementById("navbar");
const minimizeBtn = document.getElementById("minimizeBtn");
const maximizeBtn = document.getElementById("maximizeBtn");

minimizeBtn.addEventListener("click", () => {
  navbar.classList.add("minimized");
  minimizeBtn.style.display = "none";
  maximizeBtn.style.display = "inline";
});

maximizeBtn.addEventListener("click", () => {
  navbar.classList.remove("minimized");
  minimizeBtn.style.display = "inline";
  maximizeBtn.style.display = "none";
});
