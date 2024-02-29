
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.querySelector(".container").classList.add("show");
    }, 500);
    document.querySelectorAll(".menu-item").forEach(function (item, index) {
      setTimeout(function () {
        item.classList.add("show");
      }, 500 + index * 200);
    });
    setTimeout(function () {
      document.querySelector(".product-container").classList.add("show");
    }, 1500);
  });