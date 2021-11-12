//note declarations
const bible = document.querySelector("#bible-box");
const openBible = document.querySelector("#open-bible");
const bibleForm = bible.querySelector("form");
const bibleInp = bible.querySelector("#bible-input");
const textSpan = bible.querySelector("#bible-text");
const bibleNav = bible.querySelectorAll(".bible-nav");
const bibleFull = bible.querySelector(".read-chapter");
const bibleErr = bible.querySelector("#bible-error");

showSectionListener(openBible, bible, bibleInp);

//api.esv.org/v3/passage/[text|html]/
//Token f1f4388d24337a5f52857049d8acb0e9e1e0eb0d

//listener
bibleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = bibleInp.value;
  //empty error / text fields
  bibleErr.innerHTML = "";
  textSpan.innerText = "";
  //get text from esv api
  getESV(input);
});

//----------------------------------------------------------------

//get passage
function getESV(passage) {
  let url = "https://api.esv.org/v3/passage/html/?q=";
  url += passage;
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: esvkey,
    },
  })
    .then((res) => res.json())
    .then((d) => {
      if (!d.passages[0]) {
        textSpan.innerText = "You messed up. Please try again.";
      } else {
        showPassage(d.passages[0]);
      }
    })
    .catch((e) => (textSpan.innerText = e.body));
}

//----------------------------------------------------------------

function showPassage(passage) {
  //write passage html
  textSpan.innerHTML = passage;
  const citation = textSpan.querySelector(".extra_text").innerText;
  chapterNav(citation);
}

//----------------------------------------------------------------

//chapter navigation
function chapterNav(citationText) {
  //parse data
  const locationData = parsePassage(citationText);
  //get values from returned object
  const book = locationData.book;
  const chapter = locationData.chapter;
  const passage = book + chapter;
  const isVerse = locationData.verse;
  //make & select links
  bibleNav[0].innerHTML = navHTML;
  bibleNav[1].innerHTML = navHTML;
  const lastLinks = document.querySelectorAll(".last");
  const nextLinks = document.querySelectorAll(".next");
  //set last / next values
  const lastCh = chapter - 1;
  const nextCh = chapter + 1;
  //apply listeners
  chapterNavListen(lastLinks, book, lastCh);
  chapterNavListen(nextLinks, book, nextCh);
  //show full chapter listener
  if (isVerse) {
    //check for presence of verses (bool t/f from parsePassage(s))
    showChapter(passage);
  } else {
    const span = bible.querySelector(".read-chapter");
    span.innerHTML = ``;
  }
}
//----------------------------------------------------------------
const navHTML = `
  <span class="last"><a href="#top">&larr; last chapter</a></span><span class="next"><a href="#top">next chapter &rarr;</a></span>
`;
//----------------------------------------------------------------

//last / next listeners
function chapterNavListen(linkList, book, newCh) {
  const passage = book + newCh;
  for (let i = 0; i < linkList.length; i++) {
    linkList[i].addEventListener("click", () => {
      getESV(passage);
    });
  }
}

//parse string for book and chapter
function parsePassage(string) {
  let burst = string.split(" ");
  //grab the book
  let book = burst.filter((x) => !parseInt(x));
  book = book[0];
  //go get the chapter
  let numbers = burst.filter((x) => parseInt(x));
  let chapter;
  let verse;
  if (numbers.length > 1) {
    //add book number to book
    book = numbers[0] + book;
    //get chapter number - type = number
    chapter = parseInt(numbers[1]);
    //check for verse
    verse = verseCheck(numbers[1]);
  } else {
    chapter = parseInt(numbers[0]);
    verse = verseCheck(numbers[0]);
  }
  //return object
  const data = {
    book,
    chapter,
    verse,
  };
  return data;
}

function verseCheck(ref) {
  let verse;
  const split = ref.split(":");
  if (split.length > 1) {
    verse = true;
  } else {
    verse = false;
  }
  return verse;
}

//----------------------------------------------------------------

//read full chapter -- small differences from verse.js

function showChapter(passage) {
  //set the table
  const html = `<a href="#top" class="full">read full chapter  &rarr;</a>`;
  const span = bible.querySelector(".read-chapter");
  span.innerHTML = html;
  const link = bible.querySelector(".full");
  //listen
  link.addEventListener("click", () => {
    getESV(passage);
  });
}
