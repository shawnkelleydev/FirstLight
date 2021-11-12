const allUL = document.querySelectorAll("ul");
const blue = "rgb(196, 255, 140)";

const modeBtn = document.querySelector("#mode");
const body = document.querySelector("body");
const wrapper = body.querySelector("div");
const divs = wrapper.querySelectorAll("div");
const openDiv = document.querySelector("#open-div");
const citation = document.querySelector("#citation");
//show full chapter links
const readChapterSpans = document.querySelectorAll(".read-chapter");

//display: none
function displayNone(element) {
  element.style.display = "none";
}

//display: block
function displayBlock(element) {
  element.style.display = "block";
}

//display: flex
function displayFlex(element) {
  element.style.display = "flex";
}

//show & hide section
function showSectionListener(btn, section, inputField) {
  const switcher = btn.querySelector(".switchbox");
  btn.addEventListener("click", () => {
    if (section.style.display === "none" || section.style.display === "") {
      displayFlex(section); //shows div
      switcher.style.justifyContent = "flex-end";
      // switcher.style.backgroundColor = "white";
      // inputField.focus(); //focuses on input field if applicable
      btn.style.backgroundColor = blue;
      btn.style.boxShadow = "none";
      btn.style.color = "black";
      // menuOut(); //hides menu when section openned
    } else {
      displayNone(section); //hides div
      btn.style.backgroundColor = "";
      btn.style.boxShadow = "";
      switcher.style.justifyContent = "";
      switcher.style.backgroundColor = "";

      btn.style.color = "";
    }
  });
}
