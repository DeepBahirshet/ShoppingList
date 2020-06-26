var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var i;
for (i = 0; i < li.length; i++) {
	var span = document.createElement("Button");
	var txt = document.createTextNode("Delete");
	span.className = "close";
	span.appendChild(txt);
	li[i].appendChild(span);
}

	var list = document.querySelector("ul");
list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
});

function deleteItem() {
	var deleteElement = document.getElementsByClassName("close");
var i;
for (i = 0; i < deleteElement.length; i++) {
	deleteElement[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
		}
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var span = document.createElement("Button");
	var txt = document.createTextNode("Delete");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	deleteItem();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

deleteItem();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);