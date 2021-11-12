function deleteBtnListener(btn, liID) {
  const li = document.getElementById(liID);
  btn.addEventListener("click", () => {
    li.remove();
    localStorage.removeItem(liID);
  });
}

function removeLI(li, id) {
  li.remove();
  localStorage.removeItem(`${id}`);
}
