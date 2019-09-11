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


// You get an array of numbers, return the 
// sum of all of the positives ones.

function positiveSum(arr) {
    let sum = 0;
    arr.forEach((element) => {
        (element > 0) ? sum += element : sum += 0;
    });
    return sum;
}

// Because Nathan knows it is important to stay hydrated, he 
// drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the 
// number of litres Nathan will drink, rounded to the smallest value.

// 1 hr = 0.5 litres

function litres(time) {
    return Math.floor(time * 0.5);
}

// It's pretty straightforward. Your goal is to create a function 
// that removes the first and last characters of a string. You're 
// given one parameter, the original string. You don't have to worry 
// with strings with less than two characters.

// Remove first and last characters

function removeChars(str) {
    return str.slice(1, str.length - 1);
}

// Usually when you buy something, you're asked whether your credit 
// card number, phone number or answer to your most secret question 
// is still correct. However, since someone could look over your shoulder, 
// you don't want that shown on your screen. Instead, we mask it.

function maskify(str) {
    let arrStr = [...str];
    for (let i = 0; i < arrStr.length - 4; i++) {
        arrStr[i] = '#';
    }
    return (arrStr.toString()).replace(/,/g, '');
}

// Given an array of integers, return a new array with each value doubled.

function map(x) {
    let arrResult = [];
    x.forEach(element => {
         arrResult.push(element * 2);
    });
    return arrResult;
}