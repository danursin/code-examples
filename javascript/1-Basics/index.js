// 1. This is a comment and doesn't get executed.
/* 
    Comments begin with two slashes // and comments out the rest of the line.
    Or you can comment out a block with the /*
    You can use comments when you want to make a note about something in your code.
*/

/* 
    2. Writing things to the console
    This is a great way to note the status of your program or to interact with 
    The next line will write "hello world!" to the debug console
*/
console.log("hello world!");

/*
    3. Making a variable and using it
    I create a variable called "myName" and assign it the value "Dan"
    You can put strings together by using the + operator. (called string concatenation)
    Using the + can be a bother for lots of replacing, so look at the second way to do this using the backtick ` instead of "
*/
var myName = "Dan";
console.log("hello " + myName);
console.log(`hello ${myName} with backticks`);

/*
    4. A few primative types
    string - a piece of text like we used above. Can use single or double quotes, or backticks to create a string as long as you start and end with the same type
    number - can be a whole number or have decimals
    boolean - a true/false value
    object - a collection of key-value properties
    array - a list of items in a particular order. The first item is at array index 0
*/

// String examples
var exampleString = "I am a string with double quotes";
var exampleStringSingleQuotes = "I am a string with single qoutes";
var exampleStringBackticks = `I am a string with backticks`;

// Number examples
var exampleNumber = 75;
var addingThings = 45 + 10; // 55
var multiplyingThings = 3 * 5; // 15
var dividingThings = 15 / 2; // 7.5
var complexThings = (32 / 4 + 3) * 2; // 22

// Boolean examples
var isCodingAwesome = true;
if (isCodingAwesome) {
    console.log("I agree, coding is awesome");
} else {
    console.log("I disagree, coding is pretty cool once you get the hange of it");
}

var tenIsLessThan20 = 10 < 20; // true
var danEqualsDelaney = "Dan" === "Delaney"; // false

// Object examples
var exampleObject = {
    name: "Dan",
    isMarried: true,
    age: 31
};
console.log(`Hello, my name is ${exampleObject.name}. I'm ${exampleObject.age} years old. Am I married? ${exampleObject.isMarried}`);

// Array examples
var arrayOfNumbers = [-3, -2, -1, 0, 1, 2, 3];
console.log(arrayOfNumbers);
console.log(`There are ${arrayOfNumbers.length} numbers in arrayOfNumbers`);
console.log(`The 3rd value in the array is at index 2 and equals ${arrayOfNumbers[2]}`);
