// Nav Fixed
window.addEventListener('scroll', function () {
    const header = document.getElementById('top-head');
    if(window.scrollY > header.offsetHeight) {
        header.classList.add("fixed")
    } else {
        header.classList.remove("fixed")
    }
});

// Nav Toggle Button
const trigger = document.getElementById("nav-toggle");
if(trigger){
    trigger.addEventListener('click', function(){
      let header = document.getElementById('top-head');
      header.classList.toggle('open');
    }, false);
  }
