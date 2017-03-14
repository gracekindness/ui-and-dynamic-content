// element.appendChild(childElement)
// element.removeChild(childElement)

// declare variables you are going to use
var append_btn,
	remove_btn,
	container,
    item,
    itemText;


// access both buttons and currently empty div 
append_btn = document.querySelector("button");
container = document.querySelector(".container");


// create paragraph and append it to DOM tree
function addItem() {
	
	"use strict";

    item = document.createElement("li");
	
	itemText = prompt("Enter a new item for to-buy list:");
	if (itemText !== "") {
		item.innerHTML = itemText;
		container.appendChild(item);
        item.addEventListener("click", removeItem, false);
    } 
}

append_btn.addEventListener("click", addItem, false);

// remove paragraph from DOM tree
function removeItem() {
	
	"use strict";
	
	container.removeChild(item);

    
}


