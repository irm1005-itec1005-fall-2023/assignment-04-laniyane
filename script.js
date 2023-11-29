/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appID = "app";
// DOM Elements
let appContainer = document.getElementById(appID);

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
if (inputBox.value === '') {
alert("You must write something!");
}

else{
let li = document.createElement("li");
li.innerHTML = inputBox.value;
listContainer.appendChild(li);
let span = document.createElement("SPAN");
span.innerHTML = "\u00D7";
li.appendChild(span);
}
inputBox.value = "";
saveData();
}

listContainer.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
ev.target.classList.toggle('checked');
saveData();
} 
else if (ev.target.tagName === 'SPAN') {
  ev.target.parentElement.remove();
  saveData();
}
}, false);

function saveData(){
localStorage.setItem("listContainer", listContainer.innerHTML);
}

function showlist(){
listContainer.innerHTML = localStorage.getItem("listContainer");
}
showlist();