// value in selection
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

// Toggle
hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

// // ใช้ Event Delegation เพื่อจัดการการคลิกที่ลิงก์ในเมนูมือถือ
// mobileMenu.addEventListener("click", function (event) {
//   if (event.target.tagName === "A") {
//     mobileMenu.classList.remove("active");
//   }
// });
