//get ids
function getCode(inputField) {
  let n = Math.random() * 10000000;
  n = n.toFixed(0);
  let id;
  if (inputField === taskInput) {
    id = "t";
  } else if (inputField === noteInput) {
    id = "n";
  } else {
    id = "p";
  }
  //letter + number
  id += n;
  return id;
}

//write li
function writeItems(inputField, ul, error) {
  if (inputField.value !== "") {
    //clear error text
    error.innerHTML = "";
    //get a barcode
    let id = getCode(inputField);
    //new item html
    ul.insertAdjacentHTML(
      "beforeend",
      `
      <li id="${id}">
        <span id="span${id}" class="js-ignore">
          <p class="js-ignore">${inputField.value}</p>
          <form action="index.html" class="edit js-ignore" style="display:none;">
            <input type="text" class="js-ignore" id="in${id}">
          </form>
        </span>
        <button id="del${id}">x</button>
      </li>
      `
    );
    //local storage
    const li = document.getElementById(`${id}`).innerHTML;
    localStorage.setItem(id, li);
    //delete
    const delBtn = document.getElementById(`del${id}`);
    deleteBtnListener(delBtn, id);
    //clear inputField
    inputField.value = "";
    //edit
    const span = document.getElementById(`span${id}`);
    editItemsListener(span, id);
  } else {
    //blank input error message
    error.innerHTML = `<p>Please include text.</p>`;
  }
}

//add item
function addItemListener(btn, inputID, ul, error) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const text = document.querySelector(inputID);
    writeItems(text, ul, error);
  });
}
