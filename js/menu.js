const ham = document.querySelector("#hamburger");
const hamLI = ham.querySelectorAll("li");
const menu = document.querySelector("#menu");
const menuLI = document.querySelectorAll(".menu-li");
const openBtns = document.querySelectorAll(".open");

ham.addEventListener("click", () => hamHandler());

function hamHandler() {
  if (openBtns[0].style.left !== "0px" || openBtns[0].style.left === "") {
    menuIn();
  } else {
    menuOut();
  }
}

function menuIn() {
  menu.style.left = "0";
  left0(menuLI);
  left0(openBtns);
  hamX();
}

function menuOut() {
  menu.style.left = "-500px";
  left500(menuLI);
  left500(openBtns);
  hamE();
}

function left0(list) {
  for (let i = 0; i < list.length; i++) {
    list[i].style.left = "0px";
  }
}

function left500(list) {
  for (let i = 0; i < list.length; i++) {
    list[i].style.left = "-500px";
  }
}

function hamE() {
  for (let i = 0; i < hamLI.length; i++) {
    hamLI[i].style.background = "";
    hamLI[i].style.transform = "";
    hamLI[i].style.top = "";
    hamLI[i].style.bottom = "";
  }
}

function hamX() {
  hamLI[0].style.transform = "rotate(45deg)";
  hamLI[0].style.top = "8px";
  hamLI[1].style.background = "transparent";
  hamLI[2].style.transform = "rotate(-45deg)";
  hamLI[2].style.bottom = "8px";
}

//ham hider

let pos = 0;

document.addEventListener("scroll", (e) => {
  const newPos = window.scrollY;
  const ham = document.querySelector("#hamburger");
  if (window.innerWidth < 750) {
    setTimeout(checkY(newPos, ham), 333);
  }
});

function checkY(newPos, element) {
  //scroll down
  if (newPos > pos) {
    pos = newPos;
    element.style.bottom = "-200px";
    //scroll up
  } else if (newPos < pos || pos === 0) {
    pos = newPos;
    element.style.bottom = "";
  }
}
