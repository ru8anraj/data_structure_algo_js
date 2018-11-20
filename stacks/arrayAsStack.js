/*
 * Stacks
 * Last In First Out
 * Best example for stacks is {Book submission, Browser back button}
 */

/*
 * considering array as a stack
 * Methods for stack
 *  - Push - Last In
 *  - Pop - First Out
 *  - length - length of the stack (array)
 *  - peak - last element of the stack (array)
 *
 * Lets consider the palindrome example to explain the JS Array as a stack
 */

var letters = [];
var words = "racecar"; // palindrome word
var rwords = "";       // variable to store reversed word

// pushing all letters in words to letters array
for(let i=0; i<words.length; i++) {
  letters.push(words[i]);
}

// reversing the words by popping the letters out of letters array
for(let i=0; i<words.length; i++) {
  rwords += letters.pop();
}

if (rwords === words) {
  console.log("Given word is palindrome");
} else {
  console.log("Given word is not palindrome");
}
