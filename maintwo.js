console.log("Sanity") // sanity


// ### Exercise 2:
// Using the exercise above, replace the user's typing with the string below.
//  Each time they press a key,
//   a letter from the string below should display in the label instead.
//    There's no need to have the text start over from the beginning.


//===========STRING BELOW SHOULD BE USED! =================== //
// Default string: ```codeCrewString = "Code School is a hands-on class designed to train individuals
//  to be entry-level software developers within a six-month course. 
//  The minimum education requirement is at least a high school diploma or GED.
//   Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding,
//    app development, the leadership, and the life skills needed for a successful career and job market competitiveness.``` 

let ourString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";

// 1. GET A REFERENCE TO THE DOM!
let textinput = document.getElementById('TEXTINPUT');
let output = document.getElementById('USEROUTPUT');
let index = 0 // set the index of the array to equal 0
// 2. We need to attach the event we want something to happen to with an event listener
textinput.addEventListener("keydown", (event) => {
    console.log(`${event.key} is pressed`);// debugger
    index++; // each time the user presses a kay, the index counts up!
    
    //When the user enters a key, we want to take each character of the given string, and replace with a character in our string!.
    let usertype = event.key; // we want to store whatever the user enters INSIDE A VARIABLE.
    let split = ourString.split(""); // we split the string we want to use one character at a time into a seperate array
    console.log(split); //debugger
    usertype = split; //any word the user types is going to be replaced with this string!
    let newWord = split[index]; // we store the results of the string's index
    console.log(newWord); // debugger
    output.append(newWord); // append it to show up in our P element!!
})  