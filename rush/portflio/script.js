const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu"); // เปิดใช้งานตัวแปรนี้

// Toggle เมนูเมื่อกดปุ่ม
hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  hamburger.classList.toggle("open"); // เพิ่ม class "open" เพื่อใช้สำหรับ CSS (optional)
});

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
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("open");
  }

  lastScrollTop = currentScroll;
});

function sendMail(event) {
  event.preventDefault(); // handle with sent

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let mailto =
    "mailto:your-email@example.com" +
    "?subject=" +
    encodeURIComponent("Contact from " + name) +
    "&body=" +
    encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\nMessage: " + message
    );

  window.location.href = mailto; // เปิดแอปเมลพร้อมข้อมูล
}