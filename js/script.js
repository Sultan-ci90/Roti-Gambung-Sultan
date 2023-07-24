// toggle active

const navClick = document.querySelector(".navbar-nav");

// ketika humberger menu d klik

document.querySelector("#hamburger-menu").onclick = () => {
  navClick.classList.toggle("active");
};
// console.log(#hamburger-menu);

// klik di luar side bar

const ham = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !navClick.contains(e.target)) {
    navClick.classList.remove("active");
  }
});
