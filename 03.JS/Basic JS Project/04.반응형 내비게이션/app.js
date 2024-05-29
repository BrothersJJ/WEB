const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
})
// links의 class에 show-links가 있으면 없애고 없으면 있게 함.
