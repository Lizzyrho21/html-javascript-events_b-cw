// NOTE: Use Arrow function syntax when adding event listeners!

// PRO TIP: A string is nothing more than an array of characters => "h", "e", "l", "l", "o"

// ### Exercise 1:
// Create a page with a blank label and a text area.
//  When someone types into the text area, 
//  change the label to show what the person has typed.

//1. Get a reference to the DOM
let blank = document.getElementById('BLANK'); 
let  textbox = document.getElementById('TEXTBOX');


//2. add an event listenr to the textbox
textbox.addEventListener("keydown", (event) => {
    
    console.log(`${event.key} was pressed`) //debugger
    //2A the event object will select the user input
  let userinput = event.key; // store the result of event key into a variable
  //3.use a method that will create the text on the label!
  blank.append(userinput); //append whatever the user types inside of the label we created!
    
    
    
    
   
});

