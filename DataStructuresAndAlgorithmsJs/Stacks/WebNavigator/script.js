const Stack = require("./Stack");
const prompt = require("prompt-sync")();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = "first page";
let finish = false;
let showBack = false;
let showNext = false;

// ------------------------------
// Helper Functions
// ------------------------------
const showCurrentPage = (action) => {
  console.log(`\n ${action}`);
  console.log(`Current page is ${currentPage}`);
  console.log(`Back pages = ${backPages.peek()}`);
  console.log(`Next pages = ${nextPages.peek()}`);
};

const newPages = (page) => {
  backPages.push(currentPage);
  currentPage = page;
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }
  showCurrentPage("New: ");
};

const backPage = () => {
  nextPages.push(currentPage);
  if (!backPages.isEmpty()) {
    currentPage = backPages.pop();
  }
  showCurrentPage("Back: ");
};

const nextPage = () => {
  backPages.push(currentPage);
  if (!nextPages.isEmpty()) {
    currentPage = nextPages.pop();
  }
  showCurrentPage("Next: ");
};

/*
 * The following strings are used to prompt the user
 */
const baseInfo = "\nEnter a url";
const backInfo = "B|b for back page";
const nextInfo = "N|n for next page";
const quitInfo = "Q|q for quit";
const question = "Where would you like to go today? ";

// ------------------------------
// User Interface Part 1
// ------------------------------
showCurrentPage("DEFAULT: ");
while (!finish) {
  let instructions = baseInfo;
  if (!backPages.isEmpty()) {
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }

  if (nextPages.peek() != null) {
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }

  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);

// ------------------------------
// User Interface Part 2
// ------------------------------


const response = prompt(question);
const lowerCaseResponse = response.toLowerCase();

if (
  lowerCaseResponse !== "n" &&
  lowerCaseResponse !== "b" &&
  lowerCaseResponse !== "q"
) {
  // we create a new page based on the url
  newPages(lowerCaseResponse);
} else if (lowerCaseResponse === "n") {
  if (showNext) {
    nextPage();
  } else {
    console.log("You cannot proceed to next page.\n next page stack is empty");
  }
} else if (lowerCaseResponse === "b") {
  if (showBack) {
    backPage();
  } else {
    console.log(
      "you cannot navigate to the backpage. \n back page stack is empty"
    );
  }
} else if (lowerCaseResponse === "q") {
  finish = true;
}
}


