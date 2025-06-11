  // javascript for navigation bar effects on scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 1000) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

// javascript for responsive navigation sidebar menu
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });
});




// javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}