// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var button1 = document.querySelector("#noun1");
var button2 = document.querySelector("#verb");
var button3 = document.querySelector("#adjective");
var button4 = document.querySelector("#noun2");
var button5 = document.querySelector("#setting");
// Constants for p tag to display query selectors
var pButton1 = document.querySelector("#choosenNoun1");
var pButton2 = document.querySelector("#choosenVerb");
var pButton3 = document.querySelector("#choosenAdjective");
var pButton4 = document.querySelector("#choosenNoun2");
var pButton5 = document.querySelector("#choosenSetting");
// Constants for final buttons and p tags

var playButton = document.querySelector("#playback");
var randomButton = document.querySelector("#random");
var printStatement = document.querySelector("#story");
var resetButton = document.querySelector("#restart");
// Variables for pre-defined arrays
var listNoun1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var listVerb = ["sat on","ate", "danced with","saw", "doesn't like", "kissed"];
var listAdjective = ["a funny", "a scary","a goofy", "a slimy", "a barking", "a fat"];
var listNoun2 = ["goat", "monkey", "fish", "cow", "frog","bug", "worm"];
var listSetting = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements

var count = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    var element  = listNoun1[count];
     
    pButton1.textContent = element;

    count ++;
    // if-else to change count setting
    if (count >= listNoun1.length) {
        count = 0;
    }
}

function verb_on_click() {
    var element  = listVerb[count];
     
    pButton2.textContent = element;
    
    count ++;
    // if-else to change count setting
    if (count >= listVerb.length) {
        count = 0;
    }
    
}

function adjective_on_click() {
    var element  = listAdjective[count];
     
    pButton3.textContent = element;
    
    count ++;
    // if-else to change count setting
    if (count >= listAdjective.length) {
        count = 0;
    }
    
}

function noun2_on_click() {
    var element  = listNoun2[count];
     
    pButton4.textContent = element;
    
    count ++;
    // if-else to change count setting
    if (count >= listNoun2.length) {
        count = 0;
    }
    
}

function setting_on_click() {
    var element  = listSetting[count];
     
    pButton5.textContent = element;
    
    count ++;
    // if-else to change count setting
    if (count >= listSetting.length) {
        count = 0;
    }
}

// concatenate the user story and display
function playback_on_click() {

var pButton1 = document.querySelector("#choosenNoun1").textContent;
var pButton2 = document.querySelector("#choosenVerb").textContent;
var pButton3 = document.querySelector("#choosenAdjective").textContent;
var pButton4 = document.querySelector("#choosenNoun2").textContent;
var pButton5 = document.querySelector("#choosenSetting").textContent;

    var finalSentence = pButton1 + " " + pButton2 + " " + pButton3 + " " + pButton4 + " " + pButton5;

    printStatement.textContent = finalSentence;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    var randomNoun1 = listNoun1[Math.floor(Math.random() * listNoun1.length)];
    var randomVerb = listVerb[Math.floor(Math.random() * listVerb.length)];
    var randomAdjective = listAdjective[Math.floor(Math.random() * listAdjective.length)];
    var randomNoun2 = listNoun2[Math.floor(Math.random() * listNoun2.length)];
    var randomSetting = listSetting[Math.floor(Math.random() * listSetting.length)];

    var finalSentence = randomNoun1 + " " + randomVerb + " " + randomAdjective + " " + randomNoun2 + " " + randomSetting;

    printStatement.textContent = finalSentence;
}
// Restart button to play again
function resetValues() {
    count = 0;
    pButton1.textContent = "";
    pButton2.textContent = "";
    pButton3.textContent = "";
    pButton4.textContent = "";
    pButton5.textContent = "";
    printStatement.textContent = "";
}

/* Event Listeners
-------------------------------------------------- */
button1.addEventListener("click", noun1_on_click);
button2.addEventListener("click", verb_on_click);
button3.addEventListener("click", adjective_on_click);
button4.addEventListener("click", noun2_on_click);
button5.addEventListener("click", setting_on_click);
button5.addEventListener("click", setting_on_click);
playButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
resetButton.addEventListener("click", resetValues);