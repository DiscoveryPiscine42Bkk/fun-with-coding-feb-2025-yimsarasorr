// value in selection
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

// Toggle
hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

<<<<<<< HEAD
// // ใช้ Event Delegation เพื่อจัดการการคลิกที่ลิงก์ในเมนูมือถือ
// mobileMenu.addEventListener("click", function (event) {
//   if (event.target.tagName === "A") {
//     mobileMenu.classList.remove("active");
//   }
// });
=======
// ปิดเมนูเมื่อคลิกลิงก์ในเมนูมือถือ
mobileMenu.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("open");
  }
});

// auto close menu
let lastScrollTop = window.scrollY;
window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;

  if (currentScroll < lastScrollTop || currentScroll > lastScrollTop) {
    mobileMenu.classList.remove("active"); // ปิดเมนู
    hamburger.classList.remove("open"); // ปิดสถานะ hamburger
  }

  lastScrollTop = currentScroll;
});
>>>>>>> parent of 376b424 (update send mail)
