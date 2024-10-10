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
