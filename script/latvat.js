/* script nút màu nền */
const BUTTON = document.querySelector("button.toggle");

const TOGGLE = () => {
  console.log("check");
  document.body.classList.toggle('active')
  const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
  document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
  BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
  localStorage.setItem("dark-mode", IS_PRESSED ? "false" : "true");
};

if (BUTTON) {
  BUTTON.addEventListener("click", TOGGLE);
  const isDarkMode = localStorage.getItem("dark-mode");
  if (isDarkMode === "true") {
    document.body.setAttribute("data-dark-mode", true);
    BUTTON.setAttribute("aria-pressed", true);
  }
}
/* thời khoá biểu */
function listenerTen() {    
  if (document.body.dataset['darkMode']) {
      document.body.classList.add('active'); // Thêm lớp 'active' vào phần tử body
  } else {
      document.body.classList.remove('active'); // Xóa lớp 'active' khỏi phần tử body
  }
};
listenerTen(); // Gọi hàm listenerTen

    
/* -------------------------- */

/* script loading */

// Khi trang được tải hoàn tất, ẩn trang loading
window.addEventListener("load", function () {
  var loadingWrapper = document.querySelector(".loading-wrapper");
  loadingWrapper.style.display = "none";
});

/* -------------------------- */

