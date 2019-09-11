// Create a function (or write a script in Shell) that takes an 
// integer as an argument and returns "Even" for even numbers or "Odd" 
// for odd numbers.

function even_or_odd(number) {
   return (number % 2 === 0) ? 'Even' : 'Odd'
}

even_or_odd(15);

// You are going to be given a word. Your job is to return 
// the middle character of the word. If the word's length 
// is odd, return the middle character. If the word's length 
// is even, return the middle 2 characters.

function getMiddle(s) {
    let stringLength = s.length;

    if (stringLength === 1) {
        return s[0];
    } else {
        if (!(stringLength % 2 === 0)) {
            return s[(Math.floor(stringLength / 2))];
        } else {
            return `${s[Math.floor(stringLength / 2) - 1]}${s[Math.floor(stringLength / 2)]}`;
        }
    }
}

// test cases
getMiddle('test');
getMiddle('testing');
getMiddle('middle');
getMiddle('A');