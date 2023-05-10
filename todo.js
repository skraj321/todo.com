let input = document.getElementById("input");
let list = document.getElementById("list");

function addTask() {
	if (input.value === "") {
		alert("Please enter a task ");
	} else {
		let li = document.createElement("li");
		let deleteButton = document.createElement("button");
		deleteButton.innerHTML = "Delete";
		deleteButton.className = "delete";
		
		deleteButton.onclick = function() {
			list.removeChild(li);
		}
		
		let task = document.createTextNode(input.value);
		
		li.appendChild(task);
		li.appendChild(deleteButton);
		
		list.appendChild(li);
		
		input.value = "";
	}
}