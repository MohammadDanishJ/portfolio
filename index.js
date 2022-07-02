function toggleMenu() {
  burgerMenu.classList.toggle("is-active");
  nav.classList.toggle("active");
  burgerMenu.classList.toggle("active");
}

let navElement = document.querySelectorAll(".navEl"),
  burgerMenu = document.getElementById("burger"),
  toggle = document.getElementById("toggle"),
  nav = document.querySelector("nav"),
  sections = document.querySelectorAll(".main"),current;


toggle.addEventListener("click", toggleMenu);
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((div) => {
    const sectionTop = div.offsetTop;
    const sectionHeight = div.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 4) current = div.getAttribute("id")
  });

  navElement.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active")
      window.location.hash = current;
    }
  });
});
