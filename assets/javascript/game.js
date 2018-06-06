
// list of countries User will be guessing on
var myList = ["Japan", "Germany", "Korea", "China", "France", "Hawaii", "Russia", "United States", "Philippines", "India", "Spain", "Brazil"];
console.log(myList);

// list of characters User will be using to guess
var myGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(myGuesses);

// this will show until User picks the right characters
var blanks = "_";
console.log(blanks);

for (i = 0; i < myList.length; i++) {
    console.log(myList[i]);
}

var myGuesses = document.getElementById("char");

document.onkeyup = function(event) {
    char.textContent = event.key;
};