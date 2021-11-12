//sorts storage data by key
function loadSorter(id, item, list) {
  list.insertAdjacentHTML("beforeend", `<li id=${id}>${item}</li>`);
  //delete
  const deleteID = `del${id}`;
  const delBtn = document.getElementById(deleteID);
  deleteBtnListener(delBtn, id);
  //edit
  const span = document.getElementById(`span${id}`);
  editItemsListener(span, id);
}

//get keys and use to work with storage data
function loadStoredItems() {
  let keys = Object.keys(localStorage);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const item = localStorage.getItem(keys[i]);
    const id = keys[i][0];
    if (id === "t") {
      loadSorter(key, item, taskList);
    } else if (id === "n") {
      loadSorter(key, item, noteList);
    } else if (id === "p") {
      loadSorter(key, item, prayerList);
    }
  }
}

loadStoredItems();
