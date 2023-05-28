const header = document.getElementById("TopHeader");
const Button = document.getElementById("ToggleButton");

Button.addEventListener("click", function () {
  if (Button.innerHTML === "MENU") {
    header.classList.add("open");
    Button.innerHTML = "CLOSE";
  } else {
    header.classList.remove("open");
    Button.innerHTML = "MENU";
  }
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

window.addEventListener("resize", function () {
  let x = 800;
  if (window.innerWidth >= x) {
    header.classList.remove("open");
    Button.innerHTML = "MENU";
  }
});

const anchorTags = document.querySelectorAll('a[href*="#"]');
anchorTags.forEach(function (anchorTag) {
  anchorTag.addEventListener("click", function () {
    header.classList.remove("open");
    Button.innerHTML = "MENU";
  });
});
