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
    if (pageYOffset >= sectionTop - sectionHeight / 3){
      current = div.getAttribute("id");
      // window.location.hash = current;
    }
  });

  navElement.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) a.classList.add("active");
  });
});

const horizontalSections = gsap.utils.toArray('section.horizontal')

horizontalSections.forEach(function (sec, i) {
    var thisPinWrap = sec.querySelector('.pin-wrap');
    var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

    var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth + thisAnimWrap.children[0].offsetWidth);

    gsap.fromTo(thisAnimWrap, {
        x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()
    }, {
        x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
        ease: "none",
        scrollTrigger: {
            trigger: sec,
            start: "-50px bottom",
            end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
            // pin: thisPinWrap,
            invalidateOnRefresh: true,
            //anticipatePin: 1,
            scrub: true,
            // markers: true,
            toggleClass: {targets: sec, className: "active"}
        }
    });

});	