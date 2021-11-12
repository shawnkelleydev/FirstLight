//structural declarations
const prayers = document.querySelector("#prayer-list-box");
const prayerInput = document.querySelector("#prayer-input");
const prayerUL = allUL[1];
const openPrayers = document.querySelector("#open-prayer");
const prayerBtn = document.querySelector("#prayer-submit");
const prayerError = document.querySelector("#prayer-error");
const prayerList = document.querySelector("#prayer-list");

//show / hide
showSectionListener(openPrayers, prayers, prayerInput);

//add/subtract
addItemListener(prayerBtn, "#prayer-input", prayerList, prayerError);
