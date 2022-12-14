


// Animation for "Interaction" <a>
let interaction = document.querySelector("a:nth-of-type(12)");

interaction.addEventListener("click", jumpHandler);
interaction.addEventListener("animationend", jumpHandler);

function jumpHandler() {
  interaction.classList.toggle("jump");
}

  // ----------------------------------------------------------------
  // Animatie 1 - Fade out top, Fade in bottom
  // ----------------------------------------------------------------

let interface = document.getElementById("interface");

interface.addEventListener("mousedown", interfaceHandler);
interface.addEventListener("animationend", interfaceHandler);

function interfaceHandler() {
  interface.classList.toggle("interface");
}


  // ---------------------------------------------------------------- 
  // Animatie 2 - Mousedown color change for "Events"
  // ----------------------------------------------------------------

let events = document.getElementById("events");

events.addEventListener("mousedown", eventsHandler);

function eventsHandler() {
  events.classList.toggle("events-changecolor");
}

  // ----------------------------------------------------------------
  // Leuke javascript schrijven voor een class randomizer for "And" 
  // ----------------------------------------------------------------

// Create an array of classes to distribute
let classes = [
  "jump",
  "interface",
  "events-changecolor",
  "wireflow",
  "states",
  "flow",
  "class7",
  "class8",
  "class9",
  "class10",
];

// Get the html element for the click event
let and = document.getElementById("and");

// Get the elements that will receive the classes
let elements = document.querySelectorAll("a");

and.addEventListener("click", randomizerFun);

// Function to get a random element from an array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function for distributing classes
function randomizerFun() {
  // Distribute the classes to the elements
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add(getRandomElement(classes));
  }
  // setTimeout for removing all classes from the <a> elements
  setTimeout(() => {
    let elements = document.querySelectorAll("a");
    for (var i = 0; i < elements.length; i++) {
      elements[i].removeAttribute("class");
    }
  }, 5000);
}


// ----------------------------------------------------------------
// Function for blurring all other <a> elements except the one clicked.
// ----------------------------------------------------------------

function blurLinks(event) {
  // Get all <a> elements
  let links = document.querySelectorAll("a");

  // Loop through all <a> elements // TODO: Create check for looking if the button are blurred or not, then unblur them
  for (let i = 0; i < links.length; i++) {
    if (event.target.id === "and") {
      return;
    }
    // If target is selected (focused) or target is clicked, then blur the non targeted elements
    if (links[i] !== event.target || links[i] !== document.activeElement) {
      links[i].style.filter = "blur(2px)";
    }
    // Undo the blur on the targeted or focused element
    else {
      links[i].style.filter = "none";
    }
  }
}

// ----------------------------------------------------------------
// Look into this reset button
// ----------------------------------------------------------------

// This function resets the blur on all <a> elements on the page
function resetBlur() {
  var links = document.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].style.filter = "none";
  }
}

let aLinks = document.querySelectorAll("a");
document.addEventListener("focus", blurLinks, true);
// aLinks.addEventListener("click", blurLinks);


// ----------------------------------------------------------------
// Function for rotating 360 degrees - "wireflow"
// ----------------------------------------------------------------

let wireflow = document.getElementById("wireflow");

wireflow.addEventListener("mouseover", rotateElement);

function rotateElement() {
  wireflow.classList.toggle("wireflow");
}


// ----------------------------------------------------------------
// Function for rotating the Y axis 360 degrees - "states"
// ----------------------------------------------------------------

let states = document.getElementById("states");
let timeout;

states.addEventListener("mousedown", function() {

  // Set a timer for clicking the button for 2 seconds
  timeout = setTimeout(() => {
    longpressHandler();
  }, 2000)
})

// Reset time on letting mouseclick go
states.addEventListener("mouseup", function() {
  clearTimeout(timeout);
});

// wait until the animation ends
states.addEventListener("animationend", longpressHandler);

// Toggle the class
function longpressHandler(){
  states.classList.toggle("states");
}



// ----------------------------------------------------------------
// Doubleclick events - "states"
// ----------------------------------------------------------------


let labels = document.getElementById("labels");

const cloud = document.createElement("div");
cloud.classList.add('cloud')


cloud.innerHTML = "Hey! Hoe gaat het?";

let cloudVisible = false;

labels.addEventListener("dblclick", () => {

  if(cloudVisible) {
    cloud.parentNode.removeChild(cloud);
    cloudVisible = false;
  }
  else {
    document.body.appendChild(cloud);
    cloud.style.left = labels.offsetLeft + 'px';
    cloud.style.top = labels.offsetTop - cloud.offsetHeight + 'px';

    cloudVisible = true;
  }
})
  



// ----------------------------------------------------------------
// Function for unlocking the button page
// ----------------------------------------------------------------


// let keyCode = document.querySelector('#keycode');
// let button = document.querySelector('form > button');
// let form = document.querySelector('body > section > form')

// console.log(form);
// form.addEventListener('submit', unlockPage)


// function unlockPage(ev) {

//   let ahrefLinks = document.querySelectorAll('a');
//   let keyCodeValue = keyCode.value;
//   console.log(ahrefLinks);
//   if (keyCodeValue === "cool") {
//     for (let i = 0; i < ahrefLinks.length; i++) {
//       ahrefLinks.style.display = 'none';
//     }
//   }
//   else {
//   }

//   ev.preventDefault();
// }

// console.log(form);

// unlockPage();
