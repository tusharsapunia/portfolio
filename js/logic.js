// Fuction for sidebar

function sidebarShow() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function sidebarHide() {
  const sidebarhide = document.querySelector(".sidebar");
  sidebarhide.style.display = "none";
}

// funtion for back to top btn
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// typeWriter effect
const element = document.getElementById("typewriter");
const texts = ["Senior Wordpress Developer / Technical lead"];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {
  const currentText = texts[textIndex];

  if (!deleting) {
    element.textContent = currentText.slice(0, charIndex++);

    if (charIndex > currentText.length) {
      deleting = true;
      setTimeout(typeWriter, 1500);
      return;
    }
  } else {
    element.textContent = currentText.slice(0, charIndex--);

    if (charIndex < 0) {
      deleting = false;
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeWriter, deleting ? 50 : 100);
}

typeWriter();
