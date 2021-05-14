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
function toggleIcon(pos){
}

let navElement = document.querySelectorAll("div.navEl"),
  page = document.getElementsByClassName("pageContainer"),
  pos = 1,
  i = 1;

Array.from(navElement).forEach(function (e) {
  e.addEventListener("click", function () {
    //navElement[pos].classlist.remove('active');
    pos = this.dataset.pos;
    if (pos == "1") togglePage(pos);
    if (pos == "2") togglePage(pos);
    if (pos == "3") togglePage(pos);
  });
});

const slider = document.querySelector("section.pageContainer");

let touchStart, touchEnd;

slider.addEventListener(
  "touchstart",
  (e) => (touchStart = e.targetTouches[0].clientY)
);
slider.addEventListener(
  "touchmove",
  (e) => (touchEnd = e.targetTouches[0].clientY)
);
slider.addEventListener("touchend", (e) => {
  if (touchStart - touchEnd < 30 && pos > 1) {
    pos--;
    togglePage(pos);
  } else if (touchStart - touchEnd > 30 && pos < 3) {
    pos++;
    togglePage(pos);
  }
});