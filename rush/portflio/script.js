// Toggle Mobile Menu
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.toggle("active");
});

// ปิดเมนูเมื่อคลิกลิงก์
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.remove("active");
  });
});
