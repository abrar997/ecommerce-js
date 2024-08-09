document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("bar");
  const navMenu = document.getElementById("nav");
  const close = document.getElementById("close");
  if (button) {
    button.addEventListener("click", function () {
      navMenu.classList.add("open");
    });
  }

  if (close) {
    close.addEventListener("click", function () {
      navMenu.classList.remove("open");
    });
  }
});
