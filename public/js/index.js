document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("bar");
  const navMenu = document.getElementById("nav");
  const close = document.getElementById("close");
  if (button) {
    button.addEventListener("click", function () {
      navMenu.classList.replace("right-[-300px]", "right-0");
    });
  }

  if (close) {
    close.addEventListener("click", function () {
      navMenu.classList.replace("right-0", "right-[-300px]");
    });
  }
});
