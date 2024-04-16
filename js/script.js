// toggle active humberger menu

const navClick = document.querySelector(".navbar-nav");

// ketika humberger menu d klik

document.querySelector("#hamburger-menu").onclick = () => {
  navClick.classList.toggle("active");
};
// console.log(#hamburger-menu);
// toogle active class search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// shopping cart
document.querySelector("#shopping-cart").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik di luar side bar

const ham = document.querySelector("#hamburger-menu");

const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !navClick.contains(e.target)) {
    navClick.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

//modal box

const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal .close-icons").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
