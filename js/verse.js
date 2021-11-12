const verses = document.querySelector("#verse-box");
const verse = document.querySelector("#verse");
const verseButton = document.querySelector("#verse-button");
const openButtons = document.getElementsByClassName("open");
const readChapSpan = readChapterSpans[0];

//--------------------------------------------------------

//adds listener, which gets & shows text / restyles menu
function fullChapterListen(parent, span, chapter) {
  const linkHTML = `<a href="#top" class="full">read full chapter  &rarr;</a>`;
  span.innerHTML = linkHTML;
  const link = parent.querySelector(".full");
  link.addEventListener("click", () => {
    getESV(chapter);
    displayFlex(bible);
    openBible.style.backgroundColor = blue;
    openBible.style.color = "black";
    openBible.style.boxShadow = "none";
    const switcher = openBible.querySelector(".switchbox");
    switcher.style.justifyContent = "flex-end";
  });
}

//--------------------------------------------------------

//--------------------------------------------------------

const stagedVerses = [];

//preload verses in []
function versePreloader(bible) {
  for (let i = 1; i <= 3; i++) {
    const n = Math.floor(Math.random() * bible.length);
    newFetch(bible[n].passage, bible[n]);
  }
  setTimeout(check, 500);
}

function check() {
  if (stagedVerses.length > 0) {
    verseFire();
  } else {
    setTimeout(check, 500);
  }
}

//--------------------------------------------------------

//fire on new verse request / deal with array
function verseFire() {
  verse.innerHTML = stagedVerses[0].html;
  const speaker = stagedVerses[0].speaker;
  fullChapterListen(verses, readChapSpan, stagedVerses[0].chapter);
  writeCitation(stagedVerses[0]);
  stagedVerses.shift();
  const n = Math.floor(Math.random() * esv.length);
  newFetch(esv[n].passage, esv[n]); //the fetch handler pushes new html to array
}

//citation writer
function writeCitation(object) {
  const passage = object.passage;
  const speaker = object.speaker;
  if (speaker) {
    citation.innerText = `${speaker}, ${passage} ESV`;
  } else {
    citation.innerText = `${passage} ESV`;
  }
}

//--------------------------------------------------------

const esvKey = "f1f4388d24337a5f52857049d8acb0e9e1e0eb0d";
//simple fetch / push new object with html to array
function newFetch(passage, object) {
  let url = "https://api.esv.org/v3/passage/html/?q=";
  url += passage;
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: esvKey,
    },
  })
    .then((res) => res.json())
    .then((d) => {
      const html = d.passages[0];
      object.html = html;
      stagedVerses.push(object);
    })
    .catch((err) => console.error(err));
}

//--------------------------------------------------------

//fire!!!
verseButton.addEventListener("click", () => {
  verseFire();
});

versePreloader(esv);
