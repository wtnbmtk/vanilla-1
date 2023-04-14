// Nav Fixed
window.addEventListener("scroll", function () {
  const header = document.getElementById("TopHeader");
  if (window.scrollY > header.offsetHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// Nav Toggle Button
const trigger = document.getElementById("nav-toggle");
if (trigger) {
  trigger.addEventListener(
    "click",
    function () {
      let header = document.getElementById("TopHeader");
      header.classList.toggle("open");
    },
    false
  );
}

window.addEventListener("resize", function () {
  const x = 800;
  const target = document.getElementById("TopHeader");
  if (window.innerWidth >= x) {
    target.classList.remove("open");
  }
});

const anchorTags = document.querySelectorAll('a[href*="#"]');
anchorTags.forEach(function (anchorTag) {
  anchorTag.addEventListener("click", function () {
    const drawer = document.getElementById("TopHeader");
    drawer.classList.remove("open");
  });
});
