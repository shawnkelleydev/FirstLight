//structural declarations
const notes = document.querySelector("#notes-box");
const noteInput = document.querySelector("#note-input");
const notesUL = allUL[0];
const openNotes = document.querySelector("#open-notes");
const noteBtn = document.querySelector("#note-submit");
const noteError = document.querySelector("#note-error");
const noteList = document.querySelector("#note-list");

//show / hide
showSectionListener(openNotes, notes, noteInput);

//add/subtract
addItemListener(noteBtn, "#note-input", noteList, noteError);
