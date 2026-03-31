const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// 1. Sự kiện click vào nút để mở/đóng
// (e) để hiểu rằng thông tin khi "click" sẽ được lưu trữ vào thùng "e" event
menuToggle.addEventListener("click", (e) => {
  // === so sánh giá trị chính sác phải là.......
  const isVisible = navLinks.getAttribute("data-visible") === "true";
  navLinks.setAttribute("data-visible", !isVisible);
  // đã lấy giá trị chính xác thì ta sử dụng biến logic false không trong nháy kép. Nếu trong nháy kép, biến đó là string
  // ngoài cách so sánh biến a === false, ta có thể viết if (!a) hoặc a === true, ta có thể viết if (a)
  if (isVisible === false) {
    menuToggle.innerText = "✕";
  } else {
    menuToggle.innerHTML = "☰";
  }
  // Ngăn chặn sự kiện nổi bọt lên document ngay lập tức
  e.stopPropagation();
});

// 2. Sự kiện click vào toàn bộ trang web
document.addEventListener("click", (e) => {
  const isVisible = navLinks.getAttribute("data-visible") === "true";

  // Nếu menu đang mở VÀ click không nằm trong menu hoặc nút bấm
  if (
    isVisible &&
    !navLinks.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    navLinks.setAttribute("data-visible", "false");
    menuToggle.innerHTML = "☰"; // Đổi lại thành 3 gạch khi đóng từ bên ngoài
  }
});

const menuToggle1 = document.querySelector(".menu-toggle1");
const navLinks1 = document.querySelector(".sidebar");

// 1. Sự kiện click vào nút để mở/đóng
// (e) để hiểu rằng thông tin khi "click" sẽ được lưu trữ vào thùng "e" event
menuToggle1.addEventListener("click", (e) => {
  // === so sánh giá trị chính sác phải là.......
  const isVisible1 = navLinks1.getAttribute("data-visible1") === "true";
  navLinks1.setAttribute("data-visible1", !isVisible1);
  // đã lấy giá trị chính xác thì ta sử dụng biến logic false không trong nháy kép. Nếu trong nháy kép, biến đó là string
  // ngoài cách so sánh biến a === false, ta có thể viết if (!a) hoặc a === true, ta có thể viết if (a)
  if (isVisible1 === false) {
    menuToggle1.innerText = "✕";
  } else {
    menuToggle1.innerHTML = "☰";
  }
  // Ngăn chặn sự kiện nổi bọt lên document ngay lập tức
  e.stopPropagation();
});

// 2. Sự kiện click vào toàn bộ trang web
document.addEventListener("click", (e) => {
  const isVisible1 = navLinks1.getAttribute("data-visible1") === "true";

  // Nếu menu đang mở VÀ click không nằm trong menu hoặc nút bấm
  if (
    isVisible1 &&
    !navLinks1.contains(e.target) &&
    !menuToggle1.contains(e.target)
  ) {
    navLinks1.setAttribute("data-visible1", "false");
    menuToggle1.innerHTML = "☰"; // Đổi lại thành 3 gạch khi đóng từ bên ngoài
  }
});
// Ngăn chuột phải
// document.addEventListener("contextmenu", (event) => event.preventDefault());

// Ngăn phím tắt (Ctrl+P, Ctrl+S, Ctrl+U, PrtSc...)
// document.onkeydown = function (e) {
//   if (
//     e.ctrlKey &&
//     (e.key === "p" || e.key === "s" || e.key === "u" || e.key === "c")
//   ) {
//     // alert("Tính năng này bị vô hiệu hóa!");
//     return false;
//   }
// };
