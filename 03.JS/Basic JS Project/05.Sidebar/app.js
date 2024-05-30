const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".sidebar-toggle");
const close = document.querySelector(".close-btn");

toggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

close.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
