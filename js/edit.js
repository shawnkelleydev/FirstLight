function editItemsListener(parent, id) {
  const li = document.querySelector(`#${id}`);
  const p = parent.children[0];
  const form = parent.children[1];
  const input = document.getElementById(`in${id}`);
  //span click event
  p.addEventListener("click", () => {
    displayNone(p);
    displayBlock(form);
    input.focus();
    const text = p.innerText;
    input.value = text;
  });
  //blur event
  input.addEventListener("blur", (e) => {
    if (input.value === "") {
      //remove and remove from storage if left blank
      li.remove();
      localStorage.removeItem(`${id}`);
      console.log(
        "If you are using Chrome, an error may throw here due to a duplicate blur event.  I decided to leave it in place because user experience is uneffected and there are no errors in Safari.  Thanks for your patience with this bug!"
      );
    } else {
      displayNone(form);
      displayBlock(p);
      p.innerText = input.value;
      localStorageEdit(id);
    }
  });
  //submit event
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === "") {
      //remove and remove from storage if left blank
      li.remove();
      localStorage.removeItem(`${id}`);
    } else {
      e.preventDefault();
      displayNone(form);
      displayBlock(p);
      p.innerText = input.value;
      localStorageEdit(id);
    }
  });
}

//edit local storage
function localStorageEdit(id) {
  localStorage.removeItem(id);
  const content = document.getElementById(id).innerHTML;
  localStorage.setItem(id, content);
}
