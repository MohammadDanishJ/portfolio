function togglePage(pos) {
  let i = 3;
  while (i > 0) {
    navElement[i - 1].classList.remove("active");
    i--;
  }
  var scroll = "translateY(-" + (pos - 1) * 100 + "%)";
  page[0].style.transform = scroll;
  navElement[pos - 1].classList.add("active");
}
function toggleMenu() {
  console.log('clicked');
  burgerMenu.classList.toggle("is-active");
  nav.classList.toggle("active");
  burgerMenu.classList.toggle("active");
}

let navElement = document.querySelectorAll("div.navEl"),
  page = document.getElementsByClassName("pageContainer"),
  pos = 1,
  i = 1,
 burgerMenu = document.getElementById("burger")
 nav = document.querySelector("nav");

  burgerMenu.addEventListener("click", toggleMenu);

Array.from(navElement).forEach(function (e) {
  e.addEventListener("click", function () {
    //navElement[pos].classlist.remove('active');
    pos = this.dataset.pos;
    if (pos == "1") togglePage(pos);
    if (pos == "2") togglePage(pos);
    if (pos == "3") togglePage(pos);
  });
});

//const slider = document.querySelector("section.pageContainer");

// let touchStart, touchEnd;

// slider.addEventListener(
//   "touchstart",
//   (e) => (touchStart = e.targetTouches[0].clientY)
// );

// slider.addEventListener(
//   "touchmove",
//   (e) => (touchEnd = e.targetTouches[0].clientY)
// );

// slider.addEventListener("touchend", (e) => {
//   if (touchStart - touchEnd < 30 && pos > 1) {
//     pos--;
//     togglePage(pos);
//   } else if (touchStart - touchEnd > 30 && pos < 3) {
//     pos++;
//     togglePage(pos);
//   }
// });

const main =  document.querySelector('#main');
const sections = document.querySelectorAll('.main');
console.log(sections);
const navLi = document.querySelectorAll('.navEl');
console.log(navLi);
window.addEventListener('scroll',()=>{
  console.log('scrolling');
  let current = '';
  sections.forEach((div)=>{
    const sectionTop = div.offsetTop;
    const sectionHeight = div.clientHeight;
    // console.log('pageYOffset: '+ pageYOffset);
    // console.log('sectionTop: '+sectionTop);
    // console.log('sectionHeight: '+sectionHeight);
    // console.log('sectionTop - sectionHeight / 3: '+ (sectionTop - sectionHeight / 3));
    // console.log(pageYOffset >= sectionTop - sectionHeight / 3);
    if(pageYOffset >= sectionTop - sectionHeight / 3)
      current = div.getAttribute("id");
      console.log(current);
  });

  navLi.forEach((a) => {
    console.log(a.classList);
    a.classList.remove("active");
    if(a.classList.contains(current)){
      a.classList.add("active");
    }
  })
});
